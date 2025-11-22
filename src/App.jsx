// src/App.jsx
import React from "react";
import { BuyWidget } from "thirdweb/react";
import { base } from "thirdweb/chains";
import { client } from "./thirdwebClient";

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
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div style={{ maxWidth: 420, width: "100%" }}>
        <h1
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            fontSize: "0.9rem",
            textAlign: "center",
            marginBottom: "18px",
          }}
        >
          Buy Polo Patronium (PATRON)
        </h1>

        <BuyWidget
          client={client}
          chain={base}
          amount="50"     // default $50; user can change
          currency="USD"
          theme="dark"
        />
      </div>
    </div>
  );
}