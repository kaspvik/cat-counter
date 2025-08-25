import { useState } from "react";
import CatCounter from "./components/CatCounter";
import CatGallery from "./components/CatGallery";
import city from "/src/assets/Plomari.png"; // ✅ importera bakgrunden

export default function App() {
  const [count, setCount] = useState<number>(0);
  const add = () => setCount((c) => c + 1);
  const remove = () => setCount((c) => Math.max(0, c - 1));
  const reset = () => setCount(0);

  return (
    <main>
      <h1>Cat Counter</h1>

      <div
        aria-label="city"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 500,
          aspectRatio: "8 / 11",
          backgroundImage: `url(${city})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 12,
          overflow: "hidden",
          marginInline: "auto",
        }}>
        <CatCounter
          count={count}
          onAdd={add}
          onRemove={remove}
          onReset={reset}
        />
        <CatGallery count={count} />
      </div>
    </main>
  );
}
