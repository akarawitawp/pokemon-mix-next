import { twMerge } from "tailwind-merge";

const NavBar: React.FC = () => {
  return (
    <nav
      className={twMerge(
        "flex w-full h-20 text-2xl font-bold ",
        "justify-center items-center bg-purple-500 border "
      )}
    >
      Navbar
    </nav>
  );
};
export default NavBar;
