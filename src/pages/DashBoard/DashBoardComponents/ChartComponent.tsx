import { useState } from "react";
import { FullscreenWrapper } from "./FullScreenWrapper";

const ChartComponent = () => {
  const [isFull, setIsFull] = useState(false);

  return (
    <FullscreenWrapper
      id="main-1"
      className="bg-cyan-500 rounded-[36px] text-white font-semibold "
    >
      {(isFull) => (
        <div className="flex flex-col items-center gap-2">
          <span>Chart</span>
          <span className="text-xs opacity-80">
            {isFull ? "Click to exit fullscreen" : "Click to go fullscreen"}
          </span>
        </div>
      )}
    </FullscreenWrapper>
  );
};

export default ChartComponent;
