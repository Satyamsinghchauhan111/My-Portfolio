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
    <Button
      size={size}
      className={`relative overflow-hidden transition-all duration-300 group ${
        size === "sm" ? "text-sm px-4 py-0" : "text-base px-6 py-3"
      } ${
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
          : "border border-border bg-transparent text-foreground hover:border-primary/50 hover:bg-primary/5 active:scale-95"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
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
            ? "from-primary/0 via-white/20 to-primary/0"
            : "from-primary/0 via-primary/10 to-primary/0"
        }`}
      ></div>
    </Button>
  );
};

export default CommonButton;
