import { useEffect, useState } from "react";
import DashBoardMain from "./DashBoardComponents/DashBoardMain";
import DashBoardSideBar from "./DashBoardComponents/DashBoardSideBar";
import MarketingPage from "./DashBoardComponents/MarketingPage";
import { log } from "console";

type Section = "dashboard" | "marketing";

const getSectionFromHash = (): Section => {
  if (typeof window === "undefined") return "dashboard";
  const hash = window.location.hash.replace("#", "") as Section;
  return hash || "dashboard";
};

const DashBoard = () => {
  const [hidden, setHidden] = useState(true);
  const [section, setSection] = useState<Section>("dashboard");
  console.log(hidden);

  // Sync with hash changes (when clicking sidebar links)
  useEffect(() => {
    const updateFromHash = () => setSection(getSectionFromHash());
    updateFromHash(); // set initial
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, []);

  return (
    <div className="bg-slate-800   transition-all duration-500 w-screen">
      <div className="flex">
        <DashBoardSideBar setHidden={setHidden} hidden={hidden} />
        <div className="w-full">
          {section === "dashboard" && <DashBoardMain hidden={hidden} />}
          {section === "marketing" && <MarketingPage hidden={hidden} />}
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
