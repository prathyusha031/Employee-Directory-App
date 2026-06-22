function SkeletonCard() {
  return (
    <div className="rounded-[28px] p-6 bg-white border border-slate-200 animate-pulse shadow-lg">

      <div className="w-24 h-24 mx-auto rounded-full bg-slate-200" />

      <div className="h-5 bg-slate-200 rounded mt-5" />

      <div className="h-4 bg-slate-200 rounded mt-3 w-2/3 mx-auto" />

      <div className="h-10 bg-slate-200 rounded-2xl mt-6" />

    </div>
  );
}

export default SkeletonCard;