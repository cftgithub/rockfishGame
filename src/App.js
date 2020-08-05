import React, { Component } from "react";
import Title from "./components/Title";
import FishCard from "./components/FishCard";
import Wrapper from "./components/Wrapper";
import fish from "./fish.json";
import './App.css';

class App extends Component {
  state = {
    fish,
    resetFish: fish,
    score: 0,
    clickCount: 0,
    hiCount: 0,
    title: "Let's Fish!",
    instruction: "Point value for conservation status of each rockfish caught:"
  };

  newHiCount = () => {
    if(this.state.score > this.state.hiCount) {
      this.setState({ hiCount: this.state.score});
    };
  }

  releaseFish = () => {
    this.setState({ fish });
    this.setState({clickCount: 0});
    console.log(fish);
  }

  catchFish = (id) => {
    if (this.state.clickCount === 6) {
      this.newHiCount();
      this.setState({ clickCount: 0 });
      this.setState({ score: 0 });
      alert("You've caught your limit! You scored " + this.state.score + " points!");
      this.setState({ fish });
    } 
    else {
      this.state.fish.sort(() => Math.random() - 0.5);
      const fish = this.state.fish.filter(fish => fish.id === id);
      console.log(fish);
      if (fish[0].status === "good") {
        alert(fish[0].commonName + " Status: Good; Nice catch!");
        this.setState({ score: this.state.score + 15 });
      }
      if (fish[0].status === "unknown") {
        alert(fish[0].commonName + " Status: Unknown");
        this.setState({ score: this.state.score + 10 });
      }
      if (fish[0].status === "vulnerable") {
        alert(fish[0].commonName + ": A Vulnerable species. Please follow safe catch and release procedures!");
        this.setState({ score: this.state.score + 1 });
      }
      if (fish[0].status === "threatened") {
        alert(fish[0].commonName + ": A Threatened species. Please follow safe catch and release procedures!");
        this.setState({ score: this.state.score + 0 });
      }
      if (fish[0].status === "endangered") {
        alert("You caught a " + fish[0].commonName + ". NOOOOOOOOO! He's endangered!!!");
        this.setState({ score: 0 });
        this.releaseFish();
        return;
      }
      this.setState({ fish: this.state.fish.filter(fish => fish.id !== id) });
      this.setState({ clickCount: this.state.clickCount + 1 });
      console.log(this.state.clickCount);
    }
  };

  clickCountToZero = () => {
    this.setState({ clickCount: 0 });
  };

  render() {
    return (
      <Wrapper>
        <Title
          title={this.state.title}
          instruction={this.state.instruction}
          good={"Good = +15"}
          unknown={"Unknown = +10"}
          vulnerable={"Vulnerable = +1"}
          threatened={"Threatened = 0"}
          endangered={"Endangered = Game Over! Lose your fishing license!"}
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
