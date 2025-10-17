import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, completed: false });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Введите задачу..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn btn-success px-4">Добавить</button>
      </div>
    </form>
  );
}
