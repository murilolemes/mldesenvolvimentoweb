import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { TransactionsProvider } from '../../hooks/TransactionsContext';

import { NewTransactionModal } from '../../components/NewTransactionModal';
import { Summary } from '../../components/Summary';
import { TransactionsTable } from '../../components/TransactionsTable';

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
          <div id='divButton'>
            <ButtonNewTransaction type='button' onClick={handleOpenNewTransactionModal}>
              <FiPlus size={24} />
              Cadastrar nova transação
            </ButtonNewTransaction>
          </div>
          <Summary />
          <TransactionsTable />
          <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
        </Content>
      </Container>
    </TransactionsProvider>
  )
}
