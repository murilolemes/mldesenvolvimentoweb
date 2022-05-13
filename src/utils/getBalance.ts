interface transaction {
  amount: number;
  type: string;
}

export function getBalance(transactions: transaction[]) {
  const balance = transactions.reduce((acc, transaction) => {
    const transactionDeposit = transaction.amount;
    const transactionWithdraw = transaction.amount;

    switch (transaction.type) {
      case 'deposit':
        acc.deposit += transactionDeposit;
        break;
      case 'withdraw':
        acc.withdraw += transactionWithdraw;
        break;
      default:
        break;
    }
    return acc;
  },
    {
      deposit: 0,
      withdraw: 0,
      total: 0
    }
  )
  balance.total = balance.deposit - balance.withdraw;
  return balance
}
