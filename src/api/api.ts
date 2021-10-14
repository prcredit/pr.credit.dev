import axios from 'axios';


const getInfo = () => {
  return axios.get(`/info`);
}

const getTransactions = (page: number) => {
  return axios.get(`/transactions/last_transactions/${page}`);
}

const getBlock = (block: string | undefined) => {
  return axios.get(`/blocks/block?hash=${block}`);
}

const getTransaction = (hash: string | undefined) => {
  return axios.get(`/transactions/transaction?hash=${hash}`);
}

const getAddress = (address: string | undefined, page: number) => {
  return axios.get(`/address/${address}/${page}`);
}

export default {
  getInfo,
  getTransactions,
  getBlock,
  getTransaction,
  getAddress,
}