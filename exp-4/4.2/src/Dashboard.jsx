import React, { useState, useMemo, useCallback } from "react";
import TaskCard from "./TaskCard";

function Dashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Learn React", completed: false },
    { id: 2, name: "Complete Assignment", completed: false }
  ]);

  const [taskName, setTaskName] = useState("");
  const [search, setSearch] = useState("");

  const addTask = useCallback(() => {
    if (taskName.trim() === "") return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: taskName,
        completed: false
      }
    ]);

    setTaskName("");
  }, [taskName]);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }, []);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>
      task.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [tasks, search]);

  return (
    <div className="container">

      <h1>Smart Task Dashboard</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <input
        className="search"
        type="text"
        placeholder="Search Task"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Total Tasks : {tasks.length}</h3>

      {filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}

    </div>
  );
}

export default Dashboard;