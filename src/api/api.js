import axios from 'axios';

const getNews = () => {
  return axios.get(`get-news/ru`);
}

export default {
  getNews,
}