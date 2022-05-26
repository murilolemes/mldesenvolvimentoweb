import { useContext } from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { TransactionsContext } from '../../context/TransactionsContext';
import { formatValue } from '../../utils/formatValue';

import { Container } from './styles';

export function TransactionsTable() {
  const { transactions, deleteTransaction } = useContext(TransactionsContext);

  async function handleDelete(id: Number) {
    await deleteTransaction(id);
  }

  return (
    <Container>
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
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
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
    </Container>
  )
}
