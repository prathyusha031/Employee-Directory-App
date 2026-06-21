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

  const inputStyle = `w-full border p-3 rounded-lg transition-all duration-300 ${
    darkMode
      ? "bg-slate-800 border-slate-700 text-white"
      : "bg-white border-gray-300 text-black"
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
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-3xl h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-white text-black"
        }`}
      >
        {/* Header */}
        <div
          className={`sticky top-0 z-20 flex justify-between items-center p-6 border-b ${
            darkMode
              ? "bg-slate-900 border-slate-700"
              : "bg-white border-gray-200"
          }`}
        >
          <h2 className="text-2xl font-bold">
            Edit Employee
          </h2>

          <button
            onClick={onClose}
            className="text-3xl font-bold text-gray-400 hover:text-red-500"
          >
            ×
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-6"
        >
          {/* Personal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-500">
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
                <option value="">
                  Select Gender
                </option>

                <option value="male">
                  Male
                </option>

                <option value="female">
                  Female
                </option>
              </select>
            </div>
          </div>

         {/* Professional */}
<div>
  <h3 className="text-lg font-semibold mb-4 text-blue-500">
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

          {/* Sticky Button */}
          <div
            className={`sticky bottom-0 pt-4 ${
              darkMode
                ? "bg-slate-900"
                : "bg-white"
            }`}
          >
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-all duration-300"
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