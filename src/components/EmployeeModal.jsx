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

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-4xl h-[85vh] overflow-y-auto rounded-2xl shadow-2xl p-5 transition-all duration-300 ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-white text-black"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-3xl font-bold text-gray-400 hover:text-red-500"
        >
          ×
        </button>

        {/* Header */}
        <div
          className={`flex flex-col items-center border-b pb-6 ${
            darkMode
              ? "border-slate-700"
              : "border-gray-200"
          }`}
        >
          <img
            src={employee.image}
            alt={employee.firstName}
            className="w-24 h-24 rounded-full border-4 border-blue-200"
          />

          <h2 className="mt-3 text-2xl font-bold">
            {employee.firstName} {employee.lastName}
          </h2>

          <p className="text-blue-500 font-semibold text-lg">
            {employee.company?.title}
          </p>

          <p
            className={
              darkMode
                ? "text-gray-300"
                : "text-gray-500"
            }
          >
            {employee.company?.department}
          </p>

          <p
            className={
              darkMode
                ? "text-gray-300"
                : "text-gray-500"
            }
          >
            {employee.company?.name}
          </p>
        </div>

        {/* Personal Information */}
        <SectionTitle title="Personal Information" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoBox darkMode={darkMode} label="First Name" value={employee.firstName} />
          <InfoBox darkMode={darkMode} label="Last Name" value={employee.lastName} />
          <InfoBox darkMode={darkMode} label="Maiden Name" value={employee.maidenName} />
          <InfoBox darkMode={darkMode} label="Username" value={employee.username} />
          <InfoBox darkMode={darkMode} label="Email" value={employee.email} />
          <InfoBox darkMode={darkMode} label="Phone" value={employee.phone} />
          <InfoBox darkMode={darkMode} label="Age" value={employee.age} />
          <InfoBox darkMode={darkMode} label="Gender" value={employee.gender} />
          <InfoBox darkMode={darkMode} label="Birth Date" value={employee.birthDate} />
          <InfoBox darkMode={darkMode} label="Blood Group" value={employee.bloodGroup} />
          <InfoBox darkMode={darkMode} label="Height" value={`${employee.height} cm`} />
          <InfoBox darkMode={darkMode} label="Weight" value={`${employee.weight} kg`} />
          <InfoBox darkMode={darkMode} label="Eye Color" value={employee.eyeColor} />
          <InfoBox
            darkMode={darkMode}
            label="Hair"
            value={`${employee.hair?.color} (${employee.hair?.type})`}
          />
        </div>

        {/* Education */}
        <SectionTitle title="Education" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoBox
            darkMode={darkMode}
            label="University"
            value={employee.university}
          />
        </div>

        {/* Company */}
        <SectionTitle title="Company Information" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoBox darkMode={darkMode} label="Company Name" value={employee.company?.name} />
          <InfoBox darkMode={darkMode} label="Job Title" value={employee.company?.title} />
          <InfoBox darkMode={darkMode} label="Department" value={employee.company?.department} />
        </div>

        {/* Address */}
        <SectionTitle title="Address Information" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoBox darkMode={darkMode} label="Street" value={employee.address?.address} />
          <InfoBox darkMode={darkMode} label="City" value={employee.address?.city} />
          <InfoBox darkMode={darkMode} label="State" value={employee.address?.state} />
          <InfoBox darkMode={darkMode} label="State Code" value={employee.address?.stateCode} />
          <InfoBox darkMode={darkMode} label="Postal Code" value={employee.address?.postalCode} />
        </div>

        {/* Banking */}
        <SectionTitle title="Banking Information" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoBox darkMode={darkMode} label="Card Type" value={employee.bank?.cardType} />
          <InfoBox darkMode={darkMode} label="Card Number" value={employee.bank?.cardNumber} />
          <InfoBox darkMode={darkMode} label="Currency" value={employee.bank?.currency} />
          <InfoBox darkMode={darkMode} label="IBAN" value={employee.bank?.iban} />
        </div>

        {/* Additional Details */}
        <SectionTitle title="Additional Information" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoBox darkMode={darkMode} label="Role" value={employee.role} />
          <InfoBox darkMode={darkMode} label="Domain" value={employee.domain} />
          <InfoBox darkMode={darkMode} label="IP Address" value={employee.ip} />
          <InfoBox darkMode={darkMode} label="MAC Address" value={employee.macAddress} />
          <InfoBox darkMode={darkMode} label="EIN" value={employee.ein} />
          <InfoBox darkMode={darkMode} label="SSN" value={employee.ssn} />
          <InfoBox darkMode={darkMode} label="User Agent" value={employee.userAgent} />
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <h3 className="text-lg font-bold mt-5 mb-3 text-blue-500">
      {title}
    </h3>
  );
}

function InfoBox({
  label,
  value,
  darkMode,
}) {
  return (
    <div
      className={`p-3 rounded-lg shadow-sm transition-all duration-300 ${
        darkMode
          ? "bg-slate-800"
          : "bg-gray-50"
      }`}
    >
      <h4
        className={`font-semibold ${
          darkMode
            ? "text-gray-200"
            : "text-gray-700"
        }`}
      >
        {label}
      </h4>

      <p
        className={`mt-1 break-words text-sm ${
          darkMode
            ? "text-gray-300"
            : "text-gray-600"
        }`}
      >
        {value || "N/A"}
      </p>
    </div>
  );
}

export default EmployeeModal;