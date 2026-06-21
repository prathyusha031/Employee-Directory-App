import { useState, useEffect } from "react";

function AddEmployeeModal({
  onClose,
  onAddEmployee,
  darkMode,
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [formData, setFormData] = useState({
    image: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    bloodGroup: "",

    title: "",
    department: "",
    company: "",
    university: "",

    street: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputStyle = `w-full p-3 rounded-lg border transition-all duration-300 ${
    darkMode
      ? "bg-slate-800 border-slate-700 text-white"
      : "bg-white border-gray-300 text-black"
  }`;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: Date.now(),

      image:
        formData.image ||
        "https://dummyjson.com/icon/emilys/128",

      firstName: formData.firstName,
      lastName: formData.lastName,
      maidenName: "N/A",

      username: `${formData.firstName.toLowerCase()}${Date.now()}`,

      email: formData.email,
      phone: formData.phone,

      age: Number(formData.age),
      gender: formData.gender,
      bloodGroup: formData.bloodGroup,

      birthDate: "N/A",
      height: "N/A",
      weight: "N/A",
      eyeColor: "N/A",

      hair: {
        color: "N/A",
        type: "N/A",
      },

      university: formData.university,

      company: {
        name: formData.company,
        department: formData.department,
        title: formData.title,
      },

      address: {
        address: formData.street,
        city: formData.city,
        state: formData.state,
        stateCode: "N/A",
        postalCode: formData.postalCode,
      },

      bank: {
        cardType: "N/A",
        cardNumber: "N/A",
        currency: "N/A",
        iban: "N/A",
      },

      role: "employee",
      domain: "N/A",
      ip: "N/A",
      macAddress: "N/A",
      ein: "N/A",
      ssn: "N/A",
      userAgent: "N/A",
    };

    onAddEmployee(newEmployee);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-3xl h-[90vh] overflow-y-auto rounded-2xl p-6 ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-white text-black"
        }`}
      >
        <div
  className={`sticky top-0 z-10 flex justify-between items-center mb-6 pb-4 ${
    darkMode
      ? "bg-slate-900"
      : "bg-white"
  }`}
>
          <h2 className="text-2xl font-bold">
            Add New Employee
          </h2>

          <button
            onClick={onClose}
            className="text-3xl text-gray-500 hover:text-red-500"
          >
            ×
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* Personal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-500">
              Personal Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="image"
                placeholder="Profile Image URL"
                className={inputStyle}
                onChange={handleChange}
              />

              <input
                name="firstName"
                placeholder="First Name"
                className={inputStyle}
                onChange={handleChange}
                required
              />

              <input
                name="lastName"
                placeholder="Last Name"
                className={inputStyle}
                onChange={handleChange}
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                className={inputStyle}
                onChange={handleChange}
                required
              />

              <input
                name="phone"
                placeholder="Phone"
                className={inputStyle}
                onChange={handleChange}
                required
              />

              <input
                name="age"
                type="number"
                placeholder="Age"
                className={inputStyle}
                onChange={handleChange}
                required
              />

              <select
                name="gender"
                className={inputStyle}
                onChange={handleChange}
                required
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

              <input
                name="bloodGroup"
                placeholder="Blood Group"
                className={inputStyle}
                onChange={handleChange}
              />
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
  required
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
  required
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
  required
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

              <input
                name="university"
                placeholder="University"
                className={inputStyle}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-500">
              Address Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="street"
                placeholder="Street Address"
                className={inputStyle}
                onChange={handleChange}
              />

              <input
                name="city"
                placeholder="City"
                className={inputStyle}
                onChange={handleChange}
              />

              <input
                name="state"
                placeholder="State"
                className={inputStyle}
                onChange={handleChange}
              />

              <input
                name="postalCode"
                placeholder="Postal Code"
                className={inputStyle}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployeeModal;