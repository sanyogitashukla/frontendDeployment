import TaskItem from "./TaskItem";

function TaskList({
    tasks,
    onDelete,
    onToggle,
    onUpdate,
}) {
    if (tasks.length === 0) {
        return (
            <p className="empty">
                No Tasks Found
            </p>
        );
    }

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                    onUpdate={onUpdate}
                />
            ))}
        </div>
    );
}

export default TaskList;