import { useState } from "react";
import CatCounter from "./components/CatCounter";
import CatGallery from "./components/CatGallery";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const add = () => setCount((c) => c + 1);
  const remove = () => setCount((c) => Math.max(0, c - 1));
  const reset = () => setCount(0);

  return (
    <main>
      <h1>Cat Counter</h1>
      <CatCounter count={count} onAdd={add} onRemove={remove} onReset={reset} />
      <CatGallery count={count} />
    </main>
  );
}
