import React from "react";

const TaskCard = React.memo(({ task, deleteTask, toggleTask }) => {

  console.log("Rendering:", task.name);

  return (
    <div className="card">

      <h2>{task.name}</h2>

      <p>
        {task.completed ? "Completed ✅" : "Pending ⏳"}
      </p>

      <button onClick={() => toggleTask(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>

      <button
        className="delete"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>

    </div>
  );

});

export default TaskCard;