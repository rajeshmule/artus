import React from "react";

class Tags extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: null
    };
  }

  componentDidMount() {
    fetch("https://conduit.productionready.io/api/tags")
      .then(res => res.json())
      .then(({ tags }) => {
        this.setState({ tags });
      });
  }

  render() {
    const tags = this.state.tags;
    return (
      <div className="notification">
        <h1 className="title is-5">Tags</h1>
        <div className="tags">
          {!tags ? (
            <progress
              className="progress is-small is-primary"
              max="100"
            ></progress>
          ) : (
            tags.map(tag => {
              return <span className="tag is-dark">{tag}</span>;
            })
          )}
        </div>
      </div>
    );
  }
}

export default Tags;
