import React, { Component } from "react";
import Subject from "./components/Subject";
import Images from "./components/Images";
import GryffindorInfo from "./components/GryffindorInfo";
import HufflepuffInfo from "./components/HufflepuffInfo";
import RavenclawInfo from "./components/RavenclawInfo";
import SlytherinInfo from "./components/SlytherinInfo";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      character: "",
      subject: { title: "Hogwarts", sub: "School of Witchcraft and Wizardry" },
      welcome: { title: "Hello", desc: "Welcome to the Hogwarts!" },
    };
  }

  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        <Images
          title={this.state.welcome.title}
          desc={this.state.welcome.desc}
          mode={this.state.mode}
          character={this.state.character}
          changeMode={function (x) {
            this.setState({ mode: x });
          }.bind(this)}
          resetCharacter={function () {
            this.setState({ character: "" });
          }.bind(this)}
        ></Images>
        <GryffindorInfo
          mode={this.state.mode}
          character={this.state.character}
          changeCharacter={function (x) {
            this.setState({ character: x });
          }.bind(this)}
        ></GryffindorInfo>
        <HufflepuffInfo
          mode={this.state.mode}
          character={this.state.character}
          changeCharacter={function (x) {
            this.setState({ character: x });
          }.bind(this)}
        ></HufflepuffInfo>
        <RavenclawInfo
          mode={this.state.mode}
          character={this.state.character}
          changeCharacter={function (x) {
            this.setState({ character: x });
          }.bind(this)}
        ></RavenclawInfo>
        <SlytherinInfo
          mode={this.state.mode}
          character={this.state.character}
          changeCharacter={function (x) {
            this.setState({ character: x });
          }.bind(this)}
        ></SlytherinInfo>
      </div>
    );
  }
}

export default App;
