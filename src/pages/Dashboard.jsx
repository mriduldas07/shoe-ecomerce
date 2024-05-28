const Dashboard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-20"></div>
      <div className="flex justify-center -mt-12">
        <img
          className="h-24 w-24 rounded-full border-4 border-white"
          src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?t=st=1716896866~exp=1716900466~hmac=ddcef346e1d32fd1557b7cc578cf91cfd57fc8bbe36844999175cc8222a2d03d&w=740"
          alt=""
        />
      </div>
      <div className="text-center px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-800">name</h2>
        <p className="text-gray-600">email</p>
        <div className="mt-4">
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-700">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
