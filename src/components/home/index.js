import React from "react";
import Hero from "./hero";
import Main from "./main";
import Tags from "./tags";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-three-quarters">
              <Main />
            </div>
            <div className="column">
              <Tags />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
