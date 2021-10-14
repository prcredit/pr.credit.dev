import React from "react";

const NewsItem = (props) => {
  const {
    date,
    title,
    text,
    img,
  } = props.newsData

  return (
    <li className="news__item">
      <div className="news__img-wrap">
        <img src={img} alt="Dolyna Ozer Image"/>
      </div>

      <div className="news__body">
        <h3 className="news__item-title">
          {title}
        </h3>

        <p className="news__item-text">
          {text}
        </p>

        <time className="news__date">
          {date}
        </time>
      </div>
    </li>
  )
};

export default NewsItem;
