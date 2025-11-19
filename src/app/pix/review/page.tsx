'use client';

import { getDestinatary } from '@/features/transactions/api';
import {
  formatCurrency,
  formatKeyType,
} from '@/features/transactions/lib/format';
import {
  TransactionFormType,
  TransactionKeyType,
} from '@/features/transactions/types';
import { Suspense, use } from 'react';
import { useFormContext } from 'react-hook-form';

let destinataryPromise = getDestinatary();

export function ReviewStepContent() {
  const { watch } = useFormContext<TransactionFormType>();

  const key = watch('key');
  const keyType = watch('keyType');
  const amount = watch('amount');

  const data = use(destinataryPromise);

  const Item = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between text-sm">
      <span className="font-semibold">{label}</span>
      <span className="text-gray-700">{value}</span>
    </div>
  );

  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">
          JS
        </div>
        <div>
          <p className="font-bold text-gray-800">{data.recipientInfo.name}</p>
          <p className="text-sm text-gray-500">
            CPF: {data.recipientInfo.document}
          </p>
        </div>
      </div>

      <div className="divider my-2"></div>

      <div className="flex flex-col gap-1 mb-2">
        <Item
          label="Banco"
          value={`${data.bankDetails.bank} • ${data.bankDetails.bankCode}`}
        />
        <Item label="Agência" value={data.bankDetails.agency} />
        <Item label="Conta" value={data.bankDetails.account} />
        <Item label="Tipo" value={data.bankDetails.accountType} />
      </div>

      <div className="divider my-2"></div>

      <div className="mb-4">
        <h3 className="text-md font-semibold mb-2">Chave PIX</h3>
        <Item
          label={formatKeyType(keyType as TransactionKeyType)}
          value={key}
        />
      </div>

      {amount && (
        <div className="border rounded-lg p-4 mt-4 bg-indigo-50">
          <p className="text-sm text-gray-500">Valor a ser transferido</p>
          <p className="text-2xl font-bold text-gray-900">
            {formatCurrency(amount)}
          </p>
        </div>
      )}
    </>
  );
}

export default function ReviewStep() {
  const LoadingDesinatary = (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="skeleton h-[250px] w-full rounded-box"></div>
      <div className="skeleton h-[100px] w-full rounded-box"></div>
    </div>
  );

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-3">Confirmar destinatário</h2>
      <Suspense fallback={LoadingDesinatary}>
        <ReviewStepContent />
      </Suspense>
    </div>
  );
}
