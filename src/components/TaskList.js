import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { CheckCircle, Trash2, Edit3, Save } from "lucide-react";

const TaskList = ({ tasks, onUpdate, onDelete, onToggleComplete }) => {
  const [editTaskId, setEditTaskId] = useState(null);
  const [editData, setEditData] = useState({ title: "", description: "" });

  const startEdit = (task) => {
    setEditTaskId(task.id);
    setEditData({ title: task.title, description: task.description });
  };

  const saveEdit = (id) => {
    onUpdate(id, editData);
    setEditTaskId(null);
  };

  return (
    <div className="task-list d-flex flex-wrap gap-4 justify-content-center">
      {tasks.length === 0 ? (
        <p className="text-muted mt-4">Нет задач 💤</p>
      ) : (
        tasks.map((task) => (
          <Card
            key={task.id}
            className={`shadow p-3 rounded-4 border-0 ${
              task.completed ? "bg-light text-muted" : "bg-white"
            }`}
            style={{
              width: "23rem",
              borderTop: "5px solid #b38cb4",
              transition: "0.3s",
            }}
          >
            {editTaskId === task.id ? (
              <>
                <Form.Control
                  className="mb-2"
                  value={editData.title}
                  onChange={(e) =>
                    setEditData({ ...editData, title: e.target.value })
                  }
                />
                <Form.Control
                  as="textarea"
                  rows={2}
                  className="mb-3"
                  value={editData.description}
                  onChange={(e) =>
                    setEditData({ ...editData, description: e.target.value })
                  }
                />
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => saveEdit(task.id)}
                >
                  <Save size={16} /> Сохранить
                </Button>
              </>
            ) : (
              <>
                <Card.Title
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    fontWeight: "600",
                    color: task.completed ? "#888" : "#3b2d4f",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {task.title}
                </Card.Title>
                <Card.Text
                  style={{
                    color: "#6b6b6b",
                    fontSize: "0.95rem",
                    fontFamily: "Poppins, sans-serif",
                  }}
                  className="mb-3"
                >
                  {task.description}
                </Card.Text>

                <div className="d-flex justify-content-between">
                  <Button
                    variant={task.completed ? "secondary" : "outline-success"}
                    size="sm"
                    onClick={() => onToggleComplete(task.id)}
                  >
                    <CheckCircle size={16} />{" "}
                    {task.completed ? "Возобновить" : "Готово"}
                  </Button>
                  <div className="d-flex gap-2">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => startEdit(task)}
                    >
                      <Edit3 size={16} /> Редактировать
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => onDelete(task.id)}
                    >
                      <Trash2 size={16} /> Удалить
                    </Button>
                  </div>
                </div>
              </>
            )}
          </Card>
        ))
      )}
    </div>
  );
};

export default TaskList;
