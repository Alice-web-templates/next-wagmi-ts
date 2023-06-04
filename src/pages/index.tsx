import { ConnectButton } from "@rainbow-me/rainbowkit";
import { readContract } from "wagmi/actions";
import { ABI, CONTRACT_ADDRESS } from "~/data/contractData";

export default function App() {
  const readNum = async () => {
    const maybeNumber = await readContract({
      address: CONTRACT_ADDRESS,
      abi: ABI,
      functionName: "whitelistedAmount",
    });
    console.log(maybeNumber);
  };

  return (
    <div className="text-center">
      <h1>Testing</h1> <ConnectButton />
      <button onClick={readNum}>Read num</button>
    </div>
  );
}
