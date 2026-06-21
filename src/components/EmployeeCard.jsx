function EmployeeCard({
  employee,
  onViewDetails,
  darkMode,
}) {
  return (
    <div
  className={`rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 p-5 ${
    darkMode
      ? "bg-slate-800 text-white"
      : "bg-white text-black"
  }`}
>

      <div className="flex flex-col items-center text-center">

        <img
          src={employee.image}
          alt={`${employee.firstName} ${employee.lastName}`}
          className="w-24 h-24 rounded-full border-4 border-blue-100"
        />

        <h3
  className={`mt-4 text-lg font-semibold ${
    darkMode ? "text-white" : "text-gray-800"
  }`}
>
          {employee.firstName} {employee.lastName}
        </h3>

        <p className="text-blue-600 text-sm font-medium">
          {employee.company?.title}
        </p>

        <p
  className={`text-sm ${
    darkMode ? "text-gray-300" : "text-gray-500"
  }`}
>
          {employee.company?.department}
        </p>

        <p className="text-gray-500 text-sm">
          {employee.company?.name}
        </p>

        <p className="text-gray-400 text-xs break-all mt-2">
          {employee.email}
        </p>

        <p
  className={`text-xs break-all mt-2 ${
    darkMode ? "text-gray-400" : "text-gray-400"
  }`}
>
          {employee.phone}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-3">

          <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
            {employee.age} Years
          </span>

          <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
            {employee.gender}
          </span>

          <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
            {employee.bloodGroup}
          </span>

        </div>

        <button
          onClick={() => onViewDetails(employee)}
          className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-all duration-300"
        >
          View Full Details
        </button>

      </div>

    </div>
  );
}

export default EmployeeCard;