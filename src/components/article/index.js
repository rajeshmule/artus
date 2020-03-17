import React from "react";
import Hero from "./hero";

class Article extends React.Component {
  state = {
    article: null
  };

  componentDidMount() {
    const slug = this.props.match.params.slug;
    fetch(`https://conduit.productionready.io/api/articles/${slug}`)
      .then(res => res.json())
      .then(({ article }) => {
        this.setState({ article });
      });
  }

  render() {
    const article = this.state.article;
    console.log(article);

    return (
      <>
        {!article ? (
          <progress className="progress is-small is-info" max="100"></progress>
        ) : (
          <div>
            <Hero title={article.title} author={article.author} />
            <div className="container">
              <div className="section">{article.body}</div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Article;
