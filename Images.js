import React, { Component } from "react";

import Gryffindor from "./Images/Gryffindor.png";
import Hufflepuff from "./Images/Hufflepuff.png";
import Ravenclaw from "./Images/Ravenclaw.png";
import Slytherin from "./Images/Slytherin.png";

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let mode = this.props.mode;
    let Hogwarts;
    let _Gryffindor = (
      <a
        href="./GryffindorInfo"
        onClick={function (e) {
          e.preventDefault();
          this.props.changeMode("Gryffindor");
          this.props.resetCharacter("");
        }.bind(this)}
      >
        <img src={Gryffindor} alt="Gryffindor" width="100" height="100" />
      </a>
    );
    let _Hufflepuff = (
      <a
        href="./HufflepuffInfo"
        onClick={function (e) {
          e.preventDefault();
          this.props.changeMode("Hufflepuff");
          this.props.resetCharacter("");
        }.bind(this)}
      >
        <img src={Hufflepuff} alt="Hufflepuff" width="100" height="100" />
      </a>
    );
    let _Ravenclaw = (
      <a
        href="./RavenclawInfo"
        onClick={function (e) {
          e.preventDefault();
          this.props.changeMode("Ravenclaw");
          this.props.resetCharacter("");
        }.bind(this)}
      >
        <img src={Ravenclaw} alt="Ravenclaw" width="100" height="100" />
      </a>
    );
    let _Slytherin = (
      <a
        href="./SlytherinInfo"
        onClick={function (e) {
          e.preventDefault();
          this.props.changeMode("Slytherin");
          this.props.resetCharacter("");
        }.bind(this)}
      >
        <img src={Slytherin} alt="SlytherinImg" width="100" height="100" />
      </a>
    );
    if (mode === "welcome") {
      Hogwarts = (
        <div>
          <h2>{this.props.title}</h2>
          {this.props.desc}
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <strong>Hogwarts School of Witchcraft and Wizardry</strong> was the
            British wizarding school, located in the Scottish Highlands. It
            accepted magical students from Great Britain and Ireland for
            enrolment. It was a state-owned school, funded by the Ministry of
            Magic.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Established around the 10th century,
            Hogwarts was considered to be one of the finest magical institutions
            in the Wizarding World, though other notable schools included
            Beauxbatons Academy of Magic in France, the Durmstrang Institute
            implied to be in northern Europe, and Ilvermorny School of
            Witchcraft and Wizardry in the United States. Children with magical
            abilities were enrolled at birth, and acceptance was confirmed by
            owl post at age eleven. However, if the child in question was a
            Muggle-born, a staff member from the school visited the child and
            his or her family in order to inform them of their magical heritage
            and the existence of the Wizarding world.
          </p>
        </div>
      );
    } else if (mode === "Gryffindor") {
    }

    return (
      <div>
        <div className="HouseEmblem">
          {_Gryffindor}
          {_Hufflepuff}
          {_Ravenclaw}
          {_Slytherin}
        </div>
        <div>{Hogwarts}</div>
      </div>
    );
  }
}

export default Images;
