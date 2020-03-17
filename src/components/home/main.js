import React from "react";

import ArticleCard from "../common/AriticleCard";

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
    const articles = this.state.articles;
    return (
      <>
        {!articles ? (
          <progress class="progress is-small is-primary" max="100"></progress>
        ) : (
          articles.map(article => {
            return (
              <ul>
                <ArticleCard article={article} />
              </ul>
            );
          })
        )}
      </>
    );
  }
}

export default Main;
