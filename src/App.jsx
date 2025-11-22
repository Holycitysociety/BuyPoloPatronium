// src/App.jsx
import React from "react";
import { CheckoutWidget } from "thirdweb/react";
import { defineChain } from "thirdweb";
import { client } from "./thirdwebClient";

const baseChain = defineChain(8453); // Base mainnet chain id

const TREASURY_ADDRESS = "0xFEE3C75691E8C10eD4246b10635B19bfFf06Ce16";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        margin: 0,
        backgroundColor: "#050505",
        color: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        padding: "24px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "520px" }}>
        <h1
          style={{
            textAlign: "center",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontSize: "0.95rem",
            marginBottom: "20px",
          }}
        >
          Buy Polo Patronium (PATRON)
        </h1>

        <CheckoutWidget
          client={client}
          chain={baseChain}
          // amount of the checkout in displayCurrency
          amount={100}                        // ← default $100; user can change inside widget
          seller={TREASURY_ADDRESS}           // where funds land (Base)
          paymentMethods={["card", "crypto"]} // allow both
          displayCurrency="USD"
          theme="dark"
        />

        <p
          style={{
            marginTop: "14px",
            fontSize: "0.75rem",
            lineHeight: 1.5,
            color: "#a7a7a7",
            textAlign: "center",
          }}
        >
          After your payment is confirmed, Polo Patronium (PATRON) will be
          delivered from the USPPA treasury wallet to your connected wallet on
          Base.
        </p>
      </div>
    </div>
  );
}