import { useEffect } from 'react';
import { usePokemons } from '../../../hooks/PokemonsContext';
import { FiTrash2 } from "react-icons/fi";

import { Container, Card, Title, ImgPokemon, Descriptions, BtnRemove } from "./styles";

export function CardPokemon() {
  const { pokemons } = usePokemons();

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
        <Card
          key={pokemon.id}
          id={pokemon.name}
        >
          <Title>
            <h1>{pokemon.name.replace(/-/g, ' ')}</h1>
            <p>#{pokemon.id}</p>
          </Title>
          <ImgPokemon>
            <div className="type">
              {pokemon.type.typePokemon.map((type) => (
                <div key={type}>
                  <p>{type}</p>
                </div>
              ))}
            </div>
            <img src={pokemon.img} alt={pokemon.name} />
          </ImgPokemon>
          <Descriptions>
            <div className="stats">
              <h4>Stats</h4>
              {pokemon.stats.map((stat) => (
                <div key={stat.name}>
                  <p>{stat.name.replace(/-/g, ' ')}:</p>
                  <p>{stat.base_stat}</p>
                </div>
              ))}
            </div>
            <div className="skills">
              <h4>Skills</h4>
              {pokemon.skills.map((skill) => (
                <div key={skill}>
                  <p>{skill.replace(/-/g, ' ')}</p>
                </div>
              ))}
            </div>
          </Descriptions>
          <BtnRemove>
            <button
              type='button'
              id='remove'
            // onClick={() => deletePokemon(pokemon.id)}
            >
              <FiTrash2 />
            </button>
          </BtnRemove>
        </Card>
      ))
      }
    </Container >
  )
}
