import React from "react";

class DogCard extends React.Component {
  state = {
    clicked: false
  }

  ruff = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    const {name, img} = this.props.dog
    return (
      <div>
        <h2>{name}</h2>
        <img alt="" src={img} />
        <button onClick={this.ruff}>Bark</button>
        {this.state.clicked && <h1 className='bark'>RUFF</h1>}
      </div>
    );
  }
}

export default DogCard;
