import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Tableland } from "./components/Tableland";
import logo from "/logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <nav className="sticky top-0 flex items-center justify-between flex-wrap bg-lightgreen opacity-100 shadow p-2 mb-8">
        <h1 className="text-2xl font-bold">
          <img src={logo} alt="Tableland Logo" width={200} height={48} />
        </h1>
        <div>
          <ConnectButton />
        </div>
      </nav>
      <main className="flex justify-center flex-wrap">
        <Tableland />
      </main>
    </>
  );
}

export default App;
