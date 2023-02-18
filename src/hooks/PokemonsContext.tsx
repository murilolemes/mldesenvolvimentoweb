import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { pokeApi } from '../services/api';

interface Stats {
  name: string;
  base_stat: number;
}

interface Pokemon {
  id: number;
  name: string;
  img: string;
  favorite: boolean;
  url: string;
  type: {
    color: string;
    typePokemon: string[];
  };
  stats: Stats[];
  skills: string[];
}

interface PokemonsProviderProps {
  children: ReactNode
}

interface PokemonContexData {
  pokemons: Pokemon[];
  createPokemon: (pokemonPath: Pokemon) => Promise<void>;
  deletePokemon: (id: number) => Promise<void>;
  listPokemon: () => Promise<void>;
}

const PokemonsContext = createContext<PokemonContexData>(
  {} as PokemonContexData
)

export function PokemonProvider({ children }: PokemonsProviderProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>(() => {
    const storagePokemon = localStorage.getItem('@Pokemons:poke');

    if (storagePokemon) {
      return JSON.parse(storagePokemon);
    }
    return [];
  });

  async function createPokemon(pokemonPath: Pokemon) {
    try {
      const pokemonExists = pokemons.find(poke => poke.id === pokemonPath.id);
      if (!pokemonExists) {
        const updatePokemon = [...pokemons];

        updatePokemon.push(pokemonPath)

        setPokemons(updatePokemon)
        localStorage.setItem('@Pokemons:poke', JSON.stringify(updatePokemon));
        toast.success('Pokemon adicionado com sucesso! 😀');
      } else {
        throw Error();
      }
    } catch (error) {
      toast.error('Este pokemon já existe em sua lista de Pokemons! 😕');
    }
  }

  async function deletePokemon(id: number) {
    const updatePokemon = [...pokemons];

    const pokemonIndex = updatePokemon.findIndex(pokemon => pokemon.id === id);

    updatePokemon.splice(pokemonIndex, 1);

    setPokemons(updatePokemon);

    localStorage.setItem('@Pokemons:poke', JSON.stringify(updatePokemon));
    toast.success('Pokemon removido com sucesso! 😀')
  }

  async function listPokemon() {
    if (pokemons.length === 0) {
      const response = await pokeApi.get(`/pokemon/?offset=0&limit=2000`);
      const resultsApi = response.data.results;

      const typesPokemon = { color: '' };
      const updatePokemon = [];

      for (let i = 0; i < resultsApi.length; i++) {
        let poke = await pokeApi.get(resultsApi[i].url.split('v2')[1]);
        let pokeData: Pokemon = poke.data;
        let rawTypesBg = poke.data.types;
        let typesBg = [];
        let cardBg = document.getElementById('colorBg');
        let pokeImg = poke.data.sprites.other.home.front_default;

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

        updatePokemon.push({
          id: pokeData.id,
          name: pokeData.name,
          img: pokeImg,
          favorite: false,
          url: pokeData.url,
          type: {
            color: typesPokemon.color,
            typePokemon: typesBg,
          },
          stats: pokeData.stats,
          skills: pokeData.skills,
        })
      }
      setPokemons(updatePokemon)

      localStorage.setItem('@Pokemons:poke', JSON.stringify(updatePokemon));
      // resultsApi.map(async (p: any) => (
      //   // setPath(p.url.split('v2')[1])
      //   await pokeApi.get(p.url.split('v2')[1])

      // ))
    }
  }

  return (
    <PokemonsContext.Provider value={{ pokemons, createPokemon, deletePokemon, listPokemon }}>
      {children}
    </PokemonsContext.Provider>
  )
}

export function usePokemons(): PokemonContexData {
  const context = useContext(PokemonsContext);

  return context;
}
