import { FullscreenWrapper } from "./FullScreenWrapper";

// LastFilesCard.tsx
const files = [
  {
    name: "Travel Images.psd",
    typeColor: "bg-emerald-400",
    date: "Nov 7, 2021",
    avatars: ["A", "B", "+7"],
  },
  {
    name: "True Photos.jpg",
    typeColor: "bg-sky-400",
    date: "Nov 8, 2021",
    avatars: ["C", "D"],
  },
  {
    name: "Dashboard Struct.pdf",
    typeColor: "bg-amber-400",
    date: "Nov 9, 2021",
    avatars: ["E", "F", "+8"],
  },
  {
    name: "Character Illustration.zip",
    typeColor: "bg-rose-400",
    date: "Nov 9, 2021",
    avatars: ["G", "H"],
  },
  {
    name: "Character Illustration.zip",
    typeColor: "bg-rose-400",
    date: "Nov 9, 2021",
    avatars: ["G", "H"],
  },
];

const LastFilesCard = () => {
  return (
    <FullscreenWrapper id="main-2">
      <div className="bg-white rounded-3xl p-4 shadow-sm h-full w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-slate-900">Last File</h2>
          <button className="text-xs text-slate-400 flex items-center gap-1">
            Latest
            <span>▾</span>
          </button>
        </div>

        <div className="space-y-3 text-xs">
          {files.map((file) => (
            <div
              key={file.name}
              className="flex items-center gap-3 py-2 px-2 rounded-xl hover:bg-slate-50 transition"
            >
              <div
                className={`h-8 w-8 rounded-xl flex items-center justify-center text-[10px] text-white ${file.typeColor}`}
              >
                📄
              </div>

              <div className="flex-1">
                <p className="text-slate-800 text-xs font-medium">
                  {file.name}
                </p>
                <p className="text-[10px] text-slate-400">Shared</p>
              </div>

              <div className="flex -space-x-2">
                {file.avatars.map((a) => (
                  <div
                    key={a}
                    className="h-6 w-6 rounded-full bg-slate-200 border border-white text-[10px] flex items-center justify-center text-slate-600"
                  >
                    {a}
                  </div>
                ))}
              </div>

              <div className="text-[10px] text-slate-400 ml-3">{file.date}</div>
            </div>
          ))}
        </div>
      </div>
    </FullscreenWrapper>
  );
};

export default LastFilesCard;
