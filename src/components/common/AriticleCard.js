import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = props => {
  const article = props.article;
  const author = article.author;

  return (
    <li>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  className="is-rounded"
                  src={article.author.image}
                  alt={article.author.username}
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{author.username}</p>
              <p className="subtitle is-6">
                <Link to={`/@${author.username}`}>{author.username}</Link>
              </p>
            </div>
            <div className="media-right">
              <button className="button">
                <span>{article.favoritesCount}</span>
                <span className="icon has-text-success">
                  <i className="fas fa-heart"></i>
                </span>
              </button>
            </div>
          </div>

          <Link to={`/article/${article.slug}`}>
            <div className="content">
              <h1 className="title">{article.title}</h1>
              <time>{new Date(article.createdAt).toDateString()}</time>

              <ul className="tags">
                {article.tagList.map(tag => {
                  return <li className="tag is-dark">{tag}</li>;
                })}
              </ul>
            </div>
          </Link>
        </div>
      </div>
      <br />
    </li>
  );
};

export default ArticleCard;
