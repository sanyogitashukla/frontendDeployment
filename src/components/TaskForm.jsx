import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;
    onAddTask({
      title,
      description,
      dueDate,
    });
    setTitle("")
    setDescription("");
    setDueDate("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) =>
          setDueDate(e.target.value)
        }
      />
      <button type="submit">
        Add Task
      </button>
    </form>
  )
}
export default TaskForm;