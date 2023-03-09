import PokemonThumbnail from "@/components/PokemonThumbnail";
import { NextCustomPage } from "@/types/next";
import React, { useEffect, useState } from "react";
import PokedexLayout from "@/components/PokedexLayout";
import SearchPokemon from "@/components/SearchPokemon";
import FakeInfopokemon from "@/components/FakeInfopokemon";
import RealInfo from "@/components/RealInfo";

const HomePage: NextCustomPage = () => {
  const [allPokemon, setAllPokemon] = useState<any>([]);
  const [loadMore, setLoadMore] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
  );

  const [searchText, setSearchText] = useState<string>("");
  const [selectedPokemon, setSelectedPokemon] = useState<any>(null);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [start, setStart] = useState<boolean>(false);
  const [choose, setChoose] = useState<boolean>(false);

  const getAllPokemon = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    console.log("load2", data);
    setLoadMore(data.next);

    function createPokemonObject(results: any) {
      results.forEach(async (pokemon: any) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`
        );
        const data = await res.json();

        setAllPokemon((currentList: any) => [...currentList, data]);

        await console.log(allPokemon);
      });
    }

    createPokemonObject(data.results);
    await console.log(allPokemon);
  };
  const onPokemonOpenClick = (thePokemon: any) => {
    setSelectedPokemon(thePokemon);
  };

  const filteredpokemon = allPokemon.filter((pokemon: any) => {
    return pokemon.name.includes(searchText);
  });
  const PokemonElements = filteredpokemon.map((pokemon: any, index: number) => {
    return (
      <PokemonThumbnail
        pokemon={pokemon}
        key={index}
        onPokemonClick={() => {
          console.log("pokemon", pokemon);
          onPokemonOpenClick(pokemon);
        }}
      />
    );
  });

  useEffect(() => {
    window.onscroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage(page + 1);
        console.log(window.innerHeight + window.scrollY + "*1");
        console.log(document.body.offsetHeight + "*2");
      }
    };
  });

  useEffect(() => {
    getAllPokemon();
  }, [page]);

  // let pokemonInfo = null;
  // if (!!selectedPokemon) {
  //   pokemonInfo = <RealInfo pokemon={selectedPokemon} />;
  // }

  return (
    <div className="PokeApp z-10">
      <h1>Pokedex</h1>
      <SearchPokemon value={searchText} onValueChange={setSearchText} />
      <div className="pokemon-container z-10">
        <div className="all-container z-10">{PokemonElements}</div>
      </div>
      <button className="load-more" onClick={() => getAllPokemon()}>
        Load more
      </button>
      <div className="info-container">
        {/* {selectedPokemon ? (
          <FakeInfopokemon pokemon={selectedPokemon} />
        ) : (
          <FakeInfopokemon pokemon={null} />
        )} */}
      </div>
      <RealInfo pokemon={selectedPokemon} key={selectedPokemon?.id} />
    </div>
  );
};

HomePage.Layout = PokedexLayout;
export default HomePage;

/* {choose ? (
        <div className="absolute right-full transition-1000ms">
          <RealInfo pokemon={selectedPokemon} />
        </div>
      ) : (
        <div className="absolute right-0 transition-1000ms">
          <RealInfo pokemon={selectedPokemon} />
        </div>
      )}
*/
