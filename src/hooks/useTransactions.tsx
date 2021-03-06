import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/Api';


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAT: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAT'>

interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
    
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    );

export function TransactionsProvider ({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
  
    useEffect(()=> {
        api.get('transaction')
        .then(response => setTransactions(response.data.transactions))
    },[]);

    async function createTransaction (transactionInput: TransactionInput) {
       const response = await api.post('/transaction', {
           ...transactionInput,
           createdAT: new Date(),
       });

       const { transaction } = response.data;

       setTransactions([
           ...transactions,
           transaction,
       ]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions () {
    const Context = useContext(TransactionsContext);

    return Context;
}