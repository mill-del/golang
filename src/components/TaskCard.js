export default function TaskCard({ task, onDelete, onToggle }) {
  return (
    <div
      className={`card mb-3 shadow-sm border-0 task-card ${
        task.completed ? "task-done" : "task-pending"
      }`}
    >
      <div className="card-body d-flex justify-content-between align-items-center">
        <span
          onClick={() => onToggle(task.id)}
          className={`fs-5 fw-semibold ${
            task.completed ? "text-muted text-decoration-line-through" : "text-dark"
          }`}
          style={{ cursor: "pointer" }}
        >
          {task.title}
        </span>
        <div>
          <button
            className={`btn btn-sm ${
              task.completed ? "btn-outline-secondary" : "btn-outline-success"
            } me-2`}
            onClick={() => onToggle(task.id)}
          >
            {task.completed ? "↩️ Вернуть" : "✅ Выполнить"}
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => onDelete(task.id)}
          >
            🗑 Удалить
          </button>
        </div>
      </div>
    </div>
  );
}
