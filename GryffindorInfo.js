import React, { Component } from "react";
import HarryPotter from "./Images/HarryPotter.png";
import Hermione from "./Images/Hermione Granger.png";
import Ron from "./Images/Ron Weasley.png";

class GryffindorInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }

  render() {
    let mode = this.props.mode;

    let HarryPic, HermionePic, RonPic;
    let GryffindorP, HarryP, HermioneP, RonP;
    if (mode === "Gryffindor") {
      GryffindorP = (
        <div>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;<strong>Gryffindor</strong> values courage,
            bravery, nerve, and chivalry. Gryffindor's mascot is the lion, and
            its colours are scarlet red and gold (maroon and gold on the ties
            and scarves). During the books, the Head of this house is the
            Transfiguration Professor and Deputy Headmistress, Minerva
            McGonagall until she becomes headmistress, and the house ghost is
            Sir Nicholas de Mimsy-Porpington, more commonly known as Nearly
            Headless Nick. According to Rowling, Gryffindor corresponds roughly
            to the element of fire. The founder of the house is Godric
            Gryffindor.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The Gryffindor common room is in one of the
            castle's highest towers, and its entrance is on the seventh floor in
            the east wing of the castle and is guarded by a painting of The Fat
            Lady, who is garbed in a pink dress. She permits entry only after
            being given the correct password, as was established in the third
            book, when Sirius Black after he could not give the correct
            password. In the first book, Neville Longbottom tends to forget the
            password and must wait near the tried forcing entry into the tower,
            only to be blocked by The Fat Lady painting until other Gryffindors
            arrive to open the way.
          </p>
        </div>
      );
      HarryPic = (
        <button
          onClick={function (e) {
            e.preventDefault();
            this.props.changeCharacter("Harry");
          }.bind(this)}
        >
          <img src={HarryPotter} alt="Harry" width="50" height="50" />
        </button>
      );
      HermionePic = (
        <button
          onClick={function (e) {
            e.preventDefault();
            this.props.changeCharacter("Hermione");
          }.bind(this)}
        >
          <img src={Hermione} alt="Hermione" width="50" height="50" />
        </button>
      );
      RonPic = (
        <button
          onClick={function (e) {
            e.preventDefault();
            this.props.changeCharacter("Ron");
          }.bind(this)}
        >
          <img src={Ron} alt="Ron" width="50" height="50" />
        </button>
      );
      if (this.props.character === "Harry") {
        HarryP = (
          <p>
            He was the only child and son of James and Lily Potter (née Evans),
            both members of the original Order of the Phoenix. Harry's birth was
            overshadowed by a prophecy, naming either himself or Neville
            Longbottom as the one with the power to vanquish Lord Voldemort.
            After half of the prophecy was reported to Voldemort, courtesy of
            Severus Snape, Harry was chosen as the target due to his many
            similarities with the Dark Lord. In turn, this caused the Potter
            family to go into hiding. Voldemort made his first vain attempt to
            circumvent the prophecy when Harry was a year and three months old.
            During this attempt, he murdered Harry's parents as they tried to
            protect him, but this unsuccessful attempt to kill Harry led to
            Voldemort's first downfall. This downfall marked the end of the
            First Wizarding War, and to Harry henceforth being known as the "Boy
            Who Lived", as he was the only known survivor of the Killing Curse.
          </p>
        );
      } else if (this.props.character === "Hermione") {
        HermioneP = (
          <p>
            Hermione was an English Muggle-born[3] witch born to Mr and Mrs
            Granger. At the age of eleven, she learned about her magical nature
            and was accepted into Hogwarts School of Witchcraft and Wizardry.
            Hermione began attending Hogwarts in 1991 and was Sorted into
            Gryffindor House. She possessed a brilliant academic mind and proved
            to be a gifted student in almost every subject that she studied.
          </p>
        );
      } else if (this.props.character === "Ron") {
        RonP = (
          <p>
            Ron was an English pure-blood wizard, the sixth and youngest son of
            Arthur and Molly Weasley (née Prewett). He was also the younger
            brother of Bill, Charlie, Percy, Fred, George, and the elder brother
            of Ginny. Ron and his brothers and sister lived at the The Burrow,
            on the outskirts of Ottery St Catchpole, Devon.
          </p>
        );
      }
    }

    return (
      <div>
        <div>{GryffindorP}</div>
        <div>
          {HarryPic}
          {HermionePic}
          {RonPic}
        </div>
        <div>
          {HarryP}
          {HermioneP}
          {RonP}
        </div>
      </div>
    );
  }
}

export default GryffindorInfo;
//cite https://en.wikipedia.org/wiki/Hogwarts#Gryffindor
