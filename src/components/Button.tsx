import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, ...attr } = props;
  return (
    <button
      className={twMerge(
        "px-4 py-2 rounded-xl bg-slate-200 shadow-sm border-2 border-opacity-5",
        className
      )}
      {...attr}
    >
      {children}
    </button>
  );
};
