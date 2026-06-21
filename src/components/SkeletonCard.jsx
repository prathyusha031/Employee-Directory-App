function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 animate-pulse">
      <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto"></div>

      <div className="h-5 bg-gray-300 rounded mt-4"></div>

      <div className="h-4 bg-gray-200 rounded mt-3"></div>

      <div className="h-4 bg-gray-200 rounded mt-2"></div>

      <div className="h-10 bg-gray-300 rounded mt-5"></div>
    </div>
  );
}

export default SkeletonCard;