import React, { Component } from "react";
import Profile from "./profile";
import mbappe from "./images/mbappe.jpg";

class App extends Component {
  state = {
    person: {
      fullName: "Kylian Mbappé",
      bio: "Footballeur français, attaquant du PSG et capitaine de l'équipe de France.",
      imgSrc: mbappe,
      profession: "Footballeur professionnel"
    },
    shows: true,
    timer: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prev) => ({ timer: prev.timer + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prev) => ({ shows: !prev.shows }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>⚽ Debug React Developer Tools</h1>
        <button onClick={this.toggleShow}>
          {this.state.shows ? "Masquer le profil" : "Afficher le profil"}
        </button>

        {this.state.shows && <Profile person={this.state.person} />}

        <p style={{ marginTop: "20px", color: "gray" }}>
          Temps écoulé depuis le montage : {this.state.timer} secondes
        </p>
      </div>
    );
  }
}

export default App;
