import { useEffect, useState } from "react";
import DashBoardMain from "./DashBoardComponents/DashBoardMain";
import DashBoardSideBar from "./DashBoardComponents/DashBoardSideBar";
import MarketingPage from "./DashBoardComponents/MarketingPage";
import DesignPage from "./DashBoardComponents/DesignPage";
import WebFlowPage from "./DashBoardComponents/WebFlowPage";
type Section = "dashboard" | "marketing" | "design" | "webflow";

const getSectionFromHash = (): Section => {
  if (typeof window === "undefined") return "dashboard";
  const hash = window.location.hash.replace("#", "") as Section;
  return hash || "dashboard";
};

const DashBoard = () => {
  const [section, setSection] = useState<Section>("dashboard");

  // Sync with hash changes (when clicking sidebar links)
  useEffect(() => {
    const updateFromHash = () => setSection(getSectionFromHash());
    updateFromHash(); // set initial
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, []);

  return (
    <div className="bg-slate-800 ">
      <div className="flex">
        <DashBoardSideBar />
        <div className="w-full">
          {section === "dashboard" && <DashBoardMain />}

          {section === "marketing" && <MarketingPage />}

          {section === "design" && <DesignPage />}
          {section === "webflow" && <WebFlowPage />}
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
