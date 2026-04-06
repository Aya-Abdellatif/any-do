import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  // Load task
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const foundTask = savedTasks.find(task => task.id === Number(id));
    setTask(foundTask);
  }, [id]);

  const updateTask = (field, value) => {
    const updatedTask = { ...task, [field]: value };
    setTask(updatedTask);

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const newTasks = savedTasks.map(t =>
      t.id === updatedTask.id ? updatedTask : t
    );

    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  if (!task) return <p className="p-6">Task not found</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">

      <h2 className="text-2xl font-bold mb-2">
        {task.title}
      </h2>

      <p className="text-gray-500 mb-6">
        Created at: {new Date(task.id).toLocaleString()}
      </p>

      <div className="space-y-4">

        <div>
          <label className="block font-medium mb-1">Due Date</label>
          <input
            type="date"
            value={task.dueDate || ""}
            onChange={(e) => updateTask("dueDate", e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            value={task.description || ""}
            onChange={(e) => updateTask("description", e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Write task details..."
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Assigned To</label>
          <input
            type="text"
            value={task.assignedTo || ""}
            onChange={(e) => updateTask("assignedTo", e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter name..."
          />
        </div>

      </div>
    </div>
  );
}


export default TaskDetails;