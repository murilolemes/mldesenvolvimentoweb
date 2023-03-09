import { Link } from 'react-router-dom';

import { PokemonProvider } from '../../hooks/PokemonsContext';
import { ListCardPokemon } from '../../components/PokemonComponents/ListCardPokemon';
import { SearchPokemon } from '../../components/PokemonComponents/SearchPokemon';

import { Container, Content } from './styles';

export function Pokemon() {
  return (
    <PokemonProvider>
      <Container>
        <Content>
          <div className="divHeader">
            <SearchPokemon />
            <Link to={'/pokemons/favoritos'}>Favoritos</Link>
          </div>
          <ListCardPokemon />
        </Content>
      </Container >
    </PokemonProvider>
  );
}
