import React, { useCallback, useEffect, useState } from "react";

import API from '../../api/api';
import NewsItem from "./components/NewsItem";

import "./News.scss";


const News = () => {

  const [news, setNews] = useState({
    panding: true,
    list: [],
    page: 0,
  })

  const onError = useCallback((err) => {
    console.dir(err);
    setNews(prev => ({...prev, pending: false}));
  }, [])

  useEffect(() => {
    setNews(({
      panding: true,
      list: [],
      page: 0,
    }))

    API.getNews()
      .then((res) => {
        setNews(prevState => ({
        ...prevState,
        pending: false,
        list: res.data.data,
        page: res.data.has_more_pages
          ? prevState.page + 1
          : 'max-page',
        }))
      })
      .catch((error) => {
        console.dir(error)
        console.log(error)
      });
  }, [onError])

  return (
    <section className="news">
      <div className="container">
        <ul className="news__list">
          {
            news.list.map(data => (
              <NewsItem 
                key = {data.id}
                newsData = {data}
              />
            ))
          }
        </ul>

        <div className="news__loader">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </section>
  )
};

export default News;
