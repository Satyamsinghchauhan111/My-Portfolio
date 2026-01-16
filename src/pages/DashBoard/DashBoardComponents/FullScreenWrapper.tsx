// FullscreenWrapper.tsx
import { useFullscreenContext } from "@/hooks/FullscreenGroup";
import React, { useEffect, useState } from "react";

type FullscreenWrapperProps = {
  children: React.ReactNode | ((isFull: boolean) => React.ReactNode);
  id: string;
  className?: string;
  normalSizeClass?: string;
  fullSizeClass?: string;
  isButtonHide?: boolean;

  // 🔥 NEW: notify when fullscreen changes
  onFullscreenChange?: (isFull: boolean) => void;
};

export const FullscreenWrapper: React.FC<FullscreenWrapperProps> = ({
  children,
  id,
  className = "",
  isButtonHide,
  normalSizeClass = "",
  fullSizeClass = "w-full h-[95vh]",
  onFullscreenChange,
}) => {
  const group = useFullscreenContext();
  const [localFull, setLocalFull] = useState(false);

  const isFull = group ? group.activeId === id : localFull;
  const someoneFull = group ? group.activeId !== null : false;
  const isOtherFull = group ? someoneFull && group.activeId !== id : false;

  const sizeClasses = isFull ? fullSizeClass : normalSizeClass;

  // 🔥 Notify parent / trigger side-effects
  useEffect(() => {
    onFullscreenChange?.(isFull);
  }, [isFull, onFullscreenChange]);

  const handleClick = () => {
    if (group) {
      group.setActiveId(group.activeId === id ? null : id);
    } else {
      setLocalFull((prev) => !prev);
    }
  };

  // 🔥 Smart children handling
  const content = (() => {
    // Render-prop
    if (typeof children === "function") {
      return children(isFull);
    }

    // Inject isFull into a single React element
    if (React.isValidElement(children)) {
      return React.cloneElement(
        children as React.ReactElement<{ isFull?: boolean }>,
        { isFull }
      );
    }

    return children;
  })();

  // Hide if another card is fullscreen
  if (isOtherFull) return null;

  return (
    <div
      className={`
        relative
        group
        animate-slide-in-right
        w-full
        origin-center
        cursor-pointer
        transition-[width,height] duration-500 ease-in-out
        rounded-3xl
        ${sizeClasses} ${className}
      `}
    >
      {!isButtonHide && (
        <div
          className="hidden absolute group-hover:flex group-focus:flex
          justify-center items-center cursor-pointer
          top-4 right-4 rounded-full
          bg-teal-500 h-8 w-8 text-white"
          onClick={handleClick}
        >
          ⛶
        </div>
      )}

      {content}
    </div>
  );
};
