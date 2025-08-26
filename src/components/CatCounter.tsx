type CatCounterProps = {
  count: number;
  onAdd: () => void;
  onRemove: () => void;
  onReset: () => void;
};

export default function CatCounter({
  count,
  onAdd,
  onRemove,
  onReset,
}: CatCounterProps) {
  return (
    <section
      aria-label="cat-counter"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "30rem",

        width: "100%",
        maxWidth: 360,
        margin: "0 auto",
        padding: "1rem",
        borderRadius: 12,
      }}>
      <p
        aria-live="polite"
        style={{
          margin: 0,
          textAlign: "center",
          fontFamily: "Barriecito",
          fontSize: "1.25rem",
          fontWeight: 600,
          padding: "12px 20px",
          borderRadius: 10,
          backgroundColor: "rgba(255, 255, 255, 0.6)",
        }}>
        Cats spotted: <strong>{count}</strong>
      </p>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
        <button
          onClick={onAdd}
          style={{
            width: "100%",
            padding: "12px 16px",
            fontFamily: "Barriecito",
            fontSize: "1.125rem",
            fontWeight: 700,
            borderRadius: 10,
            backgroundColor: "rgba(255, 255, 255, 0.6)",
          }}>
          Add Cat
        </button>

        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={onRemove}
            disabled={count === 0}
            style={{
              flex: 1,
              padding: "10px 12px",
              borderRadius: 10,
              fontFamily: "Barriecito",
              fontWeight: 600,
              backgroundColor: "rgba(255, 255, 255, 0.6)",
            }}>
            Remove Cat
          </button>
          <button
            onClick={onReset}
            style={{
              flex: 1,
              padding: "10px 12px",
              borderRadius: 10,
              fontFamily: "Barriecito",
              fontWeight: 600,
              backgroundColor: "rgba(255, 255, 255, 0.6)",
            }}>
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}
