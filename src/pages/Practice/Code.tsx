const Code = () => {
  return (
    <div className="mockup-code w-full">
      <pre>
        <code>
          {`import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DrawerContainer from './DrawerContainer';

type DrawerPosition = 'left' | 'right';

export type DrawerParams = {
  children: React.ReactNode;
  open: boolean;
  position?: DrawerPosition;
};

export type DrawerOption = Omit<DrawerParams, 'open'>;

type ProviderContext = {
  openDrawer: (option: DrawerOption) => void;
  closeDrawer: () => void;
  isAnyDrawerOpen: boolean;
};

const EMPTY_FUNC = () => {};

const DrawerContext = React.createContext<ProviderContext>({
  openDrawer: EMPTY_FUNC,
  closeDrawer: EMPTY_FUNC,
  isAnyDrawerOpen: false,
});

export const useDrawer = () => React.useContext(DrawerContext);

const DrawerProvider = ({ children }: { children: React.JSX.Element }) => {
  const location = useLocation();

  const drawersRef = useRef<DrawerParams[]>([]);
  const [drawers, setDrawers] = useState<DrawerParams[]>([]);
  const [isAnyDrawerOpen, setIsAnyDrawerOpen] = useState(false);

  useEffect(() => {
    closeDrawer();
  }, [location.pathname, location.search, location.hash]);

  const openDrawer = (option: DrawerOption) => {
    drawersRef.current = drawersRef.current.map((d) => ({
      ...d,
      open: false,
    }));

    drawersRef.current.push({
      ...option,
      open: true,
      position: option.position ?? 'right',
    });

    setDrawers([...drawersRef.current]);
    setIsAnyDrawerOpen(true);
  };

  const closeDrawer = () => {
    drawersRef.current = drawersRef.current.map((d) => ({
      ...d,
      open: false,
    }));

    setDrawers([...drawersRef.current]);
    setIsAnyDrawerOpen(false);
  };

  return (
    <DrawerContext.Provider
      value={{
        openDrawer,
        closeDrawer,
        isAnyDrawerOpen,
      }}
    >
      {children}

      {drawers.map((drawer, i) => (
        <DrawerContainer
          key={i}
          open={drawer.open}
          position={drawer.position}
          onClose={closeDrawer}
        >
          {drawer.children}
        </DrawerContainer>
      ))}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
`}
        </code>
      </pre>
      <pre>
        <code>
          {`type DrawerContainerProps = {
  open: boolean;
  position?: 'left' | 'right';
  onClose: () => void;
  children: React.ReactNode;
};

const DrawerContainer = ({
  open,
  position = 'right',
  onClose,
  children,
}: DrawerContainerProps) => {
  return (
    <div className={drawer {open ? 'drawer-open' : ''}}>
      <input type="checkbox" className="drawer-toggle" checked={open} readOnly />

      <div className="drawer-side z-50">
        <label className="drawer-overlay" onClick={onClose}></label>

        <div
          className={bg-base-100 w-80 sm:w-96 min-h-full p-4 {
            position === 'left' ? 'left-0' : 'right-0'
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DrawerContainer;
`}
        </code>
      </pre>
      <pre>
        <code>{`onClick={() =>
        openDrawer({
          position: 'right',
          children: (
            <div>
              <h2 className="text-lg font-semibold">My Drawer</h2>
              <button onClick={closeDrawer} className="btn btn-sm mt-4">
                Close
              </button>
            </div>
          ),
        })
      }`}</code>
      </pre>

      <pre>
        <code>
          {`<DrawerProvider>
  <DialogProvider>
    <App />
  </DialogProvider>
</DrawerProvider>
`}
        </code>
      </pre>
    </div>
  );
};

export default Code;
