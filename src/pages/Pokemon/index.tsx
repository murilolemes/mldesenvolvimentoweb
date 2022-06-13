import { useState } from 'react';

import { NewPokemonModal } from '../../components/NewPokemonModal';
import { CardPokemon } from '../../components/CardPokemon';
import { PokemonProvider } from '../../hooks/PokemonsContext';

import { Container, Content, ButtonNewTransaction } from './styles';

export function Pokemon() {
  const [isNewPokemonModalOpen, setIsNewPokemonModalOpen] = useState(false);

  function handleOpenNewPokemonModal() {
    setIsNewPokemonModalOpen(true);
  }

  function handleCloseNewPokemonModal() {
    setIsNewPokemonModalOpen(false);
  }

  return (
    <PokemonProvider>
      <Container>
        <Content>
          <ButtonNewTransaction type='button' onClick={handleOpenNewPokemonModal}>
            Procurar novo Pokemon
          </ButtonNewTransaction>
          <CardPokemon />
          <NewPokemonModal isOpen={isNewPokemonModalOpen} onRequestClose={handleCloseNewPokemonModal} />
        </Content>
      </Container >
    </PokemonProvider>
  );
}
