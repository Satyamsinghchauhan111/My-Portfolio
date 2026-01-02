import { FullscreenGroup } from "@/hooks/FullscreenGroup";
import { FullscreenWrapper } from "./FullScreenWrapper";

const MarketingPage = () => {
  return (
    <FullscreenGroup>
      <div className="h-screen overflow-scroll bg-emerald-50 w-full p-5 rounded-l-[36px] animate-slide-in-right text-black">
        {/* Header */}
        <FullscreenWrapper id="m-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-xl md:text-2xl font-semibold text-slate-900">
                  Marketing Overview
                </h1>
                <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-100 text-emerald-600 font-semibold">
                  Campaigns
                </span>
              </div>
              <p className="text-sm text-slate-500">
                Track your traffic, leads and conversions in one place.
              </p>
            </div>

            {/* Filters / Actions */}
            <div className="flex items-center gap-3">
              <button className="text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-600">
                This month
              </button>
              <button className="text-xs px-3 py-1.5 rounded-full bg-slate-900 text-slate-50">
                New campaign
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <p className="text-xs text-slate-400 mb-1">Total visitors</p>
              <p className="text-xl font-semibold text-slate-900">124,532</p>
              <p className="text-[11px] text-emerald-500 mt-1">
                +18% vs last month
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <p className="text-xs text-slate-400 mb-1">Qualified leads</p>
              <p className="text-xl font-semibold text-slate-900">8,294</p>
              <p className="text-[11px] text-emerald-500 mt-1">
                +6% vs last month
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <p className="text-xs text-slate-400 mb-1">Conversion rate</p>
              <p className="text-xl font-semibold text-slate-900">3.9%</p>
              <p className="text-[11px] text-amber-500 mt-1">Stable</p>
            </div>
          </div>
        </FullscreenWrapper>

        {/* KPI row */}

        {/* Main grid */}

        {/* Channel performance */}
        <div className="flex">
          <FullscreenWrapper id="m-1">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col w-full h-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-slate-900">
                  Channel performance
                </h2>
                <button className="text-[11px] text-slate-400 flex items-center gap-1">
                  Last 30 days <span>▾</span>
                </button>
              </div>

              <div className="space-y-3 text-sm text-slate-600">
                {[
                  {
                    name: "Google Ads",
                    traffic: "54k",
                    leads: "4.1k",
                    trend: "+12%",
                  },
                  {
                    name: "Instagram",
                    traffic: "32k",
                    leads: "2.3k",
                    trend: "+8%",
                  },
                  {
                    name: "Email campaigns",
                    traffic: "18k",
                    leads: "1.1k",
                    trend: "+3%",
                  },
                  {
                    name: "Organic search",
                    traffic: "20k",
                    leads: "760",
                    trend: "+15%",
                  },
                ].map((row) => (
                  <div
                    key={row.name}
                    className="flex items-center gap-3 py-2 px-2 rounded-xl hover:bg-slate-50 transition"
                  >
                    <div className="h-8 w-8 rounded-xl bg-slate-100 flex items-center justify-center text-[11px] text-slate-600">
                      {row.name[0]}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium text-slate-800">
                        {row.name}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {row.traffic} visits · {row.leads} leads
                      </p>
                    </div>
                    <span className="text-[11px] font-medium text-emerald-500">
                      {row.trend}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FullscreenWrapper>

          {/* Active campaigns */}
          <FullscreenWrapper id="m-2">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col w-full h-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-slate-900">
                  Active campaigns
                </h2>
                <span className="text-[11px] text-slate-400">4 running</span>
              </div>

              <div className="space-y-3 text-xs text-slate-600">
                {[
                  {
                    name: "Spring Launch",
                    status: "Running",
                    budget: "₹120k",
                    progress: "68%",
                  },
                  {
                    name: "Retargeting",
                    status: "Running",
                    budget: "₹80k",
                    progress: "52%",
                  },
                  {
                    name: "Brand awareness",
                    status: "Paused",
                    budget: "₹40k",
                    progress: "34%",
                  },
                ].map((c) => (
                  <div
                    key={c.name}
                    className="rounded-2xl border border-slate-100 p-3 hover:bg-slate-50 transition"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-xs font-medium text-slate-800">
                        {c.name}
                      </p>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full ${
                          c.status === "Running"
                            ? "bg-emerald-100 text-emerald-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {c.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mb-2">
                      Budget {c.budget}
                    </p>
                    <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-emerald-500"
                        style={{ width: c.progress }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FullscreenWrapper>
        </div>
      </div>
    </FullscreenGroup>
  );
};

export default MarketingPage;
