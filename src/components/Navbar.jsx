function Navbar({ totalEmployees }) {
  return (
    <nav className="bg-white shadow-sm border-b px-6 py-4 mb-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold text-blue-600">
            EmployeeHub
          </h1>
          <p className="text-gray-500 text-sm">
            Employee Directory Management System
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium">
            Total Employees: {totalEmployees}
          </span>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;