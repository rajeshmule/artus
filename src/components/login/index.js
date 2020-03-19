import React, { useRef } from "react";
import { withRouter } from "react-router-dom";

import { config } from "../../constants";

const Login = props => {
  let email = useRef(null);
  let password = useRef(null);

  function handleLogin() {
    fetch(`${config.url.API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        user: { email: email.current.value, password: password.current.value }
      })
    })
      .then(res => res.json())
      .then(user => {
        if (user.errors) {
          localStorage.setItem("isLoggedIn", false);
        } else {
          localStorage.setItem("isLoggedIn", true);
          props.history.push("/");
          props.updateIsLoggedIn(true);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div className="container">
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          <h1 className="title is-4 has-text-centered">Login</h1>

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
            <button className="button is-primary" onClick={handleLogin}>
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
