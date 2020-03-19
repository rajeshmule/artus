import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "./common/Header";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import Article from "./article";
import Profile from "./profile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  updateIsLoggedIn = value => {
    this.setState({ isLoggedIn: value });
  };

  render() {
    return (
      <div className="is-family-sans-serif">
        <Header isLoggedIn={this.state.isLoggedIn} />
        <Route exact path="/" component={Home} />
        <Route
          path="/login"
          render={() => <Login updateIsLoggedIn={this.updateIsLoggedIn} />}
        />
        <Route path="/signup" component={Signup} />
        <Route path="/article/:slug" component={Article} />
        <Route path="/@:username" component={Profile} />
      </div>
    );
  }
}

export default App;
