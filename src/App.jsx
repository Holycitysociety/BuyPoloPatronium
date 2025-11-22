import { CheckoutWidget } from "thirdweb/react";
import { createThirdwebClient, defineChain } from "thirdweb";
import { createWallet } from "thirdweb/wallets";

const client = createThirdwebClient({
  clientId: "f58c0bfc6e6a2c00092cc3c35db1eed8",
});

function Example() {
  return (
    <CheckoutWidget
      client={client}
      name={"POLO PATRONIUM"}
      currency={"USD"}
      chain={defineChain(1)}
      amount={"1.00"}
      tokenAddress={"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"}
      seller={"0xfee3c75691e8c10ed4246b10635b19bfff06ce16"}
    />
  );
}

