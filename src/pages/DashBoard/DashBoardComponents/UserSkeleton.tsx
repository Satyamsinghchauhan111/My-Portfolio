const UserSkeleton = () => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 animate-pulse">
      <div className="space-y-2">
        <div className="h-3 w-32 rounded bg-slate-200" />
        <div className="h-2 w-40 rounded bg-slate-200" />
      </div>
      <div className="h-2 w-20 rounded bg-slate-200" />
    </div>
  );
};
export default UserSkeleton;
