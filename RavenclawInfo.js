import React, { Component } from "react";
import ChoChang from "./Images/Cho Chang.png";
import Luna from "./Images/Luna Lovegood.png";

class RavenclawInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let mode = this.props.mode;

    let ChoChangPic, LunaPic;
    let RavenclawP, ChoChangP, LunaP;
    if (mode === "Ravenclaw") {
      RavenclawP = (
        <div>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;<strong>Ravenclaw</strong> values
            intelligence, learning, wisdom and wit.The house mascot is an eagle
            and the house colours are blue and bronze (blue and silver in the
            Harry Potter and Fantastic Beasts films and on the ties and
            scarves). During the books, the head of this house is the Charms
            teacher, Professor Filius Flitwick, and the house ghost is the Grey
            Lady. According to Rowling, Ravenclaw corresponds roughly to the
            element of air. The founder of this house is Rowena Ravenclaw.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The dormitories are in Ravenclaw Tower, on
            the west side of Hogwarts. The common room is round and filled with
            blue hangings and armchairs, has a domed ceiling painted with stars
            and features a replica statue of Rowena wearing her diadem. Harry
            also notes that Ravenclaws "have a spectacular view of the
            surrounding mountains". A logical riddle must be solved to gain
            entry, whereas the Gryffindor and Slytherin common rooms only
            require a password (Hufflepuffs need to tap a barrel in the rhythm
            of "Helga Hufflepuff"), indicating that it may be easier for those
            students from other houses who possess a high degree of intelligence
            to enter this common room than others. Professor McGonagall, the
            head of the Gryffindor House, solves the riddle accurately.
          </p>
        </div>
      );
      ChoChangPic = (
        <button
          onClick={function (e) {
            e.preventDefault();
            this.props.changeCharacter("ChoChang");
          }.bind(this)}
        >
          <img src={ChoChang} alt="ChoChang" width="50" height="50" />
        </button>
      );
      LunaPic = (
        <button
          onClick={function (e) {
            e.preventDefault();
            this.props.changeCharacter("Luna");
          }.bind(this)}
        >
          <img src={Luna} alt="Luna" width="50" height="50" />
        </button>
      );

      if (this.props.character === "ChoChang") {
        ChoChangP = (
          <p>
            Cho Chang was a witch who attended Hogwarts School of Witchcraft and
            Wizardry from 1990-1997 and was sorted into Ravenclaw House. She was
            a Seeker for the Ravenclaw Quidditch team and a popular student. In
            Cho's fifth year, she began dating Cedric Diggory while he was a
            Champion in the Triwizard Tournament. Unfortunately, Cedric became
            one of the first casualties of the Second Wizarding War, when he was
            murdered by Peter Pettigrew on Lord Voldemort's order in June of
            1995. His death greatly upset Cho and made her determined to fight
            against the recently returned Dark Lord.
          </p>
        );
      } else if (this.props.character === "Luna") {
        LunaP = (
          <p>
            Luna was a British witch, the only child and daughter of Xenophilius
            and Pandora Lovegood. Her mother accidentally died while
            experimenting with spells when Luna was nine and Luna was raised by
            her father, editor of the magazine The Quibbler, in a rook-like
            house near the village of Ottery St Catchpole in Devon.
          </p>
        );
      }
    }

    return (
      <div>
        <div>{RavenclawP}</div>
        <div>
          {ChoChangPic}
          {LunaPic}
        </div>
        <div>
          {ChoChangP}
          {LunaP}
        </div>
      </div>
    );
  }
}

export default RavenclawInfo;
//cite https://en.wikipedia.org/wiki/Hogwarts#Gryffindor
