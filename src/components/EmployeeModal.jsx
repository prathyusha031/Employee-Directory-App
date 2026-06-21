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
      className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
        >
          ×
        </button>

        <div className="flex flex-col items-center">
          <img
            src={employee.image}
            alt={employee.firstName}
            className="w-28 h-28 rounded-full mb-4"
          />

          <h2 className="text-3xl font-bold">
            {employee.firstName} {employee.lastName}
          </h2>

          <p className="text-gray-500 text-lg">
            {employee.company.department}
          </p>
        </div>

        <div className="mt-6 space-y-3 text-lg">
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Phone:</strong> {employee.phone}</p>
          <p><strong>Age:</strong> {employee.age}</p>
          <p><strong>Gender:</strong> {employee.gender}</p>
          <p><strong>Company:</strong> {employee.company.name}</p>
          <p><strong>University:</strong> {employee.university}</p>
          <p>
            <strong>Address:</strong>{" "}
            {employee.address.address}, {employee.address.city}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeModal;