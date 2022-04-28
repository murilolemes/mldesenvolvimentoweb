import { useState } from 'react';
import { NewTransactionModal } from '../../components/NewTransactionModal';

import { Container, Content } from './styles';

export function Finances() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Container>
      <Content>
        <button type='button' onClick={handleOpenNewTransactionModal}>Nova transação</button>
        <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      </Content>
    </Container>
  )
}
