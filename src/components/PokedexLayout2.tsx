import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import NavBar from "./nav";

type PokedexLayout2Props = {
  children?: ReactNode;
};

const PokedexLayout2: React.FC<PokedexLayout2Props> = (props) => {
  const { children } = props;
  return (
    <main
      className={twMerge(
        "flex flex-col justify-between items-center",
        "max-w-screen-lg h-full"
      )}
    >
      <NavBar />
      {children}
    </main>
  );
};
export default PokedexLayout2;
