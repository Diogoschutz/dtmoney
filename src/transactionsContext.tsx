import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/Api';


interface Transaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAT: string,
}

interface TransactionProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider ({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
  
    useEffect(()=> {
        api.get('transaction')
        .then(response => setTransactions(response.data.transactions))
    },[]);

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    );
}
