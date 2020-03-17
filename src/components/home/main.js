import React from "react";
import { Link } from "react-router-dom";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: null
    };
  }

  componentDidMount() {
    fetch("https://conduit.productionready.io/api/articles?limit=10&offset=0")
      .then(res => res.json())
      .then(({ articles }) => {
        this.setState({ articles });
      });
  }

  render() {
    return (
      <ul>
        {this.state.articles &&
          this.state.articles.map(article => {
            return (
              <li>
                <Link to={`/article/${article.slug}`}>{article.title}</Link>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default Main;
