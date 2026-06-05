function Stats({ tasks }) {
    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.completed
    ).length;

    const pendingTasks =
        totalTasks - completedTasks;

    return (
        <div className="stats">

            <div className="stat-card">
                <h3>Total</h3>
                <p>{totalTasks}</p>
            </div>

            <div className="stat-card">
                <h3>Completed</h3>
                <p>{completedTasks}</p>
            </div>

            <div className="stat-card">
                <h3>Pending</h3>
                <p>{pendingTasks}</p>
            </div>

        </div>
    );
}

export default Stats;