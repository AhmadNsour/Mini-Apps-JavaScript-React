/* eslint-disable react/jsx-no-target-blank */
import React from "react"
import "./../Cs.css"

class Profile extends React.Component {
    render() {
        let data = this.props.data;
        let followers = `${data.homeUrl}/followers`;
        let repositories = `${data.homeUrl}?tab=repositories`;
        let following = `${data.homeUrl}/following`;
    if (data.notFound === 'Not Found')
    return (
        <div >
        <h2>Please Type a Username</h2>
        </div>
    );
    else
        return (
            
                <div>
                    <div>
                    <a href={data.homeUrl} target="_blank" title={data.name || data.username}><img src={data.avatar} alt={data.username}/></a>
                    <h2 className="name"><a href={data.homeUrl} target="_blank" title={data.username} >{data.name || data.username}</a></h2>
                </div>
                <div className="result">                 
                        <li>
                            <a href={followers} target="_blank" title="Number Of Followers"><i>{data.followers}</i> <span>Followers</span></a>
                        </li>
                        <li>
                            <a href={repositories} target="_blank" title="Number Of Repositoriy"><i>{data.repos}</i> <span>repositories</span></a>
                        </li>
                        <li>
                            <a href={following} target="_blank" title="Number Of Following"><i>{data.following}</i> <span>Followings</span></a>
                        </li>
                   
                </div>
                </div>
            
        );
    }
}

export default Profile;