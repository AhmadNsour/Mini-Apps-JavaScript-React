import React from 'react';
import SearchProfile from "./Comp/Search.js"
import Profile from "./Comp/Profile.js"

import "./Cs.css"

const API = 'https://api.github.com/users';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      name:'',
      avatar:'',
      location:'',
      repos:'',
      followers: '',
      following:'',
      homeUrl:'',
      notFound:''
    }
  }
  fetchProfile(username) { 
    let url = `${API}/${username}`;
    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeUrl: data.html_url,
          notFound: data.message
        })
      })
      .catch((error) => console.log('Oops! . There Is A Problem') )
  }
  componentDidMount() {
    this.fetchProfile(this.state.username);
  }
  render() {
    return (
      <div className="div1">
        <div className="search" >
           <SearchProfile  fetchProfile={this.fetchProfile.bind(this)}/>
        </div>
        <div>
           <Profile data={this.state} />
        </div>
      </div>
      
    )
  }
}
export default App;

