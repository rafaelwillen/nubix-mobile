import axios from '../config';
import { CreateTransactionRequestType } from './type';

export async function getAllTransactions(phoneNumber: string) {
  try {
    const response = await axios.get(`/account/transaction/${phoneNumber}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createTransaction(
  accountNumber: string,
  data: CreateTransactionRequestType
) {
  try {
    const response = await axios.post(`/account/transaction/${accountNumber}`, {
      ...data,
      reference: '',
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
