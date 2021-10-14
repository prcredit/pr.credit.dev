export type Env = 'PROD' | 'DEV' | 'RELEASE';

export interface IInfo {
  blocks: number;
  price: number;
  transactions: number;
  wallets: number;
}

export interface IMatchParams {
  id: string;
}

export interface ITransaction {
  addressFrom: string;
  addressTo: string;
  amountFrom: number;
  amountTo: number;
  fee: number;
  block: number;
  from: string;
  hash: string;
  timestamp: number;
  pending?: boolean;
  rejected?: boolean;
  status?: 'processing' | 'confirmed' | 'rejected';
}
