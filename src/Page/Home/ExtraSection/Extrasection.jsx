import { FaEye, FaHeart, FaUser, FaUserPlus } from "react-icons/fa";

const Extrasection = () => {
  return (
    <div className="bg-zinc-100 p-6 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-4">
          <FaHeart className="text-red-500 text-3xl" />
          <div>
            <p className="text-gray-600">Total Likes</p>
            <p className="text-2xl font-semibold">25.8K</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-4">
          <FaEye className="text-blue-500 text-3xl" />
          <div>
            <p className="text-gray-600">Page Views</p>
            <p className="text-2xl font-semibold">2.6M</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-4">
          <FaUserPlus className="text-green-500 text-3xl" />
          <div>
            <p className="text-gray-600">New Registers</p>
            <p className="text-2xl font-semibold">1,200</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-4">
          <FaUser className="text-orange-500 text-3xl" />
          <div>
            <p className="text-gray-600">New Users</p>
            <p className="text-2xl font-semibold">4,200</p>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-600">Top Instructor</p>
      </div>
    </div>
  );
};

export default Extrasection;
