import React from "react";

const Hero = props => {
  return (
    <section className="hero is-info">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">{props.title}</h1>
          <h2 className="subtitle">{props.author.username}</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
