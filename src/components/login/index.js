import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          <h1 className="title is-4 has-text-centered">Login</h1>
          <form>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Email" />
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
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="has-text-right">
              <button class="button is-primary">login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
