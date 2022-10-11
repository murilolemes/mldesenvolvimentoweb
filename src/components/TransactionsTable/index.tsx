import { useCallback, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { useTransactions } from '../../hooks/TransactionsContext';
import { formatValue } from '../../utils/formatValue';

import { FiTrash2 } from 'react-icons/fi';

import { Container, Content, DivPages } from './styles';

interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

export function TransactionsTable() {
  const { transactions, deleteTransaction } = useTransactions();
  const [page, setPage] = useState(0);
  const rowsPerPage = 6;

  async function handleDelete(id: string) {
    await deleteTransaction(id);
  }

  const handleNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const handlePreviousPage = useCallback(() => {
    setPage(page - 1);
  }, [page]);

  const firstLinePage = page === 0 ? 1 : page * rowsPerPage + 1;

  const calcLastLinePage = page === 0 ? 6 : page * rowsPerPage + rowsPerPage;

  const restPage = transactions.length % rowsPerPage;

  const lastPage = transactions.length / rowsPerPage;

  const lastLinePage =
    lastPage < page + 1 ? firstLinePage + restPage - 1 : calcLastLinePage;

  return (
    <Container
      style={
        transactions.length <= 0 ? { display: 'none' } : { display: 'initial' }
      }
    >
      <Content>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th id='valueId'>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {transactions
              .slice(page * rowsPerPage === 0 ? page * 0 : page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {transaction.type === 'withdraw' ? '- ' : ''}
                    {formatValue(transaction.amount)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {new Intl.DateTimeFormat('pt-BR')
                      .format(new Date(transaction.createdAt))
                    }
                  </td>
                  <td id="trash">
                    <button
                      type='button'
                      onClick={() => handleDelete(transaction.id)}
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </Content>
      <DivPages
        style={
          transactions.length <= 6 ? { display: 'none' } : { display: 'flex' }
        }
      >
        <p>{`${firstLinePage} - ${lastLinePage} de ${transactions.length}`}</p>
        <button
          type="button"
          disabled={page === 0}
          onClick={handlePreviousPage}
        >
          <FiChevronLeft />
        </button>
        <p>{page + 1}</p>
        <button
          type="button"
          disabled={
            lastPage < page + 1 || lastLinePage === transactions.length
          }
          onClick={handleNextPage}
        >
          <FiChevronRight />
        </button>
      </DivPages>
    </Container >
  )
}
