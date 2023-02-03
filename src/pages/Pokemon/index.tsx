import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import { NewPokemonModal } from '../../components/PokemonComponents/NewPokemonModal';
import { CardPokemon } from '../../components/PokemonComponents/CardPokemon';
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
          <div id="divButton">
            <ButtonNewTransaction type='button' onClick={handleOpenNewPokemonModal}>
              <FiPlus size={24} />
              Adicionar Pokemon
            </ButtonNewTransaction>
          </div>
          <CardPokemon />
          <NewPokemonModal isOpen={isNewPokemonModalOpen} onRequestClose={handleCloseNewPokemonModal} />
        </Content>
      </Container >
    </PokemonProvider>
  );
}
