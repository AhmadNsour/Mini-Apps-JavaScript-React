import React from "react"
import "./../Cs.css"


class SearchProfile extends React.Component {
    render() {
      return (
        <div>
           <form onSubmit={this.handleForm.bind(this)}>
             <label><input type="search" ref="username" placeholder="Type Username "/></label>
           </form>
        </div>
      )
    }
    
    handleForm(Ser) {
     Ser.preventDefault();
      let username = this.refs.username.value
      this.props.fetchProfile(username);
      this.refs.username.value = '';
    }
}
export default SearchProfile