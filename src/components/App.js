import React from "react";
import { Route } from "react-router-dom";

import Header from "./common/Header";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import Article from "./article";
import Profile from "./profile";

function App() {
  return (
    <div className="is-family-sans-serif">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/article/:slug" component={Article} />
      <Route path="/@:username" component={Profile} />
    </div>
  );
}

export default App;
