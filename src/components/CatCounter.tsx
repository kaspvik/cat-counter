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
    <section aria-label="cat-counter">
      <p>
        Cats spotted: <strong>{count}</strong>
      </p>
      <div>
        <button onClick={onAdd}>Add Cat</button>
        <button onClick={onRemove} disabled={count === 0}>
          Remove Cat
        </button>
        <button onClick={onReset}>Reset</button>
      </div>
    </section>
  );
}
