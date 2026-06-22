function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
  darkMode,
}) {
  return (
    <div className="flex justify-center mt-12">

      <div
        className={`flex items-center gap-3 p-3 rounded-2xl shadow-lg ${
          darkMode
            ? "bg-slate-900 border border-slate-700"
            : "bg-white border border-slate-200"
        }`}
      >

        {/* Previous */}
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              Math.max(prev - 1, 1)
            )
          }
          disabled={currentPage === 1}
          className={`w-11 h-11 rounded-xl transition ${
            darkMode
              ? "bg-slate-800 text-white hover:bg-slate-700"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          ←
        </button>

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              onClick={() =>
                setCurrentPage(page)
              }
              className={`w-11 h-11 rounded-xl font-semibold transition ${
                currentPage === page
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                  : darkMode
                  ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next */}
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, totalPages)
            )
          }
          disabled={
            currentPage === totalPages
          }
          className={`w-11 h-11 rounded-xl transition ${
            darkMode
              ? "bg-slate-800 text-white hover:bg-slate-700"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          →
        </button>

      </div>

    </div>
  );
}

export default Pagination;