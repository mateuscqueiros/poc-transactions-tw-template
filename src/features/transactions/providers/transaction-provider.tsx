"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { TransactionType } from "../types";
import { getTransactions } from "../api";

interface TransactionsContextType {
  data: TransactionType[];
  isLoading: boolean;
  addTransaction: (transaction: TransactionType) => void;
  removeTransaction: (id: string) => void;
}

export const TransactionsContext = createContext<
  TransactionsContextType | undefined
>(undefined);

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTransactions()
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => {
        console.error("Falha fatal no carregamento inicial:", error);
        setTransactions([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  function addTransaction(transaction: TransactionType) {
    setTransactions((prev) => [transaction, ...prev]);
  }

  function removeTransaction(id: string) {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <TransactionsContext.Provider
      value={{
        data: transactions,
        isLoading,
        addTransaction,
        removeTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error(
      "useTransactions must be used within a TransactionsProvider",
    );
  }
  return context;
}
