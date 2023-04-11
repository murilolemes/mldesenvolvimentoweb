import { useEffect, useState } from 'react';

import { useTransactions } from 'hooks/TransactionsContext'
import { getBalance } from 'utils/getBalance';
import { formatValue } from 'utils/formatValue';

import incomeImg from 'assets/Icons/income.svg';
import outcomeImg from 'assets/Icons/outcome.svg';
import totalImg from 'assets/Icons/total.svg';

import { Container } from './styles';

interface Balance {
  deposit: number;
  withdraw: number;
  total: number;
}

export function Summary() {
  const { transactions } = useTransactions();
  const [amount, setAmount] = useState<Balance>({} as Balance);

  useEffect(() => {
    const { deposit, withdraw, total } = getBalance(transactions)

    const balance = { deposit, withdraw, total }

    setAmount(balance)
  }, [transactions])

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong id='valueDeposit'>{formatValue(amount.deposit)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong id='valueWithdraw'>- {formatValue(amount.withdraw)}</strong>
      </div>
      <div className={amount.total > 0 ? 'positive' : amount.total < 0 ? 'negative' : ''}>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatValue(amount.total)}</strong>
      </div>
    </Container >
  )
}
