import { useEffect, useState } from "react";
import { fetchEmployees } from "../services/employeeService";
import EmployeeCard from "../components/EmployeeCard";
import EmployeeModal from "../components/EmployeeModal";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import useDebounce from "../hooks/useDebounce";
import SkeletonCard from "../components/SkeletonCard";


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
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      
      <Navbar totalEmployees={filteredEmployees.length} />

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Employees</h3>
          <p className="text-3xl font-bold">{employees.length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Departments</h3>
          <p className="text-3xl font-bold">{departments.length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Companies</h3>
          <p className="text-3xl font-bold">{companies.length}</p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6 mb-8">
        <input
          type="text"
          placeholder="Search Employee..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-3 rounded-lg bg-white"
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border p-3 rounded-lg bg-white"
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
          className="border p-3 rounded-lg bg-white"
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
  className="border p-3 rounded-lg bg-white"
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
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-600">
              No Employees Found
            </h2>

            <p className="text-gray-500 mt-2">
              Try changing your search or filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentEmployees.map((employee) => (
              <EmployeeCard
                key={employee.id}
                employee={employee}
                onViewDetails={handleViewDetails}
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
      />
    </div>
  );
}

export default Home;