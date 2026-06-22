import { FiMail, FiPhone } from "react-icons/fi";

function EmployeeCard({
employee,
onViewDetails,
onEdit,
darkMode,
}) {

  const cardThemes = [
  {
    border: "from-pink-500 to-pink-400",
    role: "text-pink-500",
    badge: "bg-pink-500/10 text-pink-500",
    glow: "shadow-pink-500/20",
  },
  {
    border: "from-green-500 to-green-400",
    role: "text-green-500",
    badge: "bg-green-500/10 text-green-500",
    glow: "shadow-green-500/20",
  },
  {
    border: "from-purple-500 to-purple-400",
    role: "text-purple-500",
    badge: "bg-purple-500/10 text-purple-500",
    glow: "shadow-purple-500/20",
  },
  {
    border: "from-blue-500 to-blue-400",
    role: "text-blue-500",
    badge: "bg-blue-500/10 text-blue-500",
    glow: "shadow-blue-500/20",
  },
];

const theme = cardThemes[employee.id % 4];
return (
<div
className={`group rounded-[32px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        darkMode
? "bg-slate-900/80 border border-slate-700 backdrop-blur-xl"
: "bg-white border border-slate-200 shadow-lg"
      }`}
> <div className="p-7">

    {/* Avatar */}
<div className="relative flex justify-center mb-5">

  <div
    className={`absolute w-32 h-20 opacity-20 rounded-full blur-2xl bg-gradient-to-r ${theme.border}`}
  />

  <img
    src={employee.image}
    alt={`${employee.firstName} ${employee.lastName}`}
    className={`relative w-28 h-28 rounded-full object-cover border-4 bg-white shadow-xl ${theme.glow}`}
  />
</div>

    {/* Employee Info */}
    <div className="text-center mt-5">

      <h3
        className={`text-2xl font-bold ${
          darkMode ? "text-white" : "text-slate-900"
        }`}
      >
        {employee.firstName} {employee.lastName}
      </h3>

      <p className={`font-semibold mt-2 ${theme.role}`}>
  {employee.company?.title}
</p>
      <p
        className={`mt-2 ${
          darkMode ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {employee.company?.department}
      </p>

      <p
        className={`text-sm ${
          darkMode ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {employee.company?.name}
      </p>

    </div>

    {/* Contact */}
    <div
      className={`mt-5 rounded-2xl p-3 ${
        darkMode
          ? "bg-slate-900"
          : "bg-slate-50"
      }`}
    >

      <div className="flex items-center gap-2 text-sm">
        <FiMail className="text-pink-500" />
        <span
          className={`truncate ${
            darkMode
              ? "text-slate-300"
              : "text-slate-600"
          }`}
        >
          {employee.email}
        </span>
      </div>

      <div className="flex items-center gap-2 text-sm mt-2">
        <FiPhone className="text-pink-500" />
        <span
          className={`${
            darkMode
              ? "text-slate-300"
              : "text-slate-600"
          }`}
        >
          {employee.phone}
        </span>
      </div>

    </div>

    {/* Tags */}
    <div className="flex justify-center gap-2 mt-5 flex-wrap">

  <span
    className={`px-3 py-1 rounded-full text-xs font-semibold ${theme.badge}`}
  >
    {employee.age} Years
  </span>

  <span
    className={`px-3 py-1 rounded-full text-xs font-semibold ${theme.badge}`}
  >
    {employee.gender}
  </span>

  <span
    className={`px-3 py-1 rounded-full text-xs font-semibold ${theme.badge}`}
  >
    {employee.bloodGroup}
  </span>

</div>

    {/* Buttons */}
    <div className="flex gap-3 mt-6">

      <button
        onClick={() => onViewDetails(employee)}
        className={`flex-1 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r ${theme.border}`}
      >
        Details
      </button>

      <button
        onClick={() => onEdit(employee)}
        className={`flex-1 py-3 rounded-2xl font-semibold transition ${
          darkMode
            ? "bg-slate-700 hover:bg-slate-600 text-white"
            : "bg-slate-100 hover:bg-slate-200 text-slate-700"
        }`}
      >
        Edit
      </button>

    </div>

  </div>
</div>

);
}

export default EmployeeCard;
