import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

const PokemonInfo = () => {
  const router = useRouter();
  const pokemonId = router.query.PokedexPageId;
  const [pokemon, setPokemon] = useState<any>();
  const [loading, setLoading] = useState(false);

  const getInPoKeMon = async () => {
    setLoading(true);
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
    );
    const poke = await result.json();
    setPokemon(poke);
    setLoading(false);
    console.log("data3", poke);
  };

  useEffect(() => {
    if (!pokemonId) {
      //ถ้าไม่มีpokemonid ให้ตัดจบการทำของรอบบนี้ไป จนกว่าจะมี pokemonid ถึงจะทำงาน
      return;
    }
    getInPoKeMon();
  }, [pokemonId]);

  return (
    <div className="">
      <div className="w-full h-40 relative scale-100 transition-transform">
        {pokemon && (
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            className="mx-auto"
            width={150}
            height={150}
            priority
            /*style={{
              objectFit: "contain",
            }}*/
          />
        )}
        {loading ? (
          <div className="flex items-center justify-center absolute inset-0 bg-white">
            <div className="lds-dual-ring "></div>
          </div>
        ) : null}
      </div>
      <div className="w-full text-center">Pokemonname</div>
      <div className="w-full text-center">{pokemon?.name}</div>
      <div className="flex flex-col items-center w-full">
        <div className="w-full text-center">
          <div>Type</div>
          {pokemon?.types.map((e: any) => (
            <small className={e.type.name}>{e.type.name}</small>
          ))}
        </div>
        <div className="text-center">
          <div>Stat</div>
          <div className="flex">
            {pokemon?.stats.map((s: any) => (
              <div className="flex flex-col ml-5">
                <div className={s.base_stat}>{s.base_stat}</div>
                <div className={s.stat.name}>{s.stat.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full text-center">
          <h1>Ability</h1>
          <div className="">
            {pokemon?.abilities.map((a: any) => (
              <small className="border rounded-sm bg-slate-400 gap-8 ">
                {a.ability.name}
              </small>
            ))}
          </div>
        </div>
        <div className="flex gap-5 mx-auto">
          <div>
            Wegiht : <span />
            {pokemon?.weight}
          </div>
          <div>
            Height : <span />
            {pokemon?.height}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
