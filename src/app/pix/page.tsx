'use client';

import { getKeyTypes } from '@/features/transactions/api';
import {
  KeyType,
  TransactionFormType,
  TransactionKeyType,
} from '@/features/transactions/types';
import { createResource } from '@/lib/create-resource';
import { Suspense } from 'react';
import { useFormContext } from 'react-hook-form';

let keyTypesResource: ReturnType<typeof createResource<KeyType[]>> | null =
  null;

function getKeyTypesResource() {
  if (!keyTypesResource) {
    keyTypesResource = createResource<KeyType[]>(getKeyTypes());
  }
  return keyTypesResource;
}

function KeyTypesOptions() {
  const keyTypesData = getKeyTypesResource().read();

  const {
    watch,
    register,
    setValue,
    resetField,
    formState: { errors },
  } = useFormContext<TransactionFormType>();

  const keyType = watch('keyType');
  register('keyType', { required: 'Selecione um tipo de chave' });

  const handleChange = (value: TransactionKeyType) => {
    setValue('keyType', value);
    resetField('key');
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {keyTypesData.map(({ name, value }) => {
          const selected = keyType === value;
          return (
            <label
              key={value}
              className={`card border cursor-pointer transition-all ${
                selected
                  ? 'border-primary bg-primary/10 ring-1 ring-primary'
                  : 'border-base-300 hover:border-primary/50'
              }`}
              onClick={() => handleChange(value)}
            >
              <div className="card-body flex flex-row justify-between p-4 items-center text-center">
                <span
                  className={`font-medium ${
                    selected ? 'text-primary' : 'text-base-content'
                  }`}
                >
                  {name}
                </span>

                <input
                  type="radio"
                  value={value}
                  {...register('keyType')}
                  checked={selected}
                  onChange={() => handleChange(value)}
                  className="radio radio-primary"
                />
              </div>
            </label>
          );
        })}
      </div>

      {errors.keyType && (
        <p className="text-error text-sm">{errors.keyType.message}</p>
      )}
    </>
  );
}

export default function KeyTypeStep() {
  const LoadingOptions = (
    <div className="grid grid-cols-2 gap-4">
      <div className="skeleton h-16 w-full rounded-box"></div>
      <div className="skeleton h-16 w-full rounded-box"></div>
      <div className="skeleton h-16 w-full rounded-box"></div>
      <div className="skeleton h-16 w-full rounded-box"></div>
      <div className="skeleton h-16 w-full rounded-box"></div>
      <div className="skeleton h-16 w-full rounded-box"></div>
    </div>
  );

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Escolha o tipo da chave pix</h2>

      <Suspense fallback={LoadingOptions}>
        <KeyTypesOptions />
      </Suspense>
    </div>
  );
}
