import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';

interface Pokemon {
  id: number;
  name: string;
  img: string;
  type: {
    color: string;
    typePokemon: string[];
  };
  stats: object[];
  skills: string[];
}

interface PokemonsProviderProps {
  children: ReactNode
}

interface PokemonContexData {
  pokemons: Pokemon[];
  createPokemon: (pokemonPath: Pokemon) => Promise<void>;
  deletePokemon: (id: number) => Promise<void>;
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

  return (
    <PokemonsContext.Provider value={{ pokemons, createPokemon, deletePokemon }}>
      {children}
    </PokemonsContext.Provider>
  )
}

export function usePokemons(): PokemonContexData {
  const context = useContext(PokemonsContext);

  return context;
}
