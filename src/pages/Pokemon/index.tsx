import { PokemonProvider } from '../../hooks/PokemonsContext';

import { ListCardPokemon } from '../../components/PokemonComponents/ListCardPokemon';
import { InputSearch } from '../../components/PokemonComponents/InputSearch';

import { Container, Content } from './styles';

export function Pokemon() {
  return (
    <PokemonProvider>
      <Container>
        <Content>
          <InputSearch />
          <ListCardPokemon />
        </Content>
      </Container >
    </PokemonProvider>
  );
}
