import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import { NewPokemonModal } from 'components/PokemonComponents/NewPokemonModal';
import { Input } from 'components/GlobalComponents/Input';
import { usePokemons } from 'hooks/PokemonsContext';

import { Container } from './styles';

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

export function SearchPokemon() {
  const [isNewPokemonModalOpen, setIsNewPokemonModalOpen] = useState(false);
  const [isPokemon, setIsPokemon] = useState<Pokemon>()
  const { searchPokemon } = usePokemons();

  function handleOpenNewPokemonModal() {
    setIsNewPokemonModalOpen(true);
  }

  function handleCloseNewPokemonModal() {
    setIsNewPokemonModalOpen(false);
  }

  async function hadleSubmit(data: any, { reset }: any) {
    try {
      setIsPokemon(await searchPokemon(data));
      handleOpenNewPokemonModal();
      reset();
    } catch (error) {
      toast.error('Erro ao buscar Pokemon, verifique se o nome está correto! 😕');
    }
  }

  return (
    <Container>
      <Form onSubmit={hadleSubmit}>
        <Input name='idPokemon' icon={FiSearch} placeholder='Pesquisar Pokemon' />
        <button>Buscar</button>
      </Form>
      <NewPokemonModal poke={isPokemon} isOpen={isNewPokemonModalOpen} onRequestClose={handleCloseNewPokemonModal} />
    </Container>
  );
}
