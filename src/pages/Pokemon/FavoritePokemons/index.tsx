import { FavoriteCards } from 'components/PokemonComponents/FavoriteCards';
import { PokemonProvider } from 'hooks/PokemonsContext';

import { Container } from "./styles";

export function FavoritePokemons() {
  return (
    <PokemonProvider>
      <Container>
        <FavoriteCards />
      </Container>
    </PokemonProvider>
  )
}
