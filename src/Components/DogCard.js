import React from "react";

class DogCard extends React.Component {
  state = {
    clicked: false
  }

  render() {
    return (
      <div>
        <h2>{this.props.dog.name}</h2>
        <img alt="" src={this.props.dog.img} />
        <button onClick={() => this.setState({clicked: !this.state.clicked})}>Bark</button>
        {this.state.clicked ?
          <h1 className='bark'>RUFF</h1> :
          null
        }
      </div>
    );
  }
}

export default DogCard;
