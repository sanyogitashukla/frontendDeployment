import { useState } from "react";

function TaskItem({
    task,
    onDelete,
    onToggle,
    onUpdate,
}) {
    const [isEditing, setIsEditing] =
        useState(false);

    const [editTitle, setEditTitle] =
        useState(task.title);

    const handleSave = () => {
        if (!editTitle.trim()) return;

        onUpdate(task.id, editTitle);

        setIsEditing(false);
    };

    return (
        <div className="task-item">

            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) =>
                            setEditTitle(e.target.value)
                        }
                    />

                    <button
                        onClick={handleSave}
                    >
                        Save
                    </button>

                    <button
                        onClick={() =>
                            setIsEditing(false)
                        }
                    >
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <div className="task-content">

                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() =>
                                onToggle(task.id)
                            }
                        />

                        <div
                            className={
                                task.completed
                                    ? "completed task-details"
                                    : "task-details"
                            }
                        >
                            <h4>{task.title}</h4>

                            <p>{task.description}</p>

                            <small>
                                Due: {task.dueDate}
                            </small>
                        </div>

                    </div>

                    <div>

                        <button
                            className="edit-btn"
                            onClick={() =>
                                setIsEditing(true)
                            }
                        >
                            Edit
                        </button>

                        <button
                            className="delete-btn"
                            onClick={() => {
                                const confirmed = window.confirm(
                                    "Are you sure you want to delete this task?"
                                );

                                if (confirmed) {
                                    onDelete(task.id);
                                }
                            }}
                        >
                            Delete
                        </button>

                    </div>
                </>
            )}

        </div>
    );
}

export default TaskItem;