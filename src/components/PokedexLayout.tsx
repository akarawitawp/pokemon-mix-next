import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PokedexLayoutProps = {
  children?: ReactNode;
};

const PokedexLayout: React.FC<PokedexLayoutProps> = (props) => {
  const { children } = props;
  return (
    <main
      className={twMerge(
        "flex justify-between items-center",
        "w-screen h-full"
      )}
    >
      {children}
    </main>
  );
};
export default PokedexLayout;
