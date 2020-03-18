import React from "react";

const Hero = props => {
  return (
    <section className="hero is-light ">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="level-item has-text-centered is-spaced">
            <figure className="image is-96x96">
              <img
                className="is-rounded"
                src={props.image}
                alt={props.username}
              />
            </figure>
          </div>
          <h1 className="title is-4 subtitle">{props.username}</h1>
          <div className="columns is-mobile is-centered">
            <div className="column is-three-quarters">
              <div className="is-pulled-right">
                <button className="button is-inverted is-outlined is-dark">
                  + Follow {props.username}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
