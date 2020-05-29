import React, { useRef } from "react";

import { config } from "../../constants";

const Editor = () => {
  let title = useRef(null);
  let description = useRef(null);
  let body = useRef(null);
  let tagList = useRef(null);

  function handleSubmit() {
    fetch(`${config.url.API_URL}/articles`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        article: {
          title: title.current.value,
          description: description.current.value,
          body: body.current.value
        }
      })
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }
  return (
    <div className="container">
      <div className="columns is-mobile">
        <div className="column is-10 is-offset-1">
          <h1 className="title is-4 has-text-centered">New Article</h1>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="Article Title"
                ref={title}
              />
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="What's this article about?"
                ref={description}
              />
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <textarea
                class="textarea"
                type="text"
                placeholder="Write your article"
                ref={body}
              ></textarea>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Enter tags"
                ref={tagList}
              />
            </p>
          </div>
          <div className="has-text-right">
            <button className="button is-primary" onClick={handleSubmit}>
              Publish Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
