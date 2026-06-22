import { useEffect, useState } from "react";
import { fetchEmployees } from "../services/employeeService";
import EmployeeCard from "../components/EmployeeCard";
import EmployeeModal from "../components/EmployeeModal";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import useDebounce from "../hooks/useDebounce";
import SkeletonCard from "../components/SkeletonCard";
import AddEmployeeModal from "../components/AddEmployeeModal";
import EditEmployeeModal from "../components/EditEmployeeModal";
import { FiUsers, FiBriefcase, FiGrid } from "react-icons/fi";
import { FaUsers, FaBuilding } from "react-icons/fa";
import { BsGrid } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";


function Home() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm =
        useDebounce(searchTerm, 500);
  const [department, setDepartment] = useState("");
  const [company, setCompany] = useState("");

  const [sortBy, setSortBy] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const [editingEmployee, setEditingEmployee] =
  useState(null);

  const [showAddEmployee, setShowAddEmployee] =
  useState(false);

  useEffect(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    setDarkMode(true);
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    "theme",
    darkMode ? "dark" : "light"
  );
}, [darkMode]);

  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 8;

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    const loadEmployees = async () => {
      try {
  const data = await fetchEmployees();
  setEmployees(data);
} catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  useEffect(() => {
  setCurrentPage(1);
}, [searchTerm, department, company, sortBy]);

const handleAddEmployee = (newEmployee) => {
  setEmployees((prev) => [
    newEmployee,
    ...prev,
  ]);
};

const handleEditEmployee = (employee) => {
  setEditingEmployee(employee);
};

const updateEmployee = (updatedEmployee) => {
  setEmployees((prev) =>
    prev.map((emp) =>
      emp.id === updatedEmployee.id
        ? updatedEmployee
        : emp
    )
  );
};

const departments = [
  ...new Set(employees.map((emp) => emp.company.department)),
];

const companies = [
  ...new Set(employees.map((emp) => emp.company.name)),
];

const filteredEmployees = employees.filter((employee) => {
  const fullName =
    `${employee.firstName} ${employee.lastName}`.toLowerCase();

  const matchesSearch = fullName.includes(
    debouncedSearchTerm.toLowerCase()
  );

  const matchesDepartment =
    !department ||
    employee.company.department === department;

  const matchesCompany =
    !company ||
    employee.company.name === company;

  return (
    matchesSearch &&
    matchesDepartment &&
    matchesCompany
  );
});

const sortedEmployees = [...filteredEmployees];

if (sortBy === "name") {
  sortedEmployees.sort((a, b) =>
    `${a.firstName} ${a.lastName}`.localeCompare(
      `${b.firstName} ${b.lastName}`
    )
  );
}

if (sortBy === "age") {
  sortedEmployees.sort((a, b) => a.age - b.age);
}

if (sortBy === "department") {
  sortedEmployees.sort((a, b) =>
    a.company.department.localeCompare(
      b.company.department
    )
  );
}

useEffect(() => {
  const savedTheme =
    localStorage.getItem("darkMode");

  if (savedTheme) {
    setDarkMode(JSON.parse(savedTheme));
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    "darkMode",
    JSON.stringify(darkMode)
  );
}, [darkMode]);

const indexOfLastEmployee =
  currentPage * employeesPerPage;

const indexOfFirstEmployee =
  indexOfLastEmployee - employeesPerPage;

const currentEmployees = sortedEmployees.slice(
  indexOfFirstEmployee,
  indexOfLastEmployee
);

const totalPages = Math.ceil(
  sortedEmployees.length / employeesPerPage
);

const handleViewDetails = (employee) => {
  setSelectedEmployee(employee);
};

  if (loading) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
}

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500 text-xl">
        {error}
      </div>
    );
  }

  return (
  <div
  className={`min-h-screen transition-all duration-300 ${
    darkMode
      ? "bg-gradient-to-br from-slate-950 via-[#07152f] to-slate-950"
      : "bg-gradient-to-br from-pink-50 via-purple-50 to-slate-100"
  }`}
>
    <Navbar
  totalEmployees={sortedEmployees.length}
  darkMode={darkMode}
  setDarkMode={setDarkMode}
  setShowAddEmployee={setShowAddEmployee}
/>

 <div className="max-w-[1600px] mx-auto">
   {/* Statistics Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-8 mb-8">

  {/* Employees */}
  <div
    className={`rounded-[28px] p-6 border backdrop-blur-xl transition-all duration-300 ${
      darkMode
        ? "bg-slate-900/60 border-slate-700/50 shadow-2xl"
        : "bg-white/80 border-white shadow-xl"
    }`}
  >
    <div className="flex justify-between items-center">

      <div className="flex gap-4 items-start">

        <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center">
          <FaUsers className="text-pink-500 text-3xl" />
        </div>

        <div>
          <p
            className={`text-sm ${
              darkMode
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >
            Total Employees
          </p>

          <h2 className="text-5xl font-bold mt-1">
            {employees.length}
          </h2>

          <p className="text-green-500 text-sm font-medium mt-2">
            ↑ 12% from last month
          </p>
        </div>

      </div>

      {/* Chart */}
      <div className="hidden md:block">
        <svg width="130" height="50" viewBox="0 0 130 50">
          <path
            d="M0 40 C20 40,20 25,40 25 C60 25,60 10,80 20 C100 30,110 15,130 5"
            stroke="#ec4899"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

    </div>
  </div>

  {/* Departments */}
  <div
    className={`rounded-[28px] p-6 border backdrop-blur-xl transition-all duration-300 ${
      darkMode
        ? "bg-slate-900/60 border-slate-700/50 shadow-2xl"
        : "bg-white/80 border-white shadow-xl"
    }`}
  >
    <div className="flex justify-between items-center">

      <div className="flex gap-4 items-start">

        <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center">
          <BsGrid className="text-purple-500 text-3xl" />
        </div>

        <div>
          <p
            className={`text-sm ${
              darkMode
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >
            Departments
          </p>

          <h2 className="text-5xl font-bold mt-1">
            {departments.length}
          </h2>

          <p className="text-green-500 text-sm font-medium mt-2">
            ↑ 8% from last month
          </p>
        </div>

      </div>

      <div className="hidden md:block">
        <svg width="130" height="50" viewBox="0 0 130 50">
          <path
            d="M0 40 C25 35,30 15,50 15 C70 15,80 35,100 25 C115 20,120 10,130 5"
            stroke="#9333ea"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

    </div>
  </div>

  {/* Companies */}
  <div
    className={`rounded-[28px] p-6 border backdrop-blur-xl transition-all duration-300 ${
      darkMode
        ? "bg-slate-900/60 border-slate-700/50 shadow-2xl"
        : "bg-white/80 border-white shadow-xl"
    }`}
  >
    <div className="flex justify-between items-center">

      <div className="flex gap-4 items-start">

        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
          <FaBuilding className="text-blue-500 text-3xl" />
        </div>

        <div>
          <p
            className={`text-sm ${
              darkMode
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >
            Companies
          </p>

          <h2 className="text-5xl font-bold mt-1">
            {companies.length}
          </h2>

          <p className="text-green-500 text-sm font-medium mt-2">
            ↑ 15% from last month
          </p>
        </div>

      </div>

      <div className="hidden md:block">
        <svg width="130" height="50" viewBox="0 0 130 50">
          <path
            d="M0 40 C20 40,40 30,60 15 C80 5,90 35,110 25 C120 20,125 15,130 5"
            stroke="#3b82f6"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

    </div>
  </div>

</div>

   {/* Search & Filters */}
<div
  className={`mx-6 mb-8 p-4 rounded-[28px] border backdrop-blur-xl shadow-xl ${
    darkMode
      ? "bg-slate-900/60 border-slate-700/50"
      : "bg-white/80 border-white"
  }`}
>
  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

    {/* Search */}
    <div className="md:col-span-3 relative">

      <FiSearch
        className={`absolute left-5 top-1/2 -translate-y-1/2 text-xl ${
          darkMode
            ? "text-slate-400"
            : "text-slate-500"
        }`}
      />

      <input
        type="text"
        placeholder="Search employees..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className={`w-full h-14 pl-14 pr-4 rounded-2xl border transition-all duration-300 ${
          darkMode
            ? "bg-slate-900/70 border-slate-700 text-white placeholder-slate-500"
            : "bg-white border-slate-200 text-slate-900 placeholder-slate-400"
        }`}
      />
    </div>

    {/* Department */}
    <div className="md:col-span-3">
      <select
        value={department}
        onChange={(e) =>
          setDepartment(e.target.value)
        }
        className={`w-full h-14 px-5 rounded-2xl border transition-all duration-300 ${
          darkMode
            ? "bg-slate-900/70 border-slate-700 text-white"
            : "bg-white border-slate-200 text-slate-900"
        }`}
      >
        <option value="">
          All Departments
        </option>

        {departments.map((dept) => (
          <option key={dept}>
            {dept}
          </option>
        ))}
      </select>
    </div>

    {/* Company */}
    <div className="md:col-span-3">
      <select
        value={company}
        onChange={(e) =>
          setCompany(e.target.value)
        }
        className={`w-full h-14 px-5 rounded-2xl border transition-all duration-300 ${
          darkMode
            ? "bg-slate-900/70 border-slate-700 text-white"
            : "bg-white border-slate-200 text-slate-900"
        }`}
      >
        <option value="">
          All Companies
        </option>

        {companies.map((comp) => (
          <option key={comp}>
            {comp}
          </option>
        ))}
      </select>
    </div>

    {/* Sort */}
    <div className="md:col-span-2">
      <select
        value={sortBy}
        onChange={(e) =>
          setSortBy(e.target.value)
        }
        className={`w-full h-14 px-5 rounded-2xl border transition-all duration-300 ${
          darkMode
            ? "bg-slate-900/70 border-slate-700 text-white"
            : "bg-white border-slate-200 text-slate-900"
        }`}
      >
        <option value="">
          Sort By
        </option>

        <option value="name">
          Name
        </option>

        <option value="age">
          Age
        </option>

        <option value="department">
          Department
        </option>
      </select>
    </div>

    {/* Filter Button */}
    <div className="md:col-span-1">

      <button
        className={`w-full h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 ${
          darkMode
            ? "bg-slate-900/70 border-pink-500/30 text-pink-500 hover:bg-slate-800"
            : "bg-white border-pink-200 text-pink-500 hover:bg-pink-50"
        }`}
      >
        <HiOutlineAdjustmentsHorizontal className="text-2xl" />
      </button>

    </div>

  </div>
</div>
    {/* Employee Cards */}
    <div className="px-6 pb-10">

      {sortedEmployees.length === 0 ? (
        <div className="text-center py-20">

  <div className="text-7xl mb-5">
    📭
  </div>

  <h2
    className={`text-3xl font-bold ${
      darkMode
        ? "text-white"
        : "text-gray-800"
    }`}
  >
    No Employees Found
  </h2>

  <p
    className={`mt-3 ${
     darkMode
  ? "text-slate-400"
  : "text-slate-500"
    }`}
  >
    Try another search term or filter.
  </p>

</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {currentEmployees.map((employee) => (
            <EmployeeCard
  key={employee.id}
  employee={employee}
  onViewDetails={handleViewDetails}
  onEdit={handleEditEmployee}
  darkMode={darkMode}
/>
          ))}

        </div>
      )}

      {totalPages > 1 && (
        <Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  setCurrentPage={setCurrentPage}
  darkMode={darkMode}
/>
      )}

    </div>

    <EmployeeModal
      employee={selectedEmployee}
      onClose={() => setSelectedEmployee(null)}
      darkMode={darkMode}
    />
  {showAddEmployee && (
  <AddEmployeeModal
    onClose={() =>
      setShowAddEmployee(false)
    }
    onAddEmployee={handleAddEmployee}
    darkMode={darkMode}
  />
)}

{editingEmployee && (
  <EditEmployeeModal
    employee={editingEmployee}
    darkMode={darkMode}
    onClose={() =>
      setEditingEmployee(null)
    }
    onUpdateEmployee={updateEmployee}
  />
)}

</div>
<footer
  className={`mt-16 border-t ${
    darkMode
      ? "border-slate-800 bg-[#0B1120]"
      : "border-slate-200 bg-gradient-to-r from-slate-50 via-pink-50 to-purple-50"
  }`}
>
  <div className="max-w-[1600px] mx-auto px-8 py-8">

    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
          EH
        </div>

        <div>
          <h3
            className={`font-bold text-xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            EmployeeHub
          </h3>

          <p
            className={`text-sm ${
              darkMode
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >
            Modern Employee Directory Platform
          </p>
        </div>

      </div>

      <div
        className={`text-sm ${
          darkMode
            ? "text-slate-400"
            : "text-slate-500"
        }`}
      >
        © 2026 EmployeeHub. All Rights Reserved.
      </div>

    </div>

  </div>
</footer>
  </div>
);
}

export default Home;