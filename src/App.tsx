import { Money, CurrencyDollar } from "@phosphor-icons/react";

function App() {
  return (
    <div className="flex w-screen h-screen text-3xl font-bold text-emerald-700 text-center justify-center items-center">
      <CurrencyDollar size={32} />
      <Money size={32} />
    </div>
  );
}

export default App;
