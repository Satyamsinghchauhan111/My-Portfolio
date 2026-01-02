import { FullscreenGroup } from "@/hooks/FullscreenGroup";

const WebFlowPage = () => {
  return (
    <FullscreenGroup>
      <div className="h-screen overflow-scroll bg-emerald-50 w-full p-5 rounded-l-[36px] animate-slide-in-right text-black">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-xl md:text-2xl font-semibold text-slate-900">
                Webflow Projects
              </h1>
              <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-100 text-emerald-600 font-semibold">
                Production
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Manage live sites, staging links and deployment status.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-600">
              All projects
            </button>
            <button className="text-xs px-3 py-1.5 rounded-full bg-slate-900 text-slate-50">
              New project
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <p className="text-xs text-slate-400 mb-1">Live sites</p>
            <p className="text-xl font-semibold text-slate-900">8</p>
            <p className="text-[11px] text-emerald-500 mt-1">100% uptime</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <p className="text-xs text-slate-400 mb-1">Staging sites</p>
            <p className="text-xl font-semibold text-slate-900">4</p>
            <p className="text-[11px] text-slate-400 mt-1">
              2 pending approvals
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <p className="text-xs text-slate-400 mb-1">Last deployment</p>
            <p className="text-xl font-semibold text-slate-900">2h ago</p>
            <p className="text-[11px] text-emerald-500 mt-1">
              No errors reported
            </p>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 flex-1">
          {/* Sites list */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Sites overview
              </h2>
              <button className="text-[11px] text-slate-400 flex items-center gap-1">
                Sort by activity <span>▾</span>
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-600">
              {[
                {
                  name: "landing-page.webflow.io",
                  env: "Production",
                  status: "Active",
                  updated: "2h ago",
                },
                {
                  name: "portfolio.webflow.io",
                  env: "Production",
                  status: "Active",
                  updated: "Yesterday",
                },
                {
                  name: "saas-app.webflow.io",
                  env: "Staging",
                  status: "Review",
                  updated: "3h ago",
                },
                {
                  name: "internal-tools.webflow.io",
                  env: "Staging",
                  status: "Draft",
                  updated: "2 days ago",
                },
              ].map((site) => (
                <div
                  key={site.name}
                  className="flex items-center gap-3 py-2 px-2 rounded-xl hover:bg-slate-50 transition"
                >
                  <div className="h-8 w-8 rounded-xl bg-slate-100 flex items-center justify-center text-[11px] text-slate-600">
                    WF
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-slate-800 truncate">
                      {site.name}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {site.env} · Updated {site.updated}
                    </p>
                  </div>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      site.status === "Active"
                        ? "bg-emerald-100 text-emerald-600"
                        : site.status === "Review"
                        ? "bg-amber-100 text-amber-600"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {site.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Deployment timeline */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Deployment timeline
              </h2>
              <span className="text-[11px] text-slate-400">
                Today · Automatic deploys
              </span>
            </div>

            <div className="space-y-4 text-xs text-slate-600">
              {[
                {
                  time: "14:32",
                  label: "Deployed landing-page.webflow.io",
                  status: "Success",
                },
                {
                  time: "11:05",
                  label: "Staging deploy saas-app.webflow.io",
                  status: "Success",
                },
                {
                  time: "09:17",
                  label: "Rollback portfolio.webflow.io",
                  status: "Success",
                },
              ].map((d, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] text-slate-400">{d.time}</span>
                    <div className="flex-1 w-px bg-slate-200 mt-1" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <p className="text-[11px] font-medium text-slate-800">
                        {d.label}
                      </p>
                    </div>
                    <p className="text-[11px] text-slate-400">{d.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FullscreenGroup>
  );
};

export default WebFlowPage;
