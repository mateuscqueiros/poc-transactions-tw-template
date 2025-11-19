import { api } from '@/lib/api';
import { KeyType, TransactionType } from '../types';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getKeyTypes(): Promise<KeyType[]> {
  const requestPromise = api.get('/key-types');
  const delayPromise = delay(1500);
  return Promise.all([requestPromise, delayPromise])
    .then(([response]) => {
      return response.data;
    })
    .catch((error) => {
      console.error('Erro ao buscar tipos de chaves:', error);
      return error;
    });
}

export async function getTransactions() {
  return api.get<TransactionType[]>('/transactions').then((response) => {
    return response.data;
  });
}

export async function getDestinatary() {
  const requestPromise = api.get('/destinatary');
  const delayPromise = delay(3000);
  return Promise.all([requestPromise, delayPromise])
    .then(([response]) => {
      return response.data;
    })
    .catch((error) => {
      console.error('Erro ao buscar destinatário:', error);
    });
}
