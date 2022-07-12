import { usePokemons } from '../../hooks/PokemonsContext';
import { FiX } from "react-icons/fi";

import { Container, Card } from "./styles";

export function CardPokemon() {
  const { pokemons, deletePokemon } = usePokemons();

  pokemons.map((pokemon) => pokemon.stats.map((pk) => console.log('teste', pk)))
  // console.log('1', pokemons)

  const colorBg = document.getElementById('colorBackground');

  if (colorBg) {
    pokemons.map((pokemon) => colorBg.style.background = pokemon.type.color);
  }

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
              {/* {pokemon.stats.map((poke) => ( */}
              <div>
                <p>HP:<span>63</span></p>
                <p>Attack:<span>60</span></p>
                <p>Defense:<span>55</span></p>
                <p>Special Attack:<span>50</span></p>
                <p>Special Defense:<span>50</span></p>
                <p>Speed:<span>71</span></p>
              </div>
              {/* ))} */}
            </div>
            <div className="skills">
              <p>Skills</p>
              <div>
                <p>HP:<span>63</span></p>
                <p>Attack:<span>60</span></p>
                <p>Defense:<span>55</span></p>
                <p>Special Attack:<span>50</span></p>
                <p>Special Defense:<span>50</span></p>
                <p>Speed:<span>71</span></p>
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
