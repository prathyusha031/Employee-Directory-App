import { useEffect } from "react";

function EmployeeModal({
  employee,
  onClose,
  darkMode,
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!employee) return null;

  const themes = [
  {
    color: "text-pink-500",
    border: "border-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    color: "text-green-500",
    border: "border-green-500",
    bg: "bg-green-500/10",
  },
  {
    color: "text-purple-500",
    border: "border-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    color: "text-blue-500",
    border: "border-blue-500",
    bg: "bg-blue-500/10",
  },
];

const theme = themes[employee.id % 4];

  return (

  <div
    className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex justify-center items-center p-6"
    onClick={onClose}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className={`relative w-full max-w-5xl h-[90vh] overflow-y-auto rounded-[32px] shadow-2xl border ${
        darkMode
          ? "bg-slate-900 border-slate-700 text-white"
          : "bg-white border-slate-200 text-black"
      }`}
    >
      {/* Header */}
      <div
        className={`sticky top-0 z-20 p-8 border-b ${
          darkMode
            ? "bg-slate-900 border-slate-700"
            : "bg-white border-slate-200"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 w-12 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-2xl font-bold transition"
        >
          ×
        </button>

    <div className="flex flex-col items-center">

      <img
        src={employee.image}
        alt={employee.firstName}
       className={`w-32 h-32 rounded-full object-cover border-4 ${theme.border}`}
      />

      <h2 className="mt-5 text-3xl font-bold">
        {employee.firstName} {employee.lastName}
      </h2>

      <p className={`text-lg font-semibold mt-2 ${theme.color}`}>
        {employee.company?.title}
      </p>

      <p
        className={`${
          darkMode
            ? "text-slate-400"
            : "text-slate-500"
        }`}
      >
        {employee.company?.department}
      </p>

      <p
        className={`${
          darkMode
            ? "text-slate-400"
            : "text-slate-500"
        }`}
      >
        {employee.company?.name}
      </p>
    </div>
  </div>

  <div className="p-8 space-y-8">

    {/* Personal Information */}
   <SectionTitle
  title="Personal Information"
  theme={theme}
/>

    <div className="grid md:grid-cols-2 gap-5">
      <InfoBox darkMode={darkMode} theme={theme} label="First Name" value={employee.firstName} />
      <InfoBox darkMode={darkMode} theme={theme} label="Last Name" value={employee.lastName} />
      <InfoBox darkMode={darkMode} theme={theme} label="Maiden Name" value={employee.maidenName} />
      <InfoBox darkMode={darkMode} theme={theme} label="Username" value={employee.username} />
      <InfoBox darkMode={darkMode} theme={theme} label="Email" value={employee.email} />
      <InfoBox darkMode={darkMode} theme={theme} label="Phone" value={employee.phone} />
      <InfoBox darkMode={darkMode} theme={theme} label="Age" value={employee.age} />
      <InfoBox darkMode={darkMode} theme={theme} label="Gender" value={employee.gender} />
      <InfoBox darkMode={darkMode} theme={theme} label="Birth Date" value={employee.birthDate} />
      <InfoBox darkMode={darkMode} theme={theme} label="Blood Group" value={employee.bloodGroup} />
      <InfoBox darkMode={darkMode} theme={theme} label="Height" value={`${employee.height} cm`} />
      <InfoBox darkMode={darkMode} theme={theme} label="Weight" value={`${employee.weight} kg`} />
    </div>

    {/* Education */}
   <SectionTitle
  title="Education"
  theme={theme}
/>

    <div className="grid md:grid-cols-2 gap-5">
      <InfoBox
        darkMode={darkMode}
        theme={theme}
        label="University"
        value={employee.university}
      />
    </div>

    {/* Company */}
    <SectionTitle
  title="Company Information"
  theme={theme}
/>

    <div className="grid md:grid-cols-2 gap-5">
      <InfoBox darkMode={darkMode} theme={theme} label="Company Name" value={employee.company?.name} />
      <InfoBox darkMode={darkMode} theme={theme} label="Job Title" value={employee.company?.title} />
      <InfoBox darkMode={darkMode} theme={theme} label="Department" value={employee.company?.department} />
    </div>

    {/* Address */}
   <SectionTitle
  title="Address Information"
  theme={theme}
/>

    <div className="grid md:grid-cols-2 gap-5">
      <InfoBox darkMode={darkMode} theme={theme} label="Street" value={employee.address?.address} />
      <InfoBox darkMode={darkMode} theme={theme} label="City" value={employee.address?.city} />
      <InfoBox darkMode={darkMode} theme={theme} label="State" value={employee.address?.state} />
      <InfoBox darkMode={darkMode} theme={theme} label="Postal Code" value={employee.address?.postalCode} />
    </div>

    {/* Banking */}
   <SectionTitle
  title="Banking Information"
  theme={theme}
/>

    <div className="grid md:grid-cols-2 gap-5">
      <InfoBox darkMode={darkMode} theme={theme} label="Card Type" value={employee.bank?.cardType} />
      <InfoBox darkMode={darkMode} theme={theme} label="Currency" value={employee.bank?.currency} />
      <InfoBox darkMode={darkMode} theme={theme} label="IBAN" value={employee.bank?.iban} />
    </div>
  </div>
</div>

  </div>
);

}
function SectionTitle({ title, theme }) {
  return (
    <h3
      className={`text-xl font-bold border-b pb-2 mb-4 ${theme.color}`}
    >
      {title}
    </h3>
  );
}

function InfoBox({
  label,
  value,
  darkMode,
  theme,
}) {
  return (
    <div
      className={`p-5 rounded-2xl border transition-all duration-300 ${
        darkMode
          ? "bg-slate-800 border-slate-700"
          : "bg-slate-50 border-slate-200"
      } hover:shadow-lg`}
    >
      <p
        className={`text-xs uppercase tracking-wider mb-2 ${theme.color}`}
      >
        {label}
      </p>

      <p
        className={`font-semibold ${
          darkMode
            ? "text-white"
            : "text-slate-900"
        }`}
      >
        {value || "N/A"}
      </p>
    </div>
  );
}

export default EmployeeModal;