import { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

import { usePokemons } from '../../../hooks/PokemonsContext';

import { Container, ListCard } from "./styles";

export function ListCardPokemon() {
  const { pokemons, listPokemon } = usePokemons();
  listPokemon();
  console.log('--> ', pokemons)

  useEffect(() => {
    if (pokemons) {
      pokemons.map(poke => {
        let colorbg = document.getElementById(`${poke.name}`)

        if (colorbg) {
          colorbg.style.background = poke.type.color;
        }
        return '';
      });
    }
  }, [pokemons])

  return (
    <Container>
      {pokemons.map(pokemon => (
        <ListCard
          key={pokemon.id}
          id={pokemon.img === null ? 'ImgNull' : pokemon.name}
        >
          <h1>{pokemon.name.replace(/-/g, ' ')}</h1>
          <button>
            <FaStar id='fundo' size={20} />
            <FaStar size={16} />
          </button>
          <span />
          <img src={pokemon.img} alt={pokemon.name} />
        </ListCard>
      ))
      }
    </Container >
  )
}
