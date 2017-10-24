import React from 'react';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {

    setInterval(()=> {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  render(){
    return (
      <div>
          <h1 className="counter">Count: {this.state.count}</h1>
      </div>
    )
  }
}

export default Counter;
