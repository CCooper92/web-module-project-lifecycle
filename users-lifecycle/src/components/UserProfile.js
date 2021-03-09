import axios from 'axios';
import React, { Component } from 'react';

export default class UserProfile extends Component {
    state = {
        user:null
    };
    componentDidMount() {
        axios
        .get(`https://api.github.com/users/${this.props.username}`)
        .then(res => {
            this.setState({user: res.data})
        })
        .catch(err => {
            console.log(err);
        })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.username !== this.props.username) {
            axios
            .get(`https://api.github.com/users/${this.props.username}`)
            .then(res => {
                this.setState({ user: res.data })
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
    render() {
        if (!this.state.user) return <h3>Loading user data...</h3>
        return(
        <div>
            <img 
            src={this.state.user.avatar_url}
            alt={this.state.user.name}
            style={{borderRadius: '50%', maxWidth: '200px'}}
            />

            <h1>{this.state.user.name}</h1>
            <p>
                <span style={{fontWeight:'bolder'}}>username:</span> 
                {this.state.user.login}
            </p>
            <p>
                <span style={{fontWeight:'bolder'}}>Location: </span>
                {this.state.user.location}
            </p>
            <p>
                <span style={{fontWeight:'bolder'}}>Bio:</span>
                 {this.state.user.bio}
            </p>
            <p>
                <span style={{fontWeight:'bolder'}}>Followers: </span>
                {this.state.user.followers}
            </p>
            <p>
                <span style={{fontWeight:'bolder'}}>Following:</span>
                 {this.state.user.following}
            </p>
        </div>
        )
    }
}