import React, { useEffect, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { relative } from "path";

type PokemonCardProps = {
  pokemonInfo: any;
};

const PokemonCard: React.FC<PokemonCardProps> = (props) => {
  const { pokemonInfo } = props;
  const [info, setInfo] = useState<any>();
  const [loading, setLoading] = useState(false);

  const getPokemon = async () => {
    setLoading(true);
    const res = await fetch(pokemonInfo.url);
    const data2 = await res.json();
    console.log("data2", data2);
    setInfo(data2);
    setLoading(false);
  };
  useEffect(() => {
    getPokemon();
  }, [pokemonInfo]);
  return (
    <Link
      href={`/pokedex/${info?.id}`}
      className={twMerge(
        "w-50 text-center p-4 mx-auto",
        "cursor-pointer shadow-xl rounded-xl border border-black border-opacity-5",
        "[&:hover>:first-child]:scale-125",
        "[&:hover>:last-child]:text-yellow-500",
        "relative overflow-hidden"
      )}
    >
      <div className="w-full h-28 scale-100 transition-transform">
        <div className="relative">
          {info && (
            <Image
              src={info.sprites.other["official-artwork"].front_default}
              alt={info.name}
              className={twMerge("mx-auto", "sm:scale-50", "lg:scale-100")}
              width={112}
              height={112}
              priority
              style={{
                objectFit: "contain",
                objectPosition: "",
              }}
            />
          )}
        </div>
        {loading ? (
          <div className="flex items-center justify-center absolute inset-0 bg-white">
            <div className="lds-dual-ring "></div>
          </div>
        ) : null}
      </div>
      <div className={twMerge("text-lg font-semibold capitalize")}>
        {pokemonInfo.name}
      </div>
    </Link>
  );
};
export default PokemonCard;
