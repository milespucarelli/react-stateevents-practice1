import React, { Component } from 'react'
import DogCard from '../Components/DogCard'
import dogs from '../dogs'

class DogList extends Component {
  state = {
    dogs: dogs
  }

  render() {
    let dogCards = this.state.dogs.map(dog => <DogCard dog={dog} key={dog.id}/>)
    return <div className="dogContainer">{dogCards}</div>;
  }
}

export default DogList;
