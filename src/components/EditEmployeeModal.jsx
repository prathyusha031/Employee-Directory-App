import { useState } from "react";

function EditEmployeeModal({
  employee,
  onClose,
  onUpdateEmployee,
  darkMode,
}) {
  const [formData, setFormData] = useState({
    firstName: employee.firstName || "",
    lastName: employee.lastName || "",
    email: employee.email || "",
    phone: employee.phone || "",
    age: employee.age || "",
    gender: employee.gender || "",
    title: employee.company?.title || "",
    department: employee.company?.department || "",
    company: employee.company?.name || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const themes = [
  {
    color: "text-pink-500",
    border: "border-pink-500",
    button: "from-pink-500 to-pink-400",
    focus: "focus:border-pink-500",
  },
  {
    color: "text-green-500",
    border: "border-green-500",
    button: "from-green-500 to-green-400",
    focus: "focus:border-green-500",
  },
  {
    color: "text-purple-500",
    border: "border-purple-500",
    button: "from-purple-500 to-purple-400",
    focus: "focus:border-purple-500",
  },
  {
    color: "text-blue-500",
    border: "border-blue-500",
    button: "from-blue-500 to-blue-400",
    focus: "focus:border-blue-500",
  },
];

const theme = themes[employee.id % 4];

 const inputStyle = `w-full px-4 py-3 rounded-2xl border transition-all duration-300 ${
  darkMode
    ? `bg-slate-800 border-slate-700 text-white ${theme.focus}`
    : `bg-slate-50 border-slate-200 text-slate-900 ${theme.focus}`
}`;


  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedEmployee = {
      ...employee,

      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      age: Number(formData.age),
      gender: formData.gender,

      company: {
        ...employee.company,
        title: formData.title,
        department: formData.department,
        name: formData.company,
      },
    };

    onUpdateEmployee(updatedEmployee);
    onClose();
  };

 return (

  <div
    className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center z-50 p-6"
    onClick={onClose}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className={`w-full max-w-4xl h-[90vh] overflow-y-auto rounded-[32px] shadow-2xl border ${
        darkMode
          ? "bg-slate-900 border-slate-700 text-white"
          : "bg-white border-slate-200 text-black"
      }`}
    >
      {/* Header */}
      <div
        className={`sticky top-0 z-20 flex justify-between items-center p-8 border-b ${
          darkMode
            ? "bg-slate-900 border-slate-700"
            : "bg-white border-slate-200"
        }`}
      >
        <div>
          <h2 className={`text-3xl font-bold ${theme.color}`}>
  Edit Employee
</h2>

      <p
        className={`mt-1 ${
          darkMode
            ? "text-slate-400"
            : "text-slate-500"
        }`}
      >
        Update employee information
      </p>
    </div>

    <button
      onClick={onClose}
      className="w-12 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-2xl font-bold transition"
    >
      ×
    </button>
  </div>

  <form
    onSubmit={handleSubmit}
    className="p-8 space-y-8"
  >
    {/* Personal */}
    <div>
      <h3 className={`text-xl font-bold mb-4 border-b pb-2 ${theme.color}`}>
  Personal Information
</h3>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className={inputStyle}
        />

        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className={inputStyle}
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={inputStyle}
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className={inputStyle}
        />

        <input
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          className={inputStyle}
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className={inputStyle}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>

    {/* Professional */}
    <div>
      <h3 className={`text-xl font-bold mb-4 border-b pb-2 ${theme.color}`}>
  Professional Information
</h3>

      <div className="grid md:grid-cols-2 gap-4">

        <select
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={inputStyle}
        >
          <option value="">Select Job Title</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Sales Manager">Sales Manager</option>
          <option value="Research Analyst">Research Analyst</option>
          <option value="Support Specialist">Support Specialist</option>
          <option value="Accountant">Accountant</option>
        </select>

        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          className={inputStyle}
        >
          <option value="">Select Department</option>
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
          <option value="Support">Support</option>
          <option value="Accounting">Accounting</option>
          <option value="Research and Development">
            Research and Development
          </option>
        </select>

        <select
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={inputStyle}
        >
          <option value="">Select Company</option>
          <option value="Dooley, Kozey and Cronin">
            Dooley, Kozey and Cronin
          </option>
          <option value="Pagac and Sons">
            Pagac and Sons
          </option>
          <option value="Spinka - Dickinson">
            Spinka - Dickinson
          </option>
          <option value="Aufderhar-Cronin">
            Aufderhar-Cronin
          </option>
        </select>

      </div>
    </div>

    <div
      className={`sticky bottom-0 pt-4 ${
        darkMode
          ? "bg-slate-900"
          : "bg-white"
      }`}
    >
      <button
        type="submit"
        className={`w-full py-4 rounded-2xl bg-gradient-to-r ${theme.button} text-white font-semibold hover:opacity-90 transition-all duration-300`}
      >
        Update Employee
      </button>
    </div>
  </form>
</div>

  </div>
);

}

export default EditEmployeeModal;