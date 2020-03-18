import React from "react";

import ArticleCard from "../common/AriticleCard";
import Pagination from "../common/Pagination";

import { config } from "../../constants";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: null
    };
  }

  componentDidMount() {
    fetch(`${config.url.API_URL}/articles?limit=10&offset=0`)
      .then(res => res.json())
      .then(({ articles }) => {
        this.setState({ articles });
      });
  }

  render() {
    const articles = this.state.articles;

    return (
      <>
        {!articles ? (
          <progress
            className="progress is-small is-primary"
            max="100"
          ></progress>
        ) : (
          articles.map(article => {
            return (
              <ul>
                <ArticleCard article={article} />
              </ul>
            );
          })
        )}
        {/* <Pagination /> */}
      </>
    );
  }
}

export default Main;
