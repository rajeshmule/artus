import React from "react";
import Hero from "./hero";
import Main from "./main";

const Home = () => {
  return (
    <>
      <Hero />
      <div class="container">
        <div class="columns">
          <div class="column is-three-quarters">
            {" "}
            <Main />
          </div>
          <div class="column">tags</div>
        </div>
      </div>
    </>
  );
};

export default Home;
