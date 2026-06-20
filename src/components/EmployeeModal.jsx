import { useEffect } from "react";

function EmployeeModal({ employee, onClose }) {
  useEffect(() => {
    if (employee) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [employee]);

  if (!employee) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-lg relative max-h-[90vh] overflow-y-auto">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold"
        >
          ×
        </button>

        <div className="flex flex-col items-center">
          <img
            src={employee.image}
            alt={employee.firstName}
            className="w-28 h-28 rounded-full mb-4"
          />

          <h2 className="text-2xl font-bold">
            {employee.firstName} {employee.lastName}
          </h2>

          <p className="text-gray-500">
            {employee.company.department}
          </p>
        </div>

        <div className="mt-6 space-y-2">
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Phone:</strong> {employee.phone}</p>
          <p><strong>Age:</strong> {employee.age}</p>
          <p><strong>Gender:</strong> {employee.gender}</p>
          <p><strong>Company:</strong> {employee.company.name}</p>
          <p><strong>University:</strong> {employee.university}</p>
          <p>
            <strong>Address:</strong> {employee.address.address},{" "}
            {employee.address.city}
          </p>
        </div>

      </div>
    </div>
  );
}

export default EmployeeModal;