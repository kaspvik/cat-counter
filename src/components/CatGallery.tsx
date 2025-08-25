type Props = { count: number };

export default function CatGallery({ count }: Props) {
  const cats = Array.from({ length: count });
  const overload = count >= 10;

  return (
    <section aria-label="cat-gallery">
      {overload && <p role="alert">Cat Overload!</p>}
      <div>
        {cats.map((_, i) => (
          <span key={i} aria-label="cat">
            🐱
          </span>
        ))}
      </div>
    </section>
  );
}
