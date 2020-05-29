import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./common/Header";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Article from "./Article";
import Profile from "./Profile";
import Editor from "./Editor";
import Settings from "./Settings";

import { config } from "../constants";

function Auth() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/editor" component={Editor} />
      <Route path="/settings" component={Settings} />
      <Route path="/article/:slug" component={Article} />
      <Route path="/@:username" component={Profile} />
      <Route path="*" component={() => <h1>404</h1>} />
    </Switch>
  );
}

function NoAuth(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/login"
        render={() => <Login userIsLoggedIn={props.userIsLoggedIn} />}
      />
      <Route path="/signup" component={Signup} />
      <Route path="/article/:slug" component={Article} />
      <Route path="/@:username" component={Profile} />
      <Route path="*" component={() => <h1>404</h1>} />
    </Switch>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  userIsLoggedIn = value => {
    this.setState({ isLoggedIn: value });
  };

  componentDidMount() {
    if (localStorage["token"]) {
      fetch(`${config.url.API_URL}/user`, {
        method: "GET",
        headers: {
          authorization: `Token ${localStorage["token"]}`
        }
      })
        .then(res => res.json())
        .then(user => {
          this.setState({ isLoggedIn: true });
        })
        .catch(err => {
          this.setState({ isLoggedIn: false });
        });
    }
  }

  render() {
    return (
      <div className="is-family-sans-serif">
        <Header isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Auth />
        ) : (
          <NoAuth userIsLoggedIn={this.userIsLoggedIn} />
        )}
      </div>
    );
  }
}

export default App;
