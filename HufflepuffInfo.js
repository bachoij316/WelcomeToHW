import React, { Component } from "react";
import Cedric from "./Images/Cedric Diggory.png";

class HufflepuffInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let mode = this.props.mode;

    let CedricPic;
    let HufflepuffP, CedricP;
    if (mode === "Hufflepuff") {
      HufflepuffP = (
        <div>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;<strong>Hufflepuff</strong> values hard
            work, patience, justice, and loyalty. The house mascot is the
            badger, and canary yellow and black (or golden yellow and graphite
            in the Fantastic Beasts films) are its colours. During the books,
            the Head of this house is the Herbology Professor Pomona Sprout, and
            the house ghost is the Fat Friar. According to Rowling, Hufflepuff
            corresponds roughly to the element of earth. The founder of this
            house is Helga Hufflepuff.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The entrance to the Hufflepuff dormitories
            and common room entrance is concealed in a pile of large barrels in
            an alcove in the corridor that holds the kitchen. To enter, one must
            tap the barrel two from the bottom in the middle of the second row
            in the rhythm of "Helga Hufflepuff". Unlike any other house, the
            Hufflepuff common room has a repelling device that douses the
            illegal entrant in vinegar if the wrong lid is tapped or the rhythm
            is wrong. The Hufflepuff common room is filled with yellow hangings
            and fat armchairs and it has little tunnels leading to the
            dormitories, all of which have perfectly round doors, like barrel
            tops.
          </p>
        </div>
      );
      CedricPic = (
        <button
          onClick={function (e) {
            e.preventDefault();
            this.props.changeCharacter("Cedric");
          }.bind(this)}
        >
          <img src={Cedric} alt="Cedric" width="50" height="50" />
        </button>
      );
      if (this.props.character === "Cedric") {
        CedricP = (
          <p>
            Cedric was a British wizard who was the son of Amos Diggory and his
            wife. He started attending Hogwarts School of Witchcraft and
            Wizardry in 1989, and was sorted into the Hufflepuff House. During
            his time at school he was a prefect and captained the Hufflepuff
            Quidditch team, playing as Seeker. In his sixth year Cedric put his
            name forward to compete in the Triwizard Tournament.
          </p>
        );
      }
    }

    return (
      <div>
        <div>{HufflepuffP}</div>
        <div>{CedricPic}</div>
        <div>{CedricP}</div>
      </div>
    );
  }
}

export default HufflepuffInfo;
//cite https://en.wikipedia.org/wiki/Hogwarts#Gryffindor
