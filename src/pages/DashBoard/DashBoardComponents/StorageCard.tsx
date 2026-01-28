import { FullscreenWrapper } from "./FullScreenWrapper";
import { UsersPreview } from "./UserPreview";

// StorageCard.tsx
const StorageCard = () => {
  return (
    <FullscreenWrapper id="main-1">
      {(isFull) => (
        <div className="bg-white overflow-scroll rounded-3xl p-6 shadow-sm h-[95%] w-full  ">
          <h2 className="text-sm font-semibold text-slate-900 mb-4">Storage</h2>

          <div className="flex items-center gap-6 ">
            {/* Donut placeholder */}
            <div
              className={`relative ${
                isFull ? "h-28 w-28" : "h-40 w-40"
              }  rounded-full bg-slate-100 flex items-center justify-center`}
            >
              <div className="absolute inset-2 rounded-full border-[8px] border-emerald-400 border-t-slate-300 border-r-slate-300" />
              <div className="relative z-10 text-sm font-semibold text-slate-800">
                37%
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="text-slate-600">Documents</span>
                <span className="ml-auto text-slate-400">68 GB</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                <span className="text-slate-600">Videos</span>
                <span className="ml-auto text-slate-400">62 GB</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
                <span className="text-slate-600">Images</span>
                <span className="ml-auto text-slate-400">55 GB</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                <span className="text-slate-600">Free</span>
                <span className="ml-auto text-slate-400">315 GB</span>
              </div>
            </div>
          </div>
          <UsersPreview isFull={isFull} />
        </div>
      )}
    </FullscreenWrapper>
  );
};

export default StorageCard;
