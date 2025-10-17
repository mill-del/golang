export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="btn-group mb-4 d-flex">
      {["all", "active", "completed"].map((f) => (
        <button
          key={f}
          className={`btn btn-${filter === f ? "primary" : "outline-primary"}`}
          onClick={() => setFilter(f)}
        >
          {f === "all" ? "Все" : f === "active" ? "Активные" : "Выполненные"}
        </button>
      ))}
    </div>
  );
}
