import { useEffect } from "react";

function EmployeeModal({ employee, onClose }) {

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
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-3xl font-bold text-gray-500 hover:text-red-500"
        >
          ×
        </button>

        {/* Header */}
        <div className="flex flex-col items-center border-b pb-6">

          <img
            src={employee.image}
            alt={employee.firstName}
            className="w-32 h-32 rounded-full border-4 border-blue-100"
          />

          <h2 className="mt-4 text-3xl font-bold text-gray-800">
            {employee.firstName} {employee.lastName}
          </h2>

          <p className="text-blue-600 text-lg font-semibold">
            {employee.company?.title}
          </p>

          <p className="text-gray-500">
            {employee.company?.department}
          </p>

          <p className="text-gray-500">
            {employee.company?.name}
          </p>

        </div>

        {/* Personal Information */}
        <section className="mt-6">

          <h3 className="text-xl font-bold mb-4 text-blue-700">
            Personal Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <InfoBox label="First Name" value={employee.firstName} />
            <InfoBox label="Last Name" value={employee.lastName} />
            <InfoBox label="Maiden Name" value={employee.maidenName} />
            <InfoBox label="Username" value={employee.username} />
            <InfoBox label="Email" value={employee.email} />
            <InfoBox label="Phone" value={employee.phone} />
            <InfoBox label="Age" value={employee.age} />
            <InfoBox label="Gender" value={employee.gender} />
            <InfoBox label="Birth Date" value={employee.birthDate} />
            <InfoBox label="Blood Group" value={employee.bloodGroup} />
            <InfoBox label="Height" value={`${employee.height} cm`} />
            <InfoBox label="Weight" value={`${employee.weight} kg`} />
            <InfoBox label="Eye Color" value={employee.eyeColor} />

            <InfoBox
              label="Hair"
              value={`${employee.hair?.color} (${employee.hair?.type})`}
            />

          </div>

        </section>

        {/* Education */}
        <section className="mt-8">

          <h3 className="text-xl font-bold mb-4 text-blue-700">
            Education
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <InfoBox
              label="University"
              value={employee.university}
            />

          </div>

        </section>

        {/* Company */}
        <section className="mt-8">

          <h3 className="text-xl font-bold mb-4 text-blue-700">
            Company Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <InfoBox
              label="Company Name"
              value={employee.company?.name}
            />

            <InfoBox
              label="Job Title"
              value={employee.company?.title}
            />

            <InfoBox
              label="Department"
              value={employee.company?.department}
            />

          </div>

        </section>

        {/* Address */}
        <section className="mt-8">

          <h3 className="text-xl font-bold mb-4 text-blue-700">
            Address Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <InfoBox
              label="Street"
              value={employee.address?.address}
            />

            <InfoBox
              label="City"
              value={employee.address?.city}
            />

            <InfoBox
              label="State"
              value={employee.address?.state}
            />

            <InfoBox
              label="State Code"
              value={employee.address?.stateCode}
            />

            <InfoBox
              label="Postal Code"
              value={employee.address?.postalCode}
            />

          </div>

        </section>

        {/* Bank */}
        <section className="mt-8">

          <h3 className="text-xl font-bold mb-4 text-blue-700">
            Banking Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <InfoBox
              label="Card Type"
              value={employee.bank?.cardType}
            />

            <InfoBox
              label="Card Number"
              value={employee.bank?.cardNumber}
            />

            <InfoBox
              label="Currency"
              value={employee.bank?.currency}
            />

            <InfoBox
              label="IBAN"
              value={employee.bank?.iban}
            />

          </div>

        </section>

      </div>
    </div>
  );
}

function InfoBox({ label, value }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
      <h4 className="font-semibold text-gray-700">
        {label}
      </h4>

      <p className="text-gray-600 mt-1 break-words">
        {value || "N/A"}
      </p>
    </div>
  );
}

export default EmployeeModal;