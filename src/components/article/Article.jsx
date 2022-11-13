import React from 'react';
import "./article.css";

const Article = ( { imgUrl, date, title } ) => {
  return (
    <div className="vador__blog-container_article">
      <div className="vador__blog-container_article-image">
        <img src={imgUrl} alt="imgUrl" />
      </div>
      <div className="vador__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>read more(just getting some xp)</p>
      </div>
    </div>
  )
}

export default Article
