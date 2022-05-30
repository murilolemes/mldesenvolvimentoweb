import { useState } from 'react';
import { TransactionsProvider } from '../../hooks/TransactionsContext';

import { NewTransactionModal } from '../../components/NewTransactionModal';
import { Summary } from '../../components/Summary';
import { TransactionsTable } from '../../components/TransactionsTable';
import '../../services/server';

import { Container, Content, ButtonNewTransaction } from './styles';

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
          <ButtonNewTransaction type='button' onClick={handleOpenNewTransactionModal}>Cadastrar nova transação</ButtonNewTransaction>
          <Summary />
          <TransactionsTable />
          <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
        </Content>
      </Container>
    </TransactionsProvider>
  )
}
