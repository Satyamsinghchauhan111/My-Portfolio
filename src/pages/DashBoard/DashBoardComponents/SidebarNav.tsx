// SidebarNav.tsx
import { sidebarMenu } from "@/utils";
import { useEffect, useState } from "react";

const SidebarNav = () => {
  const getHash = () => window.location.hash.replace("#", "") || "dashboard";

  const [active, setActive] = useState<string>(getHash());

  // ✅ Sync with browser hash changes (back/forward)
  useEffect(() => {
    const onHashChange = () => {
      setActive(getHash());
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // ✅ Handle click + update hash
  const handleClick = (id: string) => {
    window.location.hash = id;
    setActive(id);
  };

  return (
    <nav className="flex-1">
      {["Menu", "Folders"].map((section) => (
        <div key={section} className="mb-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-2">
            {section}
          </p>

          <ul className="space-y-1 text-sm">
            {sidebarMenu
              .filter((item) => item.section === section)
              .map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2 rounded-xl transition
                      ${
                        active === item.id
                          ? "bg-slate-700 text-white"
                          : "hover:bg-slate-700/70 text-slate-200"
                      }
                    `}
                  >
                    <span className={`h-2 w-2 rounded-full ${item.dotColor}`} />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default SidebarNav;
