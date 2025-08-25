import { CAT_LAYOUT } from "./CatLayout";

type Props = { count: number };

const catImages = Object.values(
  import.meta.glob("/src/assets/smulor/*.{png,jpg,jpeg,svg}", {
    eager: true,
    as: "url",
  })
).sort() as string[];

export default function CatGallery({ count }: Props) {
  const overload = count >= 10;
  const max = Math.min(count, catImages.length, CAT_LAYOUT.length);

  return (
    <section aria-label="cat-gallery">
      {overload && <p role="alert">Cat Overload!</p>}

      <div>
        {Array.from({ length: max }).map((_, i) => {
          const src = catImages[i];
          const p = CAT_LAYOUT[i];
          return (
            <img
              key={i}
              src={src}
              alt="cat"
              style={{
                position: "absolute",
                transform: `translate(-50%, -50%) rotate(${p.rotate ?? 0}deg)`,
                top: `${p.top}%`,
                left: `${p.left}%`,
                width: `${p.width}%`,
                height: "auto",
                zIndex: p.z ?? 1,
                objectFit: "contain",
                pointerEvents: "none",
                userSelect: "none",
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
