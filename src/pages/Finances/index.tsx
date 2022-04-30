import { useState } from 'react';

import { NewTransactionModal } from '../../components/NewTransactionModal';
import { Summary } from '../../components/Summary';
import { TransactionsProvider } from '../../context/TransactionsContext';
import { TransactionsTable } from '../../components/TransactionsTable';
import '../../services/server';

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
    <TransactionsProvider>
      <Container>
        <Content>
          <button type='button' onClick={handleOpenNewTransactionModal}>Cadastrar nova transação</button>
          <Summary />
          <TransactionsTable />
          <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
        </Content>
      </Container>
    </TransactionsProvider>
  )
}
