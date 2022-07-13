import { usePokemons } from '../../hooks/PokemonsContext';
import { FiX } from "react-icons/fi";

import { Container, Card } from "./styles";

export function CardPokemon() {
  const { pokemons, deletePokemon } = usePokemons();

  return (
    <Container>
      {pokemons.map(pokemon => (
        <Card key={pokemon.id} id='colorBackground'>
          <div id="title">
            <h1>{pokemon.name.replace(/-/g, ' ')}</h1>
            <p>#{pokemon.id}</p>
          </div>
          <div id="imgPokemon">
            <img src={pokemon.img} alt={pokemon.name} />
          </div>
          <div className='descriptions'>
            <div className="stats">
              <p>Stats</p>
              <div>
                {pokemon.stats.map((stat) => (
                  <div key={stat.name}>
                    <p>{stat.name}:</p>
                    <p>{stat.base_stat}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="skills">
              <p>Skills</p>
              <div>
                {pokemon.skills.map((skill) => (
                  <div key={skill.length}>
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
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
