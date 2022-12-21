import React, { useState } from "react";
import { createWallet, importWallet } from "./library";

function App() {
  // const [showModal, setShowModal] = useState(false);
  const [address, setAddress] = useState("");
  const [mnemonic, setMnemonic] = useState("");

  const [inputMnemonic, setInputMnemonic] = useState("");
  const [inputAddress, setInputAddress] = useState("");

  const generateMnemonic = async () => {
    const { mnemonic, wallet } = await createWallet();
    setAddress(wallet.address);
    setMnemonic(mnemonic);
  };

  const importWalletFromMnemonic = () => {
    if (!inputMnemonic) {
      return alert("Please input seed phrase");
    }
    const wallet = importWallet(mnemonic);
    if (wallet) {
      setInputAddress(wallet.address);
    } else {
      alert("Please check your mnemonic");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div
          className="func-container"
          style={{ borderColor: "rgb(222 215 215)" }}
        >
          <div className={"text-container"}>
            <div className="text">
              <h3>Wallet address</h3>
              {address}
            </div>
          </div>
          <div className={"text-container"} style={{marginTop: 10}}>
            <div className="text">
              <h3>Seed Phrase</h3>
              {mnemonic}
            </div>
          </div>
          <button
            className="generate-button"
            onClick={generateMnemonic}
            style={{ background: "#ba4518", color: "white" }}
          >
            Generate
          </button>
        </div>
        <div
          className="func-container"
          style={{ borderColor: "rgb(222 215 215)" }}
        >
          <div className={"text-container"}>
            <div className="text">
              <h3>Wallet address</h3>
              {inputAddress}
            </div>
          </div>
          <div className={"text-container"} style={{marginTop: 10}}>
            <div className="text">
              <h3>Seed Phrase</h3>
              <input
                type={"text"}
                className={"mnemonic-input"}
                placeholder="Please input seed phrase"
                value={inputMnemonic}
                onChange={(e) => {
                  setInputMnemonic(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            className="generate-button"
            style={{ background: "#0b8443", color: "white" }}
            onClick={importWalletFromMnemonic}
          >
            Import
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
