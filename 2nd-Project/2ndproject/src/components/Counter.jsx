import React, {Component} from "react"

class Counter extends Component{
 state = {
     count: 0,
     
 };

 handleIncrement= ()=> {
     this.setState({count : this.state.count +1 });
}


render(){
    
    let classes = "badge m-2 p-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";

    return ( 
       <div>
           {this.props.children}
        <span  className={classes}>{this.formatCount()}</span>
        <button 
        className="btn btn-secondary btn-sm p-2" 
        onClick={this.handleIncrement}>
            inCrement
        </button>
        <button 
        className="btn btn-danger btn-sm m-2 p-2" 
        onClick={this.props.ahmad.bind(this,this.props.key)}>
            Delete
        </button>
        </div>
);
}
formatCount(){
    return this.state.count === 0 ? "Zero" : this.state.count
}
}
export default Counter


