import { FullscreenGroup } from "@/hooks/FullscreenGroup";
import { FullscreenWrapper } from "./FullScreenWrapper";

const DesignPage = () => {
  return (
    <FullscreenGroup>
      <div className="h-screen overflow-scroll bg-emerald-50 w-full p-5 rounded-l-[36px] animate-slide-in-right text-black">
        {/* Header */}
        <FullscreenWrapper id="de-1" isButtonHide>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-xl md:text-2xl font-semibold text-slate-900">
                  Design Workspace
                </h1>
                <span className="text-[10px] px-2 py-1 rounded-full bg-indigo-100 text-indigo-600 font-semibold">
                  Figma
                </span>
              </div>
              <p className="text-sm text-slate-500">
                Keep your components, screens and design tokens in sync.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-600">
                Review requests
              </button>
              <button className="text-xs px-3 py-1.5 rounded-full bg-slate-900 text-slate-50">
                New file
              </button>
            </div>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <p className="text-xs text-slate-400 mb-1">Active projects</p>
              <p className="text-xl font-semibold text-slate-900">12</p>
              <p className="text-[11px] text-slate-400 mt-1">
                3 in review · 2 blocked
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <p className="text-xs text-slate-400 mb-1">Components</p>
              <p className="text-xl font-semibold text-slate-900">248</p>
              <p className="text-[11px] text-emerald-500 mt-1">
                All synced with design system
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <p className="text-xs text-slate-400 mb-1">Open comments</p>
              <p className="text-xl font-semibold text-slate-900">36</p>
              <p className="text-[11px] text-amber-500 mt-1">
                5 require your attention
              </p>
            </div>
          </div>
        </FullscreenWrapper>

        {/* Main grid */}

        <div className="flex gap-6">
          {/* Projects */}
          <FullscreenWrapper id="de-2">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col h-full w-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-slate-900">
                  Recent projects
                </h2>
                <button className="text-[11px] text-slate-400 flex items-center gap-1">
                  View all <span>▸</span>
                </button>
              </div>

              <div className="space-y-3 text-xs text-slate-600">
                {[
                  {
                    name: "Dashboard redesign",
                    status: "In progress",
                    updated: "2h ago",
                  },
                  {
                    name: "Mobile banking app",
                    status: "In review",
                    updated: "Yesterday",
                  },
                  {
                    name: "Landing page v3",
                    status: "Approved",
                    updated: "2 days ago",
                  },
                  {
                    name: "Design tokens cleanup",
                    status: "In progress",
                    updated: "3 days ago",
                  },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center gap-3 py-2 px-2 rounded-xl hover:bg-slate-50 transition"
                  >
                    <div className="h-8 w-8 rounded-xl bg-slate-100 flex items-center justify-center text-[11px] text-slate-600">
                      UI
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium text-slate-800">
                        {p.name}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Updated {p.updated}
                      </p>
                    </div>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full ${
                        p.status === "Approved"
                          ? "bg-emerald-100 text-emerald-600"
                          : p.status === "In review"
                          ? "bg-amber-100 text-amber-600"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FullscreenWrapper>

          {/* Design system */}
          <FullscreenWrapper id="de-3">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col h-full w-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-slate-900">
                  Design system health
                </h2>
                <span className="text-[11px] text-emerald-500">Good</span>
              </div>

              <div className="space-y-4 text-xs text-slate-600">
                <div>
                  <p className="mb-1 text-[11px] text-slate-500">
                    Tokens coverage
                  </p>
                  <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-indigo-500"
                      style={{ width: "86%" }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    86% of components use tokens
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-[11px] text-slate-500">
                    Deprecated components
                  </p>
                  <p className="text-[11px] text-slate-600">
                    5 components marked as deprecated. Plan cleanup this week.
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-[11px] text-slate-500">Guidelines</p>
                  <p className="text-[11px] text-slate-600">
                    Latest version: <span className="font-medium">v2.3</span> ·
                    Updated 4 days ago.
                  </p>
                </div>
              </div>
            </div>
          </FullscreenWrapper>
        </div>
      </div>
    </FullscreenGroup>
  );
};

export default DesignPage;
