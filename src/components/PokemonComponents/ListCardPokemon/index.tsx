import { useState } from 'react';
import { FaStar, FaInfo } from 'react-icons/fa';

import { usePokemons } from 'hooks/PokemonsContext';
import { NewPokemonModal } from 'components/PokemonComponents/NewPokemonModal';

import { Container, ListCard, Pages } from "./styles";

export function ListCardPokemon() {
  const { pokemons, listPokemons, PagePrevious, PageNext, favorite } = usePokemons();
  const [isNewPokemonModalOpen, setIsNewPokemonModalOpen] = useState(false);
  const [isPokemonId, setIsPokemonId] = useState(0)

  function handleOpenNewPokemonModal(id: number) {
    setIsNewPokemonModalOpen(true);
    setIsPokemonId(id)
  }

  function handleCloseNewPokemonModal() {
    setIsNewPokemonModalOpen(false);
    setIsPokemonId(0)
  }

  return (
    <Container>
      {listPokemons.map(pokemon => (
        <ListCard
          key={pokemon.id}
          style={{ background: pokemon?.type.color }}
        >
          <h1>{pokemon.name.replace(/-/g, ' ')}</h1>
          <button
            className='buttonFavorite'
            type='button'
            onClick={() => favorite(pokemon.id)}
          >
            <FaStar
              className={pokemons.find(p => p.id === pokemon.id) ? 'pokeFavoriteBorder' : ''}
              size={20}
            />
            <FaStar
              className={pokemons.find(p => p.id === pokemon.id) ? 'pokeFavorite' : ''}
              size={16}
            />
          </button>
          <span />
          <button
            className='buttonInfo'
            type='button'
            onClick={() => handleOpenNewPokemonModal(pokemon.id)}
          >
            <FaInfo size={10} />
          </button>
          <img src={pokemon.img} alt={pokemon.name} />
        </ListCard>
      ))
      }
      <Pages>
        <button
          type='button'
          onClick={PagePrevious}
          id='previous'
        >
          Previous
        </button>
        <button type='button' onClick={PageNext}>
          Next
        </button>
      </Pages>
      <NewPokemonModal
        isOpen={isNewPokemonModalOpen}
        onRequestClose={handleCloseNewPokemonModal}
        id={isPokemonId}
      />
    </Container >
  )
}
