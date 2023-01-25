import { NextCustomPage } from "../types/next";
import Link from "next/link";
import { Button } from "../components/Button";

const HomePage: NextCustomPage = () => {
  return (
    <div className="flex justify-center items-center h-screen gap-2.5">
      <Link href="https://www.youtube.com/" target="_blank">
        <Button className="bg-red-400 text-white">Youtube</Button>
      </Link>
      <Link href="/Pokedex">
        <Button className="bg-gray-200">Pokedex</Button>
      </Link>
      <Link href="/PokemonSearch">
        <Button className="bg-yellow-400">PoSearch</Button>
      </Link>
      <Link href="/PokedexPage">
        <Button className="bg-pink-600">PokePage</Button>
      </Link>
    </div>
  );
};
export default HomePage;
