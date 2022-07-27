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

interface Stats {
  name: string;
  base_stat: number;
}

interface Pokemon {
  id: number;
  name: string;
  img: string;
  type: {
    color: string;
    typePokemon: string[];
  };
  stats: Stats[];
  skills: string[];
}

export function NewPokemonModal({ isOpen, onRequestClose }: NewPokemonModalProps) {
  const { createPokemon } = usePokemons();
  const [pokemonPath, setPokemonPath] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon>();
  const typesPokemon = { color: '' };

  async function handleCreateNewPokemon(event: FormEvent) {
    event.preventDefault();

    try {
      if (!pokemonPath) {
        return toast.error('Insira o nome do Pokemon!');
      }
      const namePokemon = pokemonPath.toLowerCase().replace(/ /g, '-')

      const response = await pokeApi.get(`/pokemon/${namePokemon}`);
      const data = response.data;

      const rawTypesBg = data.types;
      const typesBg = [];
      const skills = [];
      const status: Stats[] = [];
      const cardBg = document.getElementById('colorBg');

      for (let i = 0; i < rawTypesBg.length; i++) {
        let typesValueBg = rawTypesBg[i].type.name;
        typesBg.push(typesValueBg);
      }

      if (typesBg.length === 1) {
        typesPokemon.color = `linear-gradient(90deg, var(--${typesBg}), var(--${typesBg}))`;
        if (cardBg) {
          cardBg.style.background = typesPokemon.color;
        }
      } else {
        typesPokemon.color = `linear-gradient(90deg, var(--${typesBg[0]}), var(--${typesBg[1]}))`;
        if (cardBg) {
          cardBg.style.background = typesPokemon.color;
        }
      }

      for (let i = 0; i < data.stats.length; i++) {
        let { base_stat } = data.stats[i];
        let { name } = data.stats[i].stat;
        status.push({ name, base_stat })
      };

      for (let i = 0; i < data.abilities.length; i++) {
        let { name } = data.abilities[i].ability;
        skills.push(name)
      };

      setPokemon({
        id: data.id,
        name: data.name,
        img: data.sprites.other.home.front_default,
        type: {
          color: typesPokemon.color,
          typePokemon: typesBg
        },
        stats: status,
        skills
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
      type: {
        color: pokemon.type.color,
        typePokemon: pokemon.type.typePokemon
      },
      stats: pokemon.stats,
      skills: pokemon.skills
    });

    setPokemonPath('');
    setPokemon(undefined);
    onRequestClose();
  }

  function clearPokemon() {
    setPokemonPath('');
    setPokemon(undefined);
    onRequestClose();
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
        <div
          className={pokemon ? 'card' : 'none'}
          id='colorBg'
        >
          <div id="title">
            <h1>{pokemon?.name.replace(/-/g, ' ')}</h1>
            <p>#{pokemon?.id}</p>
          </div>
          <div id="imgPokemon">
            <div className="type">
              {pokemon?.type.typePokemon.map((type) => (
                <div key={type}>
                  <p>{type}</p>
                </div>
              ))}
            </div>
            <img src={pokemon?.img} alt={pokemon?.name} />
          </div>
          <div className='descriptions'>
            <div className="stats">
              <h4>Stats</h4>
              {pokemon?.stats.map((stat) => (
                <div key={stat.name}>
                  <p>{stat.name.replace(/-/g, ' ')}:</p>
                  <p>{stat.base_stat}</p>
                </div>
              ))}
            </div>
            <div className="skills">
              <h4>Skills</h4>
              {pokemon?.skills.map((skill) => (
                <div key={skill}>
                  <p>{skill.replace(/-/g, ' ')}</p>
                </div>
              ))}
            </div>
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

