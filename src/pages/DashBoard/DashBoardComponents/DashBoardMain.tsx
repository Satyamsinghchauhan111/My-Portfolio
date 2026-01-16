import { FullscreenGroup } from "@/hooks/FullscreenGroup";
import StorageCard from "./StorageCard";
import LastFilesCard from "./LastFilesCard";
import { FullscreenWrapper } from "./FullScreenWrapper";
import DashboardHeader from "./DashboardHeader";

const DashBoardMain = ({ hidden }: { hidden: boolean }) => {
  return (
    <FullscreenGroup>
      <div
        className={`h-screen sm:flex sm:flex-col sm:justify-between overflow-scroll bg-slate-100 w-full sm:p-6 px-2 py-6  ${
          hidden ? "sm:rounded-l-[36px] rounded-none" : "rounded-l-[36px] "
        } animate-slide-in-right text-black`}
      >
        <FullscreenWrapper id="" isButtonHide>
          <DashboardHeader />
        </FullscreenWrapper>
        <div className="flex gap-5 mt-5  max-sm:flex-col  w-full">
          <StorageCard />
          <LastFilesCard />
        </div>
      </div>
    </FullscreenGroup>
  );
};

export default DashBoardMain;
