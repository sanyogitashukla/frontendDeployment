import { useEffect, useState } from "react";
import Filters from "../components/Filter.jsx";
import Stats from "../components/Stats.jsx";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import SearchBar from "../components/SearchBar.jsx";

import {
    getTasks,
    createTask,
    deleteTask,
    toggleTask,
    updateTask,
} from "../services/taskService";

function Home() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const fetchTasks = async () => {
        try {
            const data = await getTasks();
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleAddTask = async (task) => {
        await createTask(task);
        fetchTasks();
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        fetchTasks();
    };

    const handleToggle = async (id) => {
        await toggleTask(id);
        fetchTasks();
    };

    const handleUpdate = async (id, updatedTitle) => {
        try {
            await updateTask(id, {
                title: updatedTitle,
            });

            fetchTasks();
        } catch (error) {
            console.log(error);
        }
    };

    const filteredTasks = tasks.filter((task) => {
        const matchesSearch =
            task.title
                .toLowerCase()
                .includes(
                    searchTerm.toLowerCase()
                );

        const matchesFilter =
            filter === "all"
                ? true
                : filter === "completed"
                    ? task.completed
                    : !task.completed;

        return matchesSearch && matchesFilter;
    });
    return (
        <div className="container">

            <h1>Task Manager</h1>

            <TaskForm
                onAddTask={handleAddTask}
            />

            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />


            <Filters
                filter={filter}
                setFilter={setFilter}
            />

            <Stats tasks={tasks} />

            <TaskList
                tasks={filteredTasks}
                onDelete={handleDelete}
                onToggle={handleToggle}
                onUpdate={handleUpdate}

            />

        </div>
    );
}

export default Home;