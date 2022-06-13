import { usePokemons } from '../../hooks/PokemonsContext';
import { FiX } from "react-icons/fi";

import { Container, Card } from "./styles";

export function CardPokemon() {
  const { pokemons, deletePokemon } = usePokemons();
  return (
    <Container>
      {pokemons.map(pokemon => (
        <Card key={pokemon.id}>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.img} alt={pokemon.name} />
          <div className='descriptions'>
            <p>Tipo:</p>
            <p>{pokemon.type}</p>
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
      ))}
    </Container>
  )
}
