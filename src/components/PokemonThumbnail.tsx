import React from "react";
import { twMerge } from "tailwind-merge";

type PokemonThumbnailProps = {
  pokemon: any;
  onPokemonClick: any;
};

const PokemonThumbnail: React.FC<PokemonThumbnailProps> = (props) => {
  const { pokemon, onPokemonClick } = props;
  const style = `thumb-container $(type)`;

  return (
    <div
      className="thumb-container z-10"
      onClick={() => {
        onPokemonClick();
      }}
    >
      <img
        className="thumb-img z-10"
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <div className="number z-10">
        <small>N{pokemon.id}</small>
      </div>
      <div className="detail-wrapper z-10">
        <h3>{pokemon.name}</h3>
        {/* <small className={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</small>
           {pokemon.types[1] ? <small className={pokemon.types[1].type.name}>{pokemon.types[1].type.name}</small> : null} */}
        <div className="Type-container z-10">
          {pokemon.types.map((t: any) => (
            <small className={t.type.name}>{t.type.name}</small>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PokemonThumbnail;
