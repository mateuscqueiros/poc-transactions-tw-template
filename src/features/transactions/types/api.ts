import { TransactionType } from ".";

export type CreateTransactionType = Omit<TransactionType,
  'id'
  | 'createdAt'
  | 'completedAt'
  | 'status'
>;
