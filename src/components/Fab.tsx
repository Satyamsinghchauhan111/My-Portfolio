import { routes } from "@/utils";

const Fab = () => {
  return (
    <div className="md:hidden fixed bottom-4 right-3 z-50  ">
      <div className="fab fab-flower">
        {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-lg btn-info btn-circle"
        >
          ☰
        </div>

        {/* Main Action button replaces the original button when FAB is open */}
        <button className="fab-main-action btn btn-circle btn-lg btn-success">
          x
        </button>

        {/* buttons that show up when FAB is open */}

        {routes.map((r, i) => (
          <div key={i}>
            <a
              href={r.path}
              className="btn btn-lg btn-circle flex justify-center items-center "
            >
              {r.icon}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fab;
