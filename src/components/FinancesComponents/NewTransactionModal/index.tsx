import { useState } from 'react';
import Modal from 'react-modal';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import { FiX } from 'react-icons/fi'

import { useTransactions } from 'hooks/TransactionsContext';

import incomeImg from 'assets/income.svg';
import outcomeImg from 'assets/outcome.svg';
import { Input } from 'components/GlobalComponents/Input';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(data: any, { reset }: any) {
    try {
      const { title, amount, category } = data;
      await createTransaction({
        title,
        amount: Number(amount),
        category,
        type
      });

      setType('deposit');
      onRequestClose();
      reset();
    } catch (error) {
      toast.error('Erro ao cadastrar uma nova transação! 😕');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <FiX size={20} />
      </button>
      <Container>
        <Form onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar Transação</h2>

          <Input
            name='title'
            placeholder='Titulo'
          />

          <Input
            name='amount'
            type='number'
            placeholder='Valor'
          />
          <TransactionTypeContainer>
            <RadioBox
              type='button'
              onClick={() => { setType('deposit') }}
              isActive={type === 'deposit'}
              activeColor='green'
            >
              <img src={incomeImg} alt='Entrada' />
              <span>Entrada</span>
            </RadioBox>
            <RadioBox
              type='button'
              onClick={() => { setType('withdraw') }}
              isActive={type === 'withdraw'}
              activeColor='red'
            >
              <img src={outcomeImg} alt='Saída' />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <Input
            name='category'
            placeholder='Categoria'
          />
          <button type='submit'>Cadastar</button>
        </Form>
      </Container>
    </Modal>
  )
}
