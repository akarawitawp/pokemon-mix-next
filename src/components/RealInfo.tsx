import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import FakeInfopokemon from "./FakeInfopokemon";

type RealInfoProps = {
  pokemon: any;
};

const RealInfo: React.FC<RealInfoProps> = (props) => {
  const { pokemon } = props;
  const [show, setShow] = useState(false);
  const statNames: any = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "SpA",
    "special-defense": "SpD",
    speed: "SPD",
  };

  useEffect(() => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, [pokemon]);

  if (!pokemon) {
    return <FakeInfopokemon />;
  }
  return (
    <div
      className={twMerge(
        "fixed top-0 bottom-0 w-1/5 flex flex-col px-5 items-center",
        "transition-all duration-300",
        !show ? "-right-[20%]" : "right-0"
      )}
    >
      <img
        className="relative w-40 h-40 object-contain top-10"
        src={pokemon.sprites.other.dream_world.front_default}
      />
      <h1>{pokemon.name}</h1>

      <div className="Typeinfo-container">
        <h1>Type</h1>
        {pokemon.types.map((t: any) => (
          <small className={[t.type.name] + "Info"}>{t.type.name}</small>
        ))}
      </div>
      <h1>Ability</h1>
      <div className="Ability-container">
        {pokemon.abilities.map((a: any) => (
          <small className="ability">{a.ability.name}</small>
        ))}
      </div>
      <h1>Stat</h1>
      <div className="Stat-container">
        {pokemon.stats.map((s: any) => (
          <div className={s.base_stat}>
            <div className={s.stat.name}>
              {s.base_stat}
              <br className="gap" />
              <span>{statNames[s.stat.name]}</span>
              <br />
            </div>
          </div>
        ))}
      </div>
      <div className="Shape-container">
        <small className="shape">
          Weight :
          <span />
          {pokemon.weight / 10}Kg
        </small>
        <small className="shape">
          height :
          <span />
          {pokemon.height / 10}m
        </small>
      </div>
    </div>
  );
};
export default RealInfo;
