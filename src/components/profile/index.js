import React from "react";
import Hero from "./hero";

import { config } from "../../constants";

class Profile extends React.Component {
  state = {
    profile: null
  };

  componentDidMount() {
    const username = this.props.match.params.username;
    fetch(`${config.url.API_URL}/profiles/${username}`)
      .then(res => res.json())
      .then(({ profile }) => {
        this.setState({ profile });
      });
  }

  render() {
    const profile = this.state.profile;
    console.log(profile);

    return (
      <>
        {!profile ? (
          <progress
            className="progress is-small is-grey-light"
            max="100"
          ></progress>
        ) : (
          <div>
            <Hero username={profile.username} image={profile.image} />
            <div className="container">
              <div className="section"></div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Profile;
