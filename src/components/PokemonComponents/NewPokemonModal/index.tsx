import Modal from 'react-modal';
import { FaStar } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import { usePokemons } from 'hooks/PokemonsContext';

import { Container, Title, ImgPokemon, Descriptions, ButtonFavorite } from './styles';

interface NewPokemonModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id?: number;
  poke?: Pokemon;
}

interface Stats {
  name: string;
  base_stat: number;
}

interface Pokemon {
  id: number;
  name: string;
  img: string;
  favorite: boolean;
  type: {
    color: string;
    typePokemon: string[];
  };
  stats: Stats[];
  skills: string[];
}


export function NewPokemonModal({ isOpen, onRequestClose, id, poke }: NewPokemonModalProps) {
  const { listPokemons, pokemons, favorite } = usePokemons();

  const pokemon = id !== undefined ? listPokemons.find(poke => poke.id === id) : poke;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        className='react-modal-close'
        onClick={onRequestClose}
      >
        <FiX size={20} />
      </button>
      <Container style={{ background: pokemon?.type.color }} >
        <Title>
          <h1>{pokemon?.name.replace(/-/g, ' ')}</h1>
          <p>#{pokemon?.id}</p>
        </Title>
        <ImgPokemon>
          <div className="type">
            {pokemon?.type.typePokemon.map((type) => (
              <div key={type}>
                <p>{type}</p>
              </div>
            ))}
          </div>
          <span />
          <img src={pokemon?.img} alt={pokemon?.name} />
        </ImgPokemon>
        <Descriptions>
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
        </Descriptions>
        <ButtonFavorite
          type='button'
          onClick={() => favorite(Number(pokemon?.id))}
        >
          <span className={pokemons.find(p => p.id === pokemon?.id) ? 'addFavorite' : ''}>
            {pokemons.find(p => p.id === pokemon?.id) ? 'Remover do Favoritos' : 'Adicionar ao Favoritos'}
          </span>
          <div>
            <FaStar
              className={pokemons.find(p => p.id === pokemon?.id) ? 'pokeFavoriteBorder' : ''}
              size={20}
            />
            <FaStar
              className={pokemons.find(p => p.id === pokemon?.id) ? 'pokeFavorite' : ''}
              size={16}
            />
          </div>
        </ButtonFavorite>
      </Container>
    </Modal>
  )
}

