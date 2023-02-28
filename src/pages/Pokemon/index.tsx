// import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

// import { NewPokemonModal } from '../../components/PokemonComponents/NewPokemonModal';
// import { CardPokemon } from '../../components/PokemonComponents/CardPokemon';
import { PokemonProvider } from '../../hooks/PokemonsContext';

import { Container, Content, ButtonNewTransaction } from './styles';
import { ListCardPokemon } from '../../components/PokemonComponents/ListCardPokemon';

export function Pokemon() {
  // const [isNewPokemonModalOpen, setIsNewPokemonModalOpen] = useState(false);

  // function handleOpenNewPokemonModal() {
  //   setIsNewPokemonModalOpen(true);
  // }

  // function handleCloseNewPokemonModal() {
  //   setIsNewPokemonModalOpen(false);
  // }

  return (
    <PokemonProvider>
      <Container>
        <Content>

          <div id="divButton">
            <ButtonNewTransaction>
              <input type="text" placeholder='Pesquisar Pokemon' />
              <button>
                <FiSearch size={20} />
              </button>
            </ButtonNewTransaction>
          </div>
          <ListCardPokemon />
          {/* <CardPokemon /> */}
          {/* <NewPokemonModal isOpen={isNewPokemonModalOpen} onRequestClose={handleCloseNewPokemonModal} /> */}
        </Content>
      </Container >
    </PokemonProvider>
  );
}
