import { Button } from "./ui/button";

const CommonButton = ({
  text,
  variant,
  idName,
  size,
  onClick,
  disabled,
}: {
  text?: string;
  variant: "primary" | "outline";
  idName?: string;
  size: "lg" | "sm" | "default" | "icon";
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <>
      <Button
        size={size}
        className={`"dark:glass-hover text-lg px-8 py-3 hover:scale-105 transition-all duration-300 group relative overflow-hidden ${
          size === "sm" && "text-sm px-4 py-0"
        }
        ${
          disabled ? "bg-gray-500 cursor-wait" : "bg-blue-600 hover:bg-blue-700"
        } 
        ${
          variant === "primary"
            ? "dark:glass-strong dark:bg-primary/20 dark:hover:bg-primary/30 dark:border-primary/30 border border-blue-400 text-black dark:text-white  hover:bg-transparent bg-transparent"
            : "dark:glass border-white/20 dark:hover:bg-white/10 "
        }`}
        onClick={() => {
          if (onClick) {
            onClick();
          } else if (idName) {
            document
              .getElementById(idName)
              ?.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <span className="relative z-10">{text}</span>

        <div
          className={`absolute inset-0 bg-gradient-to-r transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ${
            variant === "primary"
              ? "from-primary/0 via-primary/50 to-primary/0"
              : "from-accent/0 via-accent/30 to-accent/0 "
          }`}
        ></div>
      </Button>
    </>
  );
};

export default CommonButton;
