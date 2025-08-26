import { useState } from "react";
import CatCounter from "./components/CatCounter";
import CatGallery from "./components/CatGallery";
import city from "/src/assets/Plomari.png";
import cityGif from "/src/assets/greek.gif";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const add = () => setCount((c) => c + 1);
  const remove = () => setCount((c) => Math.max(0, c - 1));
  const reset = () => setCount(0);

  return (
    <main>
      <h1
        style={{
          textAlign: "center",
          margin: 4,
          marginBottom: 10,
          fontSize: "4.5rem",
          fontWeight: "700",
          fontFamily: "Barriecito",
        }}>
        Cat Counter
      </h1>

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
        <div>
          <img
            src={cityGif}
            alt="Greek flag waving in the wind"
            aria-hidden
            draggable={false}
            style={{
              position: "absolute",
              top: "35.8%",
              left: "63.6%",
              width: "9.2%",
              height: "auto",
              transform: "translate(-50%, -50%)",
              objectFit: "contain",
              pointerEvents: "none",
            }}
          />
        </div>
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
