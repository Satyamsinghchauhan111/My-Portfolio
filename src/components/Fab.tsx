import { routes } from "@/utils";

const Fab = () => {
  const bg = ["bg-accent", "bg-primary", "bg-success", "bg-secondary"];
  return (
    <div className="md:hidden fixed bottom-32 right-3 z-50  ">
      <div className="fab fab-flower">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-lg btn-info btn-circle"
        >
          ☰
        </div>

        <button className="fab-main-action btn-accent btn btn-circle btn-lg bg-error text-black transition-all duration-200">
          x
        </button>

        {routes.map((r, i) => (
          <div key={i}>
            <a
              href={r.path}
              className={`btn btn-lg btn-circle btn-success flex justify-center items-center ${bg[i]} `}
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
