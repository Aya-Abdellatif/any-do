const ToDoInput = ({ input, setInput, addTask }) => {
  return (
    <div className="flex gap-2 mb-6">
      <input type="text" placeholder="Add a task" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 border rounded-lg px-4 py-2"/>

      <button onClick={addTask} className="bg-blue-500 text-white px-4 rounded-lg">
        Add Task
      </button>
    </div>
  );
};

export default ToDoInput;