import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar"
import numbers from "./numbers.json";

// shuffle cards after each click using Fisher-Yates Shuffing Algorithm
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

class App extends Component {

   // Setting this.state.friends to the friends json array
   state = {
    numbers,
    currentscore: 0,
    highscore: 0,
    lossstate: 0,
    winstate: 0,
    clicked: [],
  };
  
  clickedImage = id => {
  //Assigning the state of the empty array being updated for clicked images
  let clicked = this.state.clicked;
  let currentscore = this.state.currentscore;
  let highscore = this.state.highscore;
  this.setState({
    lossstate: 0
  });

  if (currentscore >= highscore) {
    this.setState(
      {highscore: currentscore}
      );
  }

  if (clicked.indexOf(id) === -1) {
    clicked.push(id);
    console.log(clicked);
    //Increment scores appropriately
    this.adjustScore();
    this.shuffleImages();
  } else if (this.state.currentscore === 12) {
    //Alert the player that they have won and reset currentscore and empty array of clicked images
    this.setState({
      winstate: 1,
      currentscore: 0,
      clicked:[]
    });
  } else {
    //Alert the player that they have lost
    this.setState({
      currentscore: 0,
      clicked: []
    });
    console.log("clicked an image twice within a round!");
    this.setState({
      lossstate: 1
    });
  }

};

adjustScore = () => {
  this.setState({ currentscore: this.state.currentscore + 1});
};

shuffleImages = () => {
  this.setState({ numbers: shuffle(numbers) });
};

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar
        currentscore={this.state.currentscore} 
        highscore={this.state.highscore} />
        
        <div className="container">
        <div
          className="alert alert-danger"
          style={{ opacity: this.state.lossstate }}
        >
          Sorry, you've clicked that image already. Please try again!
          </div>
        <div
          className="alert alert-success"
          style={{ opacity: this.state.winstate }}
        >
          Congratulations! You clicked through all 12 images without double-clicking!
          </div>

        <div className="row">
        {this.state.numbers.map(number => (
          <ImageCard
            id={number.id}
            key={number.id}
            name={number.name}
            image={number.image}
            clickedImage={this.clickedImage}
          />
        ))}
        </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
