import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid'

interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

interface TransactionsProviderProps {
  children: ReactNode
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  deleteTransaction: (id: string) => Promise<void>;
}

const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const storageTransactions = localStorage.getItem('@Transaction:transaction');

    if (storageTransactions) {
      return JSON.parse(storageTransactions);
    }

    return []
  });

  useEffect(() => {
    const response = localStorage.getItem('@Transaction:transaction');
    if (response) {
      setTransactions(JSON.parse(response));
    }
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const updateTransactions = [...transactions];

    const newTransaction = {
      id: uuidv4(),
      ...transactionInput,
      createdAt: new Date()
    }

    updateTransactions.push(newTransaction);

    setTransactions(updateTransactions);

    localStorage.setItem('@Transaction:transaction', JSON.stringify(updateTransactions));
    toast.success('Transação cadastrada com sucesso!')
  }

  async function deleteTransaction(id: string) {
    const updateTransactions = [...transactions];

    const transactionIndex = updateTransactions.findIndex(transaction => transaction.id === id);

    updateTransactions.splice(transactionIndex, 1);

    setTransactions(updateTransactions);

    localStorage.setItem('@Transaction:transaction', JSON.stringify(updateTransactions));
    toast.success('Transação removida com sucesso!')
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction, deleteTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
