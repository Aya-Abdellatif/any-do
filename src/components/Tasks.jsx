import { useState, useEffect } from "react";
import ToDoInput from "../components/ToDoInput";
import ToDoFilter from "../components/ToDoFilter";
import ToDoList from "../components/ToDoList";

const Tasks = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!input.trim()) return;

    const newTask = {
        id: Date.now(),
        title: input,
        description: "",
        assignedTo: "",
        dueDate: "",
        completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="p-6 max-w-2xl mx-auto">

      <ToDoInput input={input} setInput={setInput} addTask={addTask}/>

      <ToDoFilter setFilter={setFilter} />

      <ToDoList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask}/>

    </div>
  );
};

export default Tasks;