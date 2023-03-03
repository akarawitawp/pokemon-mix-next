import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../../components/Button";
import PokedexLayout3 from "../../components/PokedexLayout3";
import PokemonCard from "../../components/PokemonCard";
import { NextCustomPage } from "../../types/next";

const HomePage: NextCustomPage = () => {
  const [pokeMon, setPokeMon] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  const getPokemon = async (page: number = 1) => {
    const limit: number = 20;
    const offset: number = limit * (page - 1);
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await result.json();
    console.log("data1", data);
    setPokeMon(data.results);
  };

  const handleChangePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = +e.target.value;
    setPage(page > 0 ? page : 1);
  };

  const handleClickNext = () => {
    const maxPage = 47;
    setPage((page) => (page + 1 <= maxPage ? page + 1 : maxPage));
  };

  const handleClickPrevious = () => {
    setPage((page) => (page > 1 ? page - 1 : 1));
  };

  useEffect(() => {
    getPokemon(page);
  }, [page]);
  return (
    <div>
      <div
        className={twMerge(
          "grid grid-cols-2 gap-2.5 gap-y-5 w-full",
          "sm:grid-cols-3 gap-2.5 gap-y-5 w-full ",
          "lg:grid-cols-5 gap-2.5 gap-y-5 w-full",
          "w-[840px] h-[756px]"
        )}
      >
        {pokeMon.map((pokeMon: any, index: number) => {
          return <PokemonCard pokemonInfo={pokeMon} key={index} />;
        })}
      </div>
      {/*navigator*/}
      <div className="flex justify-between mt-10 ">
        <Button
          className={twMerge(
            "w-[120px]",
            page === 1 && "opacity-30 cursor-not-allowed"
          )}
          onClick={handleClickPrevious}
        >
          Previous
        </Button>
        <input
          type="text"
          className="text-center border-2"
          value={page}
          onChange={handleChangePage}
        />
        <Button
          className={twMerge(
            "w-[120px]",
            page === 47 && "opacity-30 cursor-not-allowed"
          )}
          onClick={handleClickNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
HomePage.Layout = PokedexLayout3;
export default HomePage;
