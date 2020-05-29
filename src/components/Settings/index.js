import React, { useRef } from "react";

import { config } from "../../constants";

const Settings = () => {
  let image = useRef(null);
  let username = useRef(null);
  let bio = useRef(null);
  let email = useRef(null);
  let password = useRef(null);

  function handleSubmit() {
    fetch(`${config.url.API_URL}/user`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        user: {
          image: image.current.value,
          username: username.current.value,
          bio: bio.current.value,
          email: email.current.value,
          password: password.current.value
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
          <h1 className="title is-4 has-text-centered">Your Settings</h1>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="url"
                placeholder="URL of profile picture"
                ref={image}
              />
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="Username"
                ref={username}
              />
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <textarea
                class="textarea"
                type="Short bio about you"
                placeholder="bio"
                ref={bio}
              ></textarea>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="email"
                placeholder="Email"
                ref={email}
              />
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                placeholder="Password"
                ref={password}
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

export default Settings;
