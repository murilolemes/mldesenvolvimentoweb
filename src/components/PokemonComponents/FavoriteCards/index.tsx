import { FaStar } from "react-icons/fa";

import { usePokemons } from '../../../hooks/PokemonsContext';

import {
  Container,
  Content,
  Title,
  ImgPokemon,
  Descriptions,
  ButtonFavorite,
} from "./styles";

export function FavoriteCards() {
  const { pokemons, favorite } = usePokemons();

  return (
    <Container>
      {pokemons.map((pokemon) => (
        <Content key={pokemon?.id} style={{ background: pokemon.type.color }} >
          <Title>
            <h1>{pokemon.name}</h1>
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
            <span />
            <img src={pokemon.img} alt={pokemon.name} />
          </ImgPokemon>
          <Descriptions>
            <div className="stats">
              <h4>Stats</h4>
              {pokemon.stats.map((stat) => (
                <div key={stat.name}>
                  <p>{stat.name}:</p>
                  <p>{stat.base_stat}</p>
                </div>
              ))}
            </div>
            <div className="skills">
              <h4>Skills</h4>
              {pokemon.skills.map((skill) => (
                <div key={skill}>
                  <p>{skill}</p>
                </div>
              ))}
            </div>
          </Descriptions>
          <ButtonFavorite
            type='button'
            onClick={() => favorite(Number(pokemon.id))}
          >
            <span className={pokemons.find(p => p.id === pokemon.id) ? 'addFavorite' : ''}>
              {pokemons.find(p => p.id === pokemon.id) ? 'Remover do Favoritos' : 'Adicionar ao Favoritos'}
            </span>
            <div>
              <FaStar
                className={pokemons.find(p => p.id === pokemon.id) ? 'pokeFavoriteBorder' : ''}
                size={20}
              />
              <FaStar
                className={pokemons.find(p => p.id === pokemon.id) ? 'pokeFavorite' : ''}
                size={16}
              />
            </div>
          </ButtonFavorite>
        </Content>
      ))}
    </Container>
  )
}
