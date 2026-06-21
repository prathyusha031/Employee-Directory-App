function Navbar({
  totalEmployees,
  darkMode,
  setDarkMode,
  setShowAddEmployee,
}) {
  return (
    <nav
      className={`shadow-sm border-b px-6 py-4 mb-8 ${
        darkMode
          ? "bg-slate-800 border-slate-700"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold text-blue-600">
            EmployeeHub
          </h1>

          <p
            className={
              darkMode
                ? "text-gray-300"
                : "text-gray-500"
            }
          >
            Employee Directory Management System
          </p>
        </div>

        <div className="flex items-center gap-4">

  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium">
    Employees: {totalEmployees}
  </span>

  <button
    onClick={() => setShowAddEmployee(true)}
    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
  >
    + Add Employee
  </button>

  <button
    onClick={() => setDarkMode(!darkMode)}
    className="bg-gray-800 text-white px-4 py-2 rounded-lg"
  >
    {darkMode ? "☀ Light" : "🌙 Dark"}
  </button>

</div>
      </div>
    </nav>
  );
}

export default Navbar;