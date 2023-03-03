import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

export function InputSearch() {
  return (
    <Container>
      <input type="text" placeholder='Pesquisar Pokemon' />
      <button>
        <FiSearch size={20} />
      </button>
    </Container>
  );
}
