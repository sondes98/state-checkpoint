
import './App.css';
import React from 'react';
import myImage from './anime.png';


class App extends React.Component {
  state = {
    Person: {
      fullName : "Li Young",
      bio : "I just love ramen",
      imgSrc: myImage,
      profession : "unknowing"
    },
    show : false,
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state.Person,
      show: !this.state.show,
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.Person.fullName}</h1>
        <h1>{this.state.Person.bio}</h1>
        <img className="image" src={this.state.Person.imgSrc} alt="Li"></img>
        <h1>{this.state.Person.profession}</h1>
        <br></br>
        <button onClick={this.handleShowPerson}>click here</button>
      </>
    );
  }
}

export default App;
