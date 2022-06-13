import { useState, FormEvent } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import Modal from 'react-modal';
import { toast } from 'react-toastify';

import { pokeApi } from '../../services/api';
import CloseImg from '../../assets/close.svg';
import { usePokemons } from '../../hooks/PokemonsContext';

import { Container, CardPokemon } from './styles';

interface NewPokemonModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface Pokemon {
  id: number;
  name: string;
  img: string;
  type: string;
}

export function NewPokemonModal({ isOpen, onRequestClose }: NewPokemonModalProps) {
  const { createPokemon } = usePokemons();
  const [pokemonPath, setPokemonPath] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon>();

  async function handleCreateNewPokemon(event: FormEvent) {
    event.preventDefault();

    try {
      if (!pokemonPath) {
        return toast.error('Insira o nome do Pokemon!');
      }

      const response = await pokeApi.get(`/pokemon/${pokemonPath}`);

      const poke = response.data;

      setPokemon({
        id: poke.id,
        name: poke.name,
        img: poke.sprites.front_default,
        type: poke.types[0].type.name
      });
    } catch (error) {
      return toast.error('Pokemon não encontrado! 😞')
    }
  }

  async function handleAddPokemon() {
    if (!pokemon) {
      return toast.error('Insira o nome do Pokemon!')
    }

    await createPokemon({
      id: Number(pokemon.id),
      name: pokemon.name,
      img: pokemon.img,
      type: pokemon.type
    });

    setPokemonPath('');
    setPokemon(undefined)
    onRequestClose();
  }

  function clearPokemon() {
    setPokemonPath('');
    setPokemon(undefined);
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={clearPokemon}
        className='react-modal-close'
      >
        <img src={CloseImg} alt='Fechar Modal' />
      </button>
      <Container onSubmit={handleCreateNewPokemon}>
        <h2>Novo Pokemon</h2>
        <input
          placeholder='Digite o nome do Pokemon'
          value={pokemonPath}
          onChange={e => setPokemonPath(e.target.value)}
        />
        <button type='submit'>Procurar</button>
      </Container>
      <CardPokemon>
        <div className="card">
          <h1>{pokemon?.name}</h1>
          <img src={pokemon?.img} alt={pokemon?.name} />
          <div className='descriptions'>
            <p>Tipo:</p>
            <p>{pokemon?.type}</p>
          </div>
          <div className="btnAddRemove">
            <button
              type='button'
              id='remove'
              onClick={clearPokemon}
            >
              <FiX />
              Cancelar
            </button>
            <button type='submit' id='btnAdd' onClick={handleAddPokemon}>
              <FiCheck />
              Adicionar
            </button>
          </div>
        </div>
      </CardPokemon>
    </Modal>
  )
}

