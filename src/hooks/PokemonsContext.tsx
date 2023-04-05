import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { pokeApi } from 'services/api';

interface Stats {
  name: string;
  base_stat: number;
}

interface Pokemon {
  id: number;
  name: string;
  img: string;
  favorite: boolean;
  type: {
    color: string;
    typePokemon: string[];
  };
  stats: Stats[];
  skills: string[];
}

interface ResponseProps {
  count: number;
  next: string;
  previous: string;
  results: [
    {
      name: string
      url: string;
    }
  ]
}

interface PokemonsProviderProps {
  children: ReactNode
}

interface PokemonContexData {
  pokemons: Pokemon[];
  listPokemons: Pokemon[];
  createPokemon: (pokemonPath: Pokemon) => Promise<Pokemon>;
  searchPokemon: (pokemonName: Pokemon) => Promise<Pokemon>;
  favorite: (id: number) => Promise<void>;
  PagePrevious: () => Promise<void>;
  PageNext: () => Promise<void>;
}

const PokemonsContext = createContext<PokemonContexData>(
  {} as PokemonContexData
)

export function PokemonProvider({ children }: PokemonsProviderProps) {
  const [isResponse, setIsResponse] = useState<ResponseProps>();
  const [isPath, setIsPath] = useState(`/pokemon/?offset=0&limit=28`);
  const [listPokemons, setListPokemons] = useState<Pokemon[]>([]);

  const [pokemons, setPokemons] = useState<Pokemon[]>(() => {
    const storagePokemon = localStorage.getItem('@Pokemons:poke');

    if (storagePokemon) {
      return JSON.parse(storagePokemon);
    }
    return [];
  });

  useEffect(() => {
    async function apiPokemon() {
      const response = await pokeApi.get(isPath)
      setIsResponse(response.data)
    }
    apiPokemon();
  }, [isPath]);

  useEffect(() => {
    async function listPokemon() {
      const resultsApi = isResponse?.results;

      const typesPokemon = { color: '' };
      const updatePokemon = [];

      if (!resultsApi) return [];

      for (let i = 0; i < resultsApi.length; i++) {
        let poke = await pokeApi.get(resultsApi[i].url.split('v2')[1]);
        let pokeData = poke.data;
        let rawTypesBg = poke.data.types;
        let typesBg = [];
        let cardBg = document.getElementById('colorBg');
        let pokeImg = poke.data.sprites.other.home.front_default;
        let skills = [];
        let status: Stats[] = [];

        for (let i = 0; i < rawTypesBg.length; i++) {
          let typesValueBg = rawTypesBg[i].type.name;
          typesBg.push(typesValueBg);
        }

        if (typesBg.length === 1) {
          typesPokemon.color = `linear-gradient(90deg, var(--${typesBg}), var(--${typesBg}))`;
          if (cardBg) {
            cardBg.style.background = typesPokemon.color;
          }
        } else {
          typesPokemon.color = `linear-gradient(90deg, var(--${typesBg[0]}), var(--${typesBg[1]}))`;
          if (cardBg) {
            cardBg.style.background = typesPokemon.color;
          }
        }

        for (let i = 0; i < pokeData.stats.length; i++) {
          let { base_stat } = pokeData.stats[i];
          let { name } = pokeData.stats[i].stat;
          status.push({ name, base_stat })
        };

        for (let i = 0; i < pokeData.abilities.length; i++) {
          let { name } = pokeData.abilities[i].ability;
          skills.push(name)
        };

        updatePokemon.push({
          id: pokeData.id,
          name: pokeData.name,
          img: pokeImg,
          favorite: false,
          type: {
            color: typesPokemon.color,
            typePokemon: typesBg,
          },
          stats: status,
          skills,
        })
      }
      setListPokemons(updatePokemon)
    }
    listPokemon();
  }, [isResponse]);

  async function createPokemon(pokemonPath: Pokemon) {
    const response = await pokeApi.get(`/pokemon/${pokemonPath}`);
    const pokeData = response.data;
    const typesPokemon = { color: '' };

    let rawTypesBg = response.data.types;
    let typesBg = [];
    let cardBg = document.getElementById('colorBg');
    let pokeImg = response.data.sprites.other.home.front_default;
    let skills = [];
    let status: Stats[] = [];

    for (let i = 0; i < rawTypesBg.length; i++) {
      let typesValueBg = rawTypesBg[i].type.name;
      typesBg.push(typesValueBg);
    }

    if (typesBg.length === 1) {
      typesPokemon.color = `linear-gradient(90deg, var(--${typesBg}), var(--${typesBg}))`;
      if (cardBg) {
        cardBg.style.background = typesPokemon.color;
      }
    } else {
      typesPokemon.color = `linear-gradient(90deg, var(--${typesBg[0]}), var(--${typesBg[1]}))`;
      if (cardBg) {
        cardBg.style.background = typesPokemon.color;
      }
    }

    for (let i = 0; i < pokeData.stats.length; i++) {
      let { base_stat } = pokeData.stats[i];
      let { name } = pokeData.stats[i].stat;
      status.push({ name, base_stat })
    };

    for (let i = 0; i < pokeData.abilities.length; i++) {
      let { name } = pokeData.abilities[i].ability;
      skills.push(name)
    };

    const searchPoke = {
      id: pokeData.id,
      name: pokeData.name,
      img: pokeImg,
      favorite: false,
      type: {
        color: typesPokemon.color,
        typePokemon: typesBg,
      },
      stats: status,
      skills,
    }
    return searchPoke;
  }

  async function searchPokemon(pokemonName: any) {
    const { idPokemon } = pokemonName;
    const namePokemon = idPokemon.toLowerCase().replace(/ /g, '-');

    const searchPoke = createPokemon(namePokemon);
    // const response = await pokeApi.get(`/pokemon/${namePokemon}`);
    // const pokeData = response.data;
    // const typesPokemon = { color: '' };

    // let rawTypesBg = response.data.types;
    // let typesBg = [];
    // let cardBg = document.getElementById('colorBg');
    // let pokeImg = response.data.sprites.other.home.front_default;
    // let skills = [];
    // let status: Stats[] = [];

    // for (let i = 0; i < rawTypesBg.length; i++) {
    //   let typesValueBg = rawTypesBg[i].type.name;
    //   typesBg.push(typesValueBg);
    // }

    // if (typesBg.length === 1) {
    //   typesPokemon.color = `linear-gradient(90deg, var(--${typesBg}), var(--${typesBg}))`;
    //   if (cardBg) {
    //     cardBg.style.background = typesPokemon.color;
    //   }
    // } else {
    //   typesPokemon.color = `linear-gradient(90deg, var(--${typesBg[0]}), var(--${typesBg[1]}))`;
    //   if (cardBg) {
    //     cardBg.style.background = typesPokemon.color;
    //   }
    // }

    // for (let i = 0; i < pokeData.stats.length; i++) {
    //   let { base_stat } = pokeData.stats[i];
    //   let { name } = pokeData.stats[i].stat;
    //   status.push({ name, base_stat })
    // };

    // for (let i = 0; i < pokeData.abilities.length; i++) {
    //   let { name } = pokeData.abilities[i].ability;
    //   skills.push(name)
    // };

    // const searchPoke = {
    //   id: pokeData.id,
    //   name: pokeData.name,
    //   img: pokeImg,
    //   favorite: false,
    //   type: {
    //     color: typesPokemon.color,
    //     typePokemon: typesBg,
    //   },
    //   stats: status,
    //   skills,
    // }
    // setIsPoke(searchPoke)
    return searchPoke;
  }

  async function favorite(id: any) {
    try {
      const updatePokemons = [...pokemons];
      const pokemon = await createPokemon(id);
      const pokemonExists = updatePokemons.find(p => p.id === pokemon.id);

      if (pokemonExists) {
        const pokemonIndex = updatePokemons.findIndex(p => p.id === pokemon.id)

        updatePokemons.splice(pokemonIndex, 1);
        localStorage.setItem('@Pokemons:poke', JSON.stringify(updatePokemons));
        setPokemons(updatePokemons);
        toast.success('Pokemon removido dos favoritos, com sucesso! 😀');
        return
      }

      if (pokemon) {
        updatePokemons.push({
          id: pokemon.id,
          name: pokemon.name,
          img: pokemon.img,
          favorite: true,
          type: {
            color: pokemon.type.color,
            typePokemon: pokemon.type.typePokemon,
          },
          stats: pokemon.stats,
          skills: pokemon.skills
        })
      }

      setPokemons(updatePokemons);
      localStorage.setItem('@Pokemons:poke', JSON.stringify(updatePokemons));
      toast.success('Pokemon adicionado como favorito, com sucesso! 😀');
    } catch (error) {
      toast.error(`${error}`)
    }
  }

  async function PagePrevious() {
    if (isResponse?.previous !== null) {
      let pathPrevious = isResponse?.previous.split('v2')[1];
      if (pathPrevious) setIsPath(pathPrevious)
    }
  }

  async function PageNext() {
    if (isResponse?.next !== null) {
      let pathNext = isResponse?.next.split('v2')[1];
      if (pathNext) setIsPath(pathNext)
    }
  }

  return (
    <PokemonsContext.Provider value={{
      pokemons,
      listPokemons,
      createPokemon,
      searchPokemon,
      favorite,
      PagePrevious,
      PageNext
    }}>
      {children}
    </PokemonsContext.Provider>
  )
}

export function usePokemons(): PokemonContexData {
  const context = useContext(PokemonsContext);

  return context;
}
