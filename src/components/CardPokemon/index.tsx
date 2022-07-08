import { usePokemons } from '../../hooks/PokemonsContext';
import { FiX } from "react-icons/fi";

import { Container, Card } from "./styles";

export function CardPokemon() {
  const { pokemons, deletePokemon } = usePokemons();

  pokemons.map((pokemon) => console.log('aqui', pokemon.stats))
  // console.log('1', pokemons)

  return (
    <Container>
      {pokemons.map(pokemon => (
        <Card key={pokemon.id}>
          <h1>{pokemon.name.replace(/-/g, ' ')}</h1>
          <p>{pokemon.id}</p>
          <div id="imgPokemon">
            <img src={pokemon.img} alt={pokemon.name} />
          </div>
          <div className='descriptions'>
            <div className="stats">
              <p>Stats</p>
              {/* {pokemon.stats.map((teste) => (
                <p>{teste}</p>
              ))} */}
            </div>
          </div>
          <div className="btnRemove">
            <button
              type='button'
              id='remove'
              onClick={() => deletePokemon(pokemon.id)}
            >
              <FiX /> Remover
            </button>
          </div>
        </Card>
      ))
      }
    </Container >
  )
}
