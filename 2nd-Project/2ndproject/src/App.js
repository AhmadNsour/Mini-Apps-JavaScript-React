import React, { Component } from 'react';
import Counter from "./components/Counter"



class App extends Component {
   
  state = { 
      Counters:[
          {id:1 , value:0},
          {id:2 , value:0},
          {id:3 , value:0},
          {id:4 , value:0},
          {id:5 , value:0}
      ]
   };
  handleDelete(id) {
    let result =this.state.counters.filter(ele => ele.id !== id );
    this.setState({counters:result})
    
  };
render(){
  return (
  <div>
      {this.state.Counters.map (counter => (
      <Counter ahmad={this.handleDelete} key={counter.id} value={counter.value} selected >
        <input type="text"></input>
        </Counter>
    )
  )}
  </div>
  )
        }
}
export default App;
