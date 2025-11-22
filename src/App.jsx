// src/App.jsx
import React from "react";
import { CheckoutWidget, darkTheme } from "thirdweb/react";
import { createThirdwebClient, defineChain } from "thirdweb";

const client = createThirdwebClient({
  clientId: "YOUR_THIRDWEB_CLIENT_ID_HERE", // <-- paste real clientId
});

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <CheckoutWidget
        theme={darkTheme({
          colors: { tertiaryBg: "hsl(0, 0%, 11%)" },
        })}
        client={client}
        name={"POLO PATRONIUM"}
        currency={"USD"}
        chain={defineChain(1)} // Ethereum mainnet
        amount={"1"}           // $1 (we can make this dynamic later)
        tokenAddress={"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"} // USDC on ETH
        seller={"0xFEE3C75691E8C10eD4246b10635B19bfFf06Ce16"}       // your wallet
        buttonLabel={"BUY PATRON"}
      />
    </div>
  );
}