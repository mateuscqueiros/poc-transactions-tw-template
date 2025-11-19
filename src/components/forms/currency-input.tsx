'use client';

import React from 'react';
import { IMaskInput } from 'react-imask';

interface CurrencyInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value'
  > {
  value?: string | number;
  onChange?: (value: number) => void;
}

export function CurrencyInput({
  value,
  onChange,
  className = '',
  ...props
}: CurrencyInputProps) {
  function handleAccept(val: string) {
    const digits = val.replace(/\D/g, '');
    const num = parseFloat(digits);
    onChange?.(isNaN(num) ? 0 : num);
  }

  return (
    <IMaskInput
      {...props}
      mask="R$ num"
      blocks={{
        num: {
          mask: Number,
          thousandsSeparator: '.',
          radix: ',',
          scale: 2,
          min: 0,
        },
      }}
      value={value ? value.toString() : ''}
      onAccept={handleAccept}
      unmask={false}
      className={`input input-bordered w-full ${className}`}
      placeholder="R$ 0,00"
    />
  );
}
