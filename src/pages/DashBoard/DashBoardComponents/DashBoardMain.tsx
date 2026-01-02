import { FullscreenGroup } from "@/hooks/FullscreenGroup";
import StorageCard from "./StorageCard";
import LastFilesCard from "./LastFilesCard";
import { FullscreenWrapper } from "./FullScreenWrapper";
import DashboardHeader from "./DashboardHeader";

const DashBoardMain = () => {
  return (
    <FullscreenGroup>
      <div className="h-screen overflow-scroll bg-slate-100 w-full p-5 rounded-l-[36px] animate-slide-in-right text-black">
        <FullscreenWrapper id="">
          <DashboardHeader />
        </FullscreenWrapper>
        <div className="flex gap-4  w-full">
          <StorageCard />
          <LastFilesCard />
        </div>
      </div>
    </FullscreenGroup>
  );
};

export default DashBoardMain;
