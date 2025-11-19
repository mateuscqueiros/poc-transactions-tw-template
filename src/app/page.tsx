'use client';

import { TransactionList } from '@/features/transactions/components/transaction-list';
import { formatCurrency } from '@/features/transactions/lib/format';
import { useTransactions } from '@/features/transactions/providers/transaction-provider';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const { data: transactions } = useTransactions();

  const total = transactions.reduce((acc, curr) => acc + curr.amount, 0);
  const lastTransaction =
    transactions.length > 0
      ? transactions.reduce((acc, curr) => {
          dayjs(acc.completedAt).isAfter(dayjs(curr.completedAt)) && acc;
          return acc;
        })
      : null;

  return (
    <div className="p-6 flex flex-col justify-between h-full">
      <div>
        <h1 className="text-2xl font-bold mb-4">Transações</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="card bg-base-300 p-4">
            <h3 className="font-semibold">Saldo disponível</h3>
            <p className="text-xl text-teal-600">
              {formatCurrency(total, 'pt-BR')}
            </p>
          </div>
          <div className="card bg-base-300 p-4">
            <h3 className="font-semibold">Última transação</h3>
            <p className="text-sm text-gray-500">
              Última transação em{' '}
              {lastTransaction
                ? dayjs(lastTransaction.completedAt).format('DD/MM [às] HH:mm')
                : 'Não há transações ainda'}
            </p>
          </div>
        </div>
      </div>

      <button
        className="btn btn-primary btn-lg mt-6"
        onClick={() => router.push('/pix')}
      >
        Fazer Novo Pix
        <i className="ri-arrow-right-line"></i>
      </button>
      <div className="py-6">
        <TransactionList data={transactions} />
      </div>
    </div>
  );
}
