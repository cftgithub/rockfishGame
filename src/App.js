import React, { Component } from "react";
import Title from "./components/Title";
import FishCard from "./components/FishCard";
import Wrapper from "./components/Wrapper";
import fish from "./fish.json";
import './App.css';

class App extends Component {
  state = {
    fish,
    // filterFish: fish,
    score: 0,
    hiCount: 0,
    title: "Let's Fish!",
    instruction: "There are 6 fishes on the 'Good' list. Can you catch them all?"
  };

  // increaseScore = () => {
  //   if(this.state.score < 15) {
  //     this.setState({ score: this.state.score + 1 })
  //   } else {
  //     this.endGame();
  //   }
  // };

  // resetScore = () => {
  //   if(this.state.score > this.state.hiCount) {
  //     this.setState({ hiCount: this.state.score })
  //   };
  //   this.setState({ score: 0 });
  // };

  // randomizeCards = () => {
  //   this.state.fish.sort(() => Math.random() - 0.5);
  // }

  // endGame = () => {
  //   this.setState({ score: this.state.score + 1 })
  //   this.setState({ title: "Fish Catcher!" });
  //   this.setState({ hiCount: 16 });
  // }

  // clicker = id => {
  //   if(this.state.score !== 16) {
  //   const selected = this.state.fish.filter(fsh => fsh.id === id);
  //   console.log(selected)
  //   if(selected[0].clicked === false) {
  //     this.increaseScore();
  //     selected[0].clicked = true;
  //   } else {
  //     this.resetScore();
  //     this.state.fish.forEach((fish) => (
  //       fish.clicked = false
  //     ));
  //   }
  // } else {
  //     this.resetScore();
  //     this.state.fish.forEach((fish) => (
  //       fish.clicked = false
  //     ));
  //     this.setState({ title: "Fish Finder" });
  // }
  //   this.randomizeCards();
  // };

  catchFish = (id) => {
    // this.state.fish.sort(() => Math.random() - 0.5);
    const fish = this.state.fish.filter(fish => fish.id === id);
    console.log(fish);
    if (fish[0].status === "good") {
      alert(fish[0].commonName + " Status: Good; Nice catch!");
      console.log("YAY");
      this.setState({ score: this.state.score + 15 })
    }
    if (fish[0].status === "unknown") {
      alert(fish[0].commonName + " Status: Unknown");
      console.log("HMMMM");
      this.setState({ score: this.state.score + 10 })
    }
    if (fish[0].status === "vulnerable") {
      alert(fish[0].commonName + ": A Vulnerable species. Please follow safe catch and release procedures!");
      console.log("He's vulnerable");
      this.setState({ score: this.state.score + 1 })
    }
    if (fish[0].status === "threatened") {
      alert(fish[0].commonName + ": A Threatened species. Please follow safe catch and release procedures!");
      console.log("He's threatened");
      this.setState({ score: this.state.score + 0 })
    }
    if (fish[0].status === "endangered") {
      alert("You caught a " + fish[0].commonName + ". NOOOOOOOOO! He's endangered!!!");
      console.log("NOOOOOOOOOO");
      this.setState({ score: this.state.score - 15 })
    }
    this.setState({ fish: this.state.fish.filter(fish => fish.id !==id) });
  };

  render() {
    return (
      <Wrapper>
        <Title
          title={this.state.title}
          instruction={this.state.instruction}
          currentScore={"Current Score: " + this.state.score}
          highScore={"High Score: " + this.state.hiCount}
        />
        {this.state.fish.map(fish => (
          <FishCard
            key={fish.id}
            id={fish.id}
            species={fish.commonName}
            scientific={fish.sciName}
            image={fish.image}
            status={fish.status}
            removeFish={this.catchFish}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
