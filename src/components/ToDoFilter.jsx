const ToDoFilter = ({ setFilter }) => {
  return (
    <div className="flex gap-3 mb-4">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
};

export default ToDoFilter;