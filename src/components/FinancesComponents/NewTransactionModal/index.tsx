import { useState, useRef, useCallback } from 'react';
import Modal from 'react-modal';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiX } from 'react-icons/fi'
import * as Yup from 'yup';
import { toast } from 'react-toastify'

import { useTransactions } from 'hooks/TransactionsContext';
import getValidationErrors from 'utils/getValidationErrors';

import incomeImg from 'assets/Icons/income.svg';
import outcomeImg from 'assets/Icons/outcome.svg';
import { Input } from 'components/GlobalComponents/Input';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface TransactionFormData {
  title: string;
  amount: number;
  category: string;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const formRef = useRef<FormHandles>(null);
  const { createTransaction } = useTransactions();

  const [type, setType] = useState('deposit');

  const handleSubmit = useCallback(
    async (data: TransactionFormData, { reset }: any) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string()
            .min(3, 'No mínimo 3 caracteres')
            .required('Título obrigatório'),
          amount: Yup.number()
            .moreThan(0, 'Valor deve ser maior que 0')
            .positive('Valor dever ser positivo')
            .required('Valor obrigatório'),
          category: Yup.string()
            .min(3, 'No mínimo 3 caracteres')
            .required('Título obrigatório'),
        });

        await schema.validate(data, { abortEarly: false })

        await createTransaction({
          title: data.title,
          amount: Number(data.amount),
          category: data.category,
          type
        });

        setType('deposit');
        onRequestClose();
        reset();
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error)

          formRef.current?.setErrors(errors)

          return;
        }

        toast.error('Erro ao cadastrar uma nova transação! 😕',
          { theme: 'colored' }
        );
      }
    }, [createTransaction, onRequestClose, type])

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
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Cadastrar Transação</h2>
          <Input
            name='title'
            placeholder='Ex.: Compras'
            labelName='Título'
          />

          <Input
            name='amount'
            type='float'
            placeholder='Ex.: R$ 99.99'
            labelName='Valor'
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
            placeholder='Ex.: Mercado'
            labelName='Categoria'
          />

          <button type='submit'>Cadastar</button>
        </Form>
      </Container>
    </Modal>
  )
}
