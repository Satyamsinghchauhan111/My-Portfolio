import SidebarNav from "./SidebarNav";

const DashBoardSideBar = () => {
  return (
    <aside className="h-screen  bg-slate-800 text-slate-100  p-6 flex flex-col shadow-2xl transition-all">
      {/* Top logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="h-9 w-9 rounded-2xl bg-slate-700 flex items-center justify-center">
          <span className="text-lg font-bold">⚪</span>
        </div>
        <div>
          <p className="text-sm font-semibold">gig</p>
          <p className="text-xs text-slate-400 -mt-1">share</p>
        </div>
      </div>

      {/* Profile card */}
      <div className="mb-8">
        <div className="bg-slate-700 rounded-2xl p-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400" />
          <div className="flex-1">
            <p className="text-sm font-semibold">Jennifer Ross</p>
            <p className="text-[11px] text-slate-300">Product Designer</p>
          </div>
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-[10px]">
            ⋮
          </span>
        </div>
      </div>

      {/* Navigation */}
      <SidebarNav />

      {/* Add files card */}
      <div className="mt-6">
        <div className="border-2 border-dashed border-slate-500/60 rounded-2xl p-4 flex flex-col items-center justify-center bg-slate-700/40">
          <p className="text-xs text-slate-200 mb-3">Add files</p>
          <button className="h-10 w-10 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center text-xl leading-none shadow">
            +
          </button>
          <p className="text-[10px] text-slate-400 mt-2">Up to 20 GB</p>
        </div>
      </div>
    </aside>
  );
};

export default DashBoardSideBar;
