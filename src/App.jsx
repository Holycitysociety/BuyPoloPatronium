import React from "react";
import { BuyWidget } from "thirdweb/react";
import { base } from "thirdweb/chains";
import { client } from "./thirdwebClient";

const PATRON_ADDRESS = "0x128445CAAB304A9203CCb87D06dD888823749FbE"; // proxy
const TREASURY_ADDRESS = "0xFEE3C75691E8C10eD4246b10635B19bfFf06Ce16";

function App() {
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
          amount="50"                 // default $50, user can change
          currency="USD"              // pay in USD-equivalent
          tokenAddress={PATRON_ADDRESS}   // token they are buying
          receiverAddress={TREASURY_ADDRESS} // who receives the funds
          theme="dark"
          title="Polo Patronium"
          description="Official patronage token of the USPPA"
          showThirdwebBranding={false}
        />
      </div>
    </div>
  );
}

export default App;
