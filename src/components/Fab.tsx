import { routes } from "@/utils";
import { Home, User, FolderGit2, Phone, X, Menu } from "lucide-react";

const Fab = () => {
  const icons = [
    <Home className="w-5 h-5" />,
    <User className="w-5 h-5" />,
    <FolderGit2 className="w-5 h-5" />,
    <Phone className="w-5 h-5" />,
  ];
  const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-primary/80"];

  return (
    <div className="md:hidden fixed bottom-32 right-3 z-50">
      <div className="fab fab-flower">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-lg btn-circle bg-primary text-primary-foreground border-0 shadow-lg shadow-primary/25"
        >
          <Menu className="w-5 h-5" />
        </div>

        <button className="fab-main-action btn btn-circle btn-lg bg-primary text-primary-foreground border-0 shadow-lg shadow-primary/25 transition-all duration-200">
          <X className="w-5 h-5" />
        </button>

        {routes.map((r, i) => (
          <div key={i}>
            <a
              href={r.path}
              className={`btn btn-lg btn-circle flex justify-center items-center border-0 text-white shadow-lg ${colors[i]}`}
            >
              {icons[i]}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fab;
