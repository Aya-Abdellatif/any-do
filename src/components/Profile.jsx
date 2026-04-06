import myProfile from "../assets/myProfile.avif";

const Profile = () => {
  const user = {
    name: "Aya Abdellatif",
    image: myProfile
  };

  const total = 3;
  const completed = 1;
  const pending = total - completed;

  return (
    <div className="p-6 max-w-xl mx-auto text-center">

      <img
        src={user.image}
        alt="profile pic"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />

      <h1 className="text-2xl font-bold">{user.name}</h1>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-white shadow p-4 rounded-lg">
          <h2 className="text-xl font-bold">{total}</h2>
          <p className="text-gray-500">Total</p>
        </div>

        <div className="bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-green-600">
            {completed}
          </h2>
          <p>Completed</p>
        </div>

        <div className="bg-red-100 p-4 rounded-lg">
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