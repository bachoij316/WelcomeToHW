import React, { Component } from "react";
import Malfoy from "./Images/Draco Malfoy.png";
import Vincent from "./Images/Vincent Crabbe.png";

class SlytherinInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let mode = this.props.mode;

    let MalfoyPic, VincentPic;
    let SlytherinP, MalfoyP, VincentP;
    if (mode === "Slytherin") {
      SlytherinP = (
        <div>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;<strong>Slytherin</strong> values ambition,
            cunning, leadership, and resourcefulness; the Sorting Hat said in
            Harry Potter and the Philosopher's Stone that Slytherins will do
            anything to get their way. The house mascot of Slytherin is the
            serpent, and the house colours are green and silver. Throughout the
            series, until the seventh book, the Head of House is Professor
            Severus Snape. Then, the previous Head of House Professor Horace
            Slughorn comes out of retirement, re-assuming authority after Snape
            becomes headmaster. The ghost of Slytherin house is The Bloody
            Baron.[26] According to Rowling, Slytherin corresponds roughly to
            the element of water. The founder of this house is Salazar
            Slytherin.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The Slytherin dormitories and common room
            are reached by speaking a password to a patch of bare stone wall in
            the dungeons, which causes a hidden door to open. The Slytherin
            common room is a long, low, dungeon-style room, under the Hogwarts
            Lake, furnished with green lamps and carved armchairs. The room is
            described in the second book as having a greenish glow.
          </p>
        </div>
      );
      MalfoyPic = (
        <button
          onClick={function (e) {
            e.preventDefault();
            this.props.changeCharacter("Malfoy");
          }.bind(this)}
        >
          <img src={Malfoy} alt="Malpoy" width="50" height="50" />
        </button>
      );
      VincentPic = (
        <button
          onClick={function (e) {
            e.preventDefault();
            this.props.changeCharacter("Vincent");
          }.bind(this)}
        >
          <img src={Vincent} alt="Vincent" width="50" height="50" />
        </button>
      );

      if (this.props.character === "Malfoy") {
        MalfoyP = (
          <p>
            Malfoy was a British pure-blood wizard and the only son of Lucius
            and Narcissa Malfoy (née Black). The son of a Death Eater, Draco was
            raised to strongly believe in the importance of blood purity. He
            attended Hogwarts School of Witchcraft and Wizardry from 1991-1998
            and was sorted into Slytherin House. During his years at Hogwarts,
            he became friends with Vincent Crabbe, Gregory Goyle, Pansy
            Parkinson, and other fellow Slytherins, but he quickly developed a
            rivalry with Harry Potter.
          </p>
        );
      } else if (this.props.character === "Vincent") {
        VincentP = (
          <p>
            Vincent Crabbe was also a student at Hogwarts and a member of
            Slytherin House. Crabbe and Gregory Goyle were rarely seen without
            their ringleader Draco Malfoy. While Dolores Umbridge was
            Headmistress, he joined the Inquisitorial Squad with Goyle and
            Malfoy. In his last year at Hogwarts, he became a Dark Wizard. He
            learned to cast powerful dark curses, such as the Killing and the
            Cruciatus Curses. He accidentally killed himself using Fiendfyre on
            2 May 1998 in the Room of Requirement, during the Battle of
            Hogwarts.
          </p>
        );
      }
    }

    return (
      <div>
        <div>{SlytherinP}</div>
        <div>
          {MalfoyPic}
          {VincentPic}
        </div>
        <div>
          {MalfoyP}
          {VincentP}
        </div>
      </div>
    );
  }
}

export default SlytherinInfo;
//cite https://en.wikipedia.org/wiki/Hogwarts#Gryffindor
