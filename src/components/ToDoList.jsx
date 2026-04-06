import { useNavigate } from "react-router-dom";

const ToDoList = ({ tasks, toggleTask, deleteTask }) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center justify-between bg-white shadow p-3 rounded-lg">
          <div className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            <span className={ task.completed ? "line-through text-gray-400" : ""} onClick={() => navigate(`/tasks/${task.id}`, { state: task })}>
              {task.title}
            </span>
          </div>

          <button onClick={() => deleteTask(task.id)} className="text-red-500">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;