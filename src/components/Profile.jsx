import myProfile from "../assets/myProfile.png";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const totalTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const total = totalTasks.length;
  const completed = totalTasks.filter((task) => task.completed === true).length;
  const pending = total - completed;

  return (
    <div className="p-6 max-w-xl mx-auto text-center">

      <img
        src={myProfile}
        alt="profile pic"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />

      <h1 className="text-2xl font-bold">{user.fullName}</h1>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-white shadow p-4 rounded-lg">
          <h2 className="text-xl font-bold">{total}</h2>
          <p className="text-gray-500">Total</p>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <h2 className="text-xl font-bold text-green-600">
            {completed}
          </h2>
          <p>Completed</p>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <h2 className="text-xl font-bold text-red-600">
            {pending}
          </h2>
          <p>Pending</p>
        </div>
      </div>

    </div>
  );
}

export default Profile;