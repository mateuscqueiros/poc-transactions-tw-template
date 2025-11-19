import { InputSchemaType } from '@/types/inputs';
import { TransactionKeyType } from '.';

export type TransactionFormType = {
  key: string;
  keyType: TransactionKeyType | null;
  amount: number;
  description: string;
};

export const inputSchema: InputSchemaType<TransactionKeyType> = {
  cpf: {
    label: 'CPF',
    placeholder: '000.000.000-00',
    mask: '000.000.000-00',
    validation: {
      required: 'Este campo é obrigatório',
      pattern: {
        value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
        message: 'CPF inválido',
      },
    },
  },
  cnpj: {
    label: 'CNPJ',
    placeholder: '00.000.000/0000-00',
    mask: '00.000.000/0000-00',
    validation: {
      required: 'Este campo é obrigatório',
      pattern: {
        value: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
        message: 'CNPJ inválido',
      },
    },
  },
  phone: {
    label: 'Telefone',
    placeholder: '(99) 99999-9999',
    mask: '(00) 00000-0000',
    validation: {
      required: 'Este campo é obrigatório',
      pattern: {
        value: /^\(\d{2}\) \d{5}-\d{4}$/,
        message: 'Telefone inválido',
      },
    },
  },
  email: {
    label: 'E-mail',
    placeholder: 'exemplo@dominio.com',
    mask: '',
    validation: {
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'E-mail inválido',
      },
    },
  },
  random: {
    label: 'Chave aleatória',
    placeholder: 'Digite a chave aleatória',
    mask: '',
    validation: {
      minLength: {
        value: 8,
        message: 'A chave deve ter pelo menos 8 caracteres',
      },
    },
  },
};
