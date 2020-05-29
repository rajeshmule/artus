import React, { useRef } from "react";

import { config } from "../../constants";

const Signup = props => {
  let username = useRef(null);
  let email = useRef(null);
  let password = useRef(null);

  function handleSignup() {
    fetch(`${config.url.API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value
        }
      })
    })
      .then(res => res.json())
      .then(errors => console.log(errors))
      .then(user => props.history.push("/login"));
  }
  return (
    <div className="container">
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          <h1 className="title is-4 has-text-centered">Signup</h1>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="username"
                placeholder="Username"
                ref={username}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="Email"
                ref={email}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
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
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="has-text-right">
            <button className="button is-primary" onClick={handleSignup}>
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
