function EmployeeCard({ employee, onViewDetails }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-5">
      <div className="flex flex-col items-center">
        <img
          src={employee.image}
          alt={employee.firstName}
          className="w-24 h-24 rounded-full border-4 border-blue-100"
        />

        <h3 className="mt-4 text-lg font-semibold text-gray-800">
          {employee.firstName} {employee.lastName}
        </h3>

        <p className="text-sm text-gray-500">
          {employee.company.department}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          {employee.company.name}
        </p>

        <button
          onClick={() => onViewDetails(employee)}
          className="mt-4 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 text-white px-4 py-2 rounded-lg"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;