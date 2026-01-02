// FullscreenGroup.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

type FullscreenContextType = {
  activeId: string | null;
  setActiveId: (id: string | null) => void;
};

const FullscreenContext = createContext<FullscreenContextType | null>(null);

export const FullscreenGroup: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <FullscreenContext.Provider value={{ activeId, setActiveId }}>
      <div className="relative w-full h-full">{children}</div>
    </FullscreenContext.Provider>
  );
};

export const useFullscreenContext = () => useContext(FullscreenContext);
