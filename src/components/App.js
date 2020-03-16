import React from "react";
import { Route } from "react-router-dom";

import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import Header from "./common/Header";

function App() {
  return (
    <div className="is-family-sans-serif">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </div>
  );
}

export default App;
