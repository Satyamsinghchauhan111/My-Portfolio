import { FullscreenWrapper } from "./FullScreenWrapper";

// DashboardHeader.tsx
const DashboardHeader = () => {
  return (
    <div className="">
      {/* Top row: title + search + actions */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-xl md:text-2xl font-semibold text-slate-900">
              Overview
            </h1>
            <span className="text-[10px] px-2 py-1 rounded-full bg-red-100 text-red-500 font-semibold">
              185 GB
            </span>
          </div>
          <p className="text-sm text-slate-500">Manage your folders</p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Search */}
          <div className="flex items-center gap-2 bg-slate-100 rounded-full px-3 py-2 flex-1 md:flex-none md:w-72">
            <span className="text-slate-400 text-sm">🔍</span>
            <input
              type="text"
              placeholder="Search something..."
              className="bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400 w-full"
            />
          </div>

          {/* Icon buttons */}
          <button className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm">
            🔔
          </button>
          <button className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm">
            ⏻
          </button>

          {/* Upgrade */}
          <button className="hidden md:inline-flex items-center rounded-full bg-emerald-500 text-white text-xs font-semibold px-4 py-2 shadow-sm">
            Upgrade Plan
          </button>
        </div>
      </div>

      {/* Folder cards row */}
      <div className="flex gap-4 overflow-x-auto pb-1">
        <div className="min-w-[140px] rounded-2xl bg-emerald-100 px-4 py-5 flex flex-col justify-between">
          <div className="text-[11px] text-slate-500 mb-2">01</div>
          <div className="font-semibold text-slate-800 mb-1">Marketing</div>
          <div className="text-[11px] text-slate-500">124 MB</div>
        </div>
        <div className="min-w-[140px] rounded-2xl bg-indigo-100 px-4 py-5 flex flex-col justify-between">
          <div className="text-[11px] text-slate-500 mb-2">02</div>
          <div className="font-semibold text-slate-800 mb-1">Branding</div>
          <div className="text-[11px] text-slate-500">124 MB</div>
        </div>
        <div className="min-w-[140px] rounded-2xl bg-slate-200 border border-dashed border-slate-300 px-4 py-5 flex items-center justify-center text-xs text-slate-500">
          + New Folder
        </div>
        <div className="min-w-[140px] rounded-2xl bg-orange-300 px-4 py-5 flex items-center justify-center text-sm font-semibold text-white">
          Your Gallery
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
