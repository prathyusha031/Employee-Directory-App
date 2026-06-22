import {
  FaUsers,
  FaPlus,
  FaMoon,
  FaSun,
} from "react-icons/fa";

function Navbar({
  totalEmployees,
  darkMode,
  setDarkMode,
  setShowAddEmployee,
}) {
  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl border-b ${
        darkMode
          ? "bg-slate-950/70 border-slate-700/40"
          : "bg-white/70 border-white/50"
      }`}
    >
      <div className="max-w-[1700px] mx-auto px-8 py-5">

        <div className="flex items-center justify-between">

          {/* Left Side */}
          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              EH
            </div>

            <div>
              <h1
                className={`text-4xl font-bold ${
                  darkMode
                    ? "text-white"
                    : "text-slate-900"
                }`}
              >
                EmployeeHub
              </h1>

              <p
                className={`text-sm mt-1 ${
                  darkMode
                    ? "text-slate-400"
                    : "text-slate-500"
                }`}
              >
                Modern Employee Directory Platform
              </p>
            </div>

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Employee Count */}
            <div
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl shadow-lg ${
                darkMode
                  ? "bg-slate-900/60 border border-slate-700 text-white"
                  : "bg-white/90 border border-slate-200 text-slate-800"
              }`}
            >
              <FaUsers className="text-pink-500" />

              <span className="font-semibold">
                {totalEmployees} Employees
              </span>
            </div>

            {/* Add Employee */}
            <button
              onClick={() => setShowAddEmployee(true)}
              className="flex items-center gap-2 px-8 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              <FaPlus />

              Add Employee
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() =>
                setDarkMode(!darkMode)
              }
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl shadow-lg transition-all duration-300 ${
                darkMode
                  ? "bg-slate-900 border border-slate-700 text-yellow-400"
                  : "bg-white border border-slate-200 text-slate-700"
              }`}
            >
              {darkMode ? (
                <>
                  <FaMoon />
                  Dark
                </>
              ) : (
                <>
                  <FaSun />
                  Light
                </>
              )}
            </button>

          </div>

        </div>

      </div>
    </header>
  );
}

export default Navbar;