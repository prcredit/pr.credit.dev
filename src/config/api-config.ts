import axios from 'axios';

import { Env } from '../interfaces/interfaces';

const host = window.location.hostname;
const prodHosts = ['explorer.sn-token.io'];
const releaseHosts = ['explorer-release.ourstage.app'];

export const ENV: Env = (() => {
  if (releaseHosts.includes(host)) {
    return 'RELEASE';
  }
  return prodHosts.includes(host)
    ? 'PROD'
    : 'DEV';
})();

const baseURL = {
  PROD: {
    api: 'https://snode-api.sn-token.io',
  },
  RELEASE: {
    api: 'https://snode-release.ourstage.app',
  },
  DEV: {
    api: 'https://snode.ourstage.app',
    // api: 'https://snode-api.sn-token.io', // for test prod api
  },
}

axios.defaults.baseURL = baseURL[ENV].api;

axios.interceptors.response.use(
  response => { // Do something with response data
    return Promise.resolve(response);
  },
  error => { // Do something with response error
    return Promise.reject(error);
  });
