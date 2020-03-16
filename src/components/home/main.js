import React from "react";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: null
    };
  }

  componentDidMount() {
    console.log("main cdm");

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
            return <li>{article.title}</li>;
          })}
      </ul>
    );
  }
}

export default Main;
