import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import NavBar from "./nav";

type PokedexLayoutProps = {
  children?: ReactNode;
};

const PokedexLayout3: React.FC<PokedexLayoutProps> = (props) => {
  const { children } = props;
  return (
    <main
      className={twMerge(
        "flex flex-col justify-between items-center",
        "w-full h-full"
      )}
    >
      {children}
    </main>
  );
};
export default PokedexLayout3;