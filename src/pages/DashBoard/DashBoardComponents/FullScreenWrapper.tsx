// FullscreenWrapper.tsx
import { useFullscreenContext } from "@/hooks/FullscreenGroup";
import React, { useState } from "react";

type FullscreenWrapperProps = {
  children: React.ReactNode | ((isFull: boolean) => React.ReactNode);
  id: string; // 👈 unique per card inside group
  className?: string;
  normalSizeClass?: string; // default size
  fullSizeClass?: string; // size when "full" inside parent
  isButtonHide?: boolean;
};

export const FullscreenWrapper: React.FC<FullscreenWrapperProps> = ({
  children,
  id,
  className = "",
  isButtonHide,
  normalSizeClass = "",
  fullSizeClass = "w-full h-[95vh]", // 👈 fills parent instead of vw/vh
}) => {
  const group = useFullscreenContext();
  const [localFull, setLocalFull] = useState(false);

  const isFull = group ? group.activeId === id : localFull;
  const someoneFull = group ? group.activeId !== null : false;
  const isOtherFull = group ? someoneFull && group.activeId !== id : false;

  const sizeClasses = isFull ? fullSizeClass : normalSizeClass;

  const content =
    typeof children === "function"
      ? (children as (f: boolean) => React.ReactNode)(isFull)
      : children;

  const handleClick = () => {
    if (group) {
      // toggle inside group
      if (group.activeId === id) {
        group.setActiveId(null); // collapse
      } else {
        group.setActiveId(id); // make this full
      }
    } else {
      // standalone mode (no group)
      setLocalFull((prev) => !prev);
    }
  };

  // If some other card is full, hide this one completely
  if (isOtherFull) {
    return null; // or <div className="hidden" /> if you prefer
  }

  return (
    <div
      className={`
        relative
        group
        animate-slide-in-right w-full
        origin-center
        cursor-pointer
        transition-[width,height] duration-500 ease-in-out
        rounded-3xl
        ${sizeClasses} ${className}
      `}
    >
      {isButtonHide ? null : (
        <div
          className="hidden  absolute group-hover:flex group-focus:flex justify-center items-center cursor-pointer top-4 right-4 rounded-full bg-teal-500 h-8 text-white w-8"
          onClick={handleClick}
        >
          ⛶
        </div>
      )}
      {content}
    </div>
  );
};
