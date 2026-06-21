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
    className={`min-h-screen overflow-x-hidden transition-all duration-300 ${
      darkMode
        ? "bg-slate-900 text-white"
        : "bg-gray-100 text-black"
    }`}
  >
    <Navbar
  totalEmployees={sortedEmployees.length}
  darkMode={darkMode}
  setDarkMode={setDarkMode}
  setShowAddEmployee={setShowAddEmployee}
/>

    {/* Statistics Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mb-8">

      <div
        className={`p-6 rounded-xl shadow transition-all duration-300 ${
          darkMode
            ? "bg-slate-800 text-white"
            : "bg-white"
        }`}
      >
        <h3 className={darkMode ? "text-gray-300" : "text-gray-500"}>
          Employees
        </h3>

        <p className="text-3xl font-bold">
          {employees.length}
        </p>
      </div>

      <div
        className={`p-6 rounded-xl shadow transition-all duration-300 ${
          darkMode
            ? "bg-slate-800 text-white"
            : "bg-white"
        }`}
      >
        <h3 className={darkMode ? "text-gray-300" : "text-gray-500"}>
          Departments
        </h3>

        <p className="text-3xl font-bold">
          {departments.length}
        </p>
      </div>

      <div
        className={`p-6 rounded-xl shadow transition-all duration-300 ${
          darkMode
            ? "bg-slate-800 text-white"
            : "bg-white"
        }`}
      >
        <h3 className={darkMode ? "text-gray-300" : "text-gray-500"}>
          Companies
        </h3>

        <p className="text-3xl font-bold">
          {companies.length}
        </p>
      </div>

    </div>

    {/* Search & Filters */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6 mb-8">

      <input
        type="text"
        placeholder="Search Employee..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`border p-3 rounded-lg transition-all duration-300 ${
          darkMode
            ? "bg-slate-800 text-white border-slate-700 placeholder-gray-400"
            : "bg-white text-black"
        }`}
      />

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className={`border p-3 rounded-lg transition-all duration-300 ${
          darkMode
            ? "bg-slate-800 text-white border-slate-700"
            : "bg-white text-black"
        }`}
      >
        <option value="">All Departments</option>

        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>

      <select
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className={`border p-3 rounded-lg transition-all duration-300 ${
          darkMode
            ? "bg-slate-800 text-white border-slate-700"
            : "bg-white text-black"
        }`}
      >
        <option value="">All Companies</option>

        {companies.map((comp) => (
          <option key={comp} value={comp}>
            {comp}
          </option>
        ))}
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className={`border p-3 rounded-lg transition-all duration-300 ${
          darkMode
            ? "bg-slate-800 text-white border-slate-700"
            : "bg-white text-black"
        }`}
      >
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="age">Age</option>
        <option value="department">Department</option>
      </select>

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
        ? "text-gray-400"
        : "text-gray-500"
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

<footer
  className={`mt-10 py-6 text-center border-t ${
    darkMode
      ? "border-slate-700 text-gray-400"
      : "border-gray-200 text-gray-500"
  }`}
>
  <p>EmployeeHub © 2026</p>

  <p className="text-sm mt-1">
    Built with React, JavaScript & Tailwind CSS
  </p>
</footer>
  </div>
);
}

export default Home;