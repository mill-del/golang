import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import AppNavbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import api from "./services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    await api.post("/tasks", task);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const updateTask = async (id, updatedTask) => {
    await api.put(`/tasks/${id}`, updatedTask);
    fetchTasks();
  };

  const toggleComplete = async (id) => {
    const task = tasks.find((t) => t.id === id);
    const updated = { ...task, completed: !task.completed };
    await api.put(`/tasks/${id}`, updated);
    fetchTasks();
  };

  return (
    <>
      <AppNavbar />
      <Container className="py-4">
        <TaskForm onAdd={addTask} />
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onUpdate={updateTask}
          onToggleComplete={toggleComplete}
        />
      </Container>
    </>
  );
}

export default App;
