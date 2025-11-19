export type KeyType = { name: string; value: TransactionKeyType };

export interface TransactionType {
  id: string;
  description: string;
  class: TransactionClass;
  amount: number;
  createdAt: Date;
  completedAt?: Date;
  status?: TransactionStatus;
  pixKeyType?: TransactionKeyType;
  key: string;
}

export enum TransactionStatus {
  Processing = 'processing',
  Completed = 'completed',
  Failed = 'failed',
  Refunded = 'refunded',
  Scheduled = 'scheduled',
}

export enum TransactionKeyType {
  Email = 'email',
  Phone = 'phone',
  CPF = 'cpf',
  CNPJ = 'cnpj',
  Random = 'random',
}

export enum TransactionClass {
  Pix = 'pix',
  Debit = 'debit',
  Credit = 'credit',
  Transfer = 'transfer',
  Deposit = 'deposit',
}
