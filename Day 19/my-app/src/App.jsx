import React from "react";
function Card() {
    
    return (
      <div className="container">
      <Counter/>
          <Counter/>
          <Counter/>
          <Counter/>
          </div>
      
    );
  }
  class Counter extends React.Component
  {
      constructor(props){
          super(props);
        this.state = {counter:0};
        this.increaseCount = this.increaseCount.bind(this);
      }

      increaseCount(){
        this.setState((state) => ({
            counter: state.counter + 1
          }));
      }
      render(){
          return <button onClick={this.increaseCount}>{this.state.counter}</button>
      }
  }

  export default Card;