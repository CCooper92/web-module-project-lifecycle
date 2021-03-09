import axios from 'axios';
import { Component } from 'react';


export default class Following extends Component {
    state = {
        following: []
    }

    componentDidMount(){
        axios
            .get(`https://api.github.com/users/${this.props.username}/following`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    following: res.data
                })
                })
            .catch(err => {
                console.log(err);
        })
    }
    componentDidUpdate(prevProps) {
        if(prevProps.username !== this.props.username){
            axios
            .get(`https://api.github.com/users/${this.props.username}/following`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    following: res.data
                })
                })
            .catch(err => {
                console.log(err);
            })
        }
    }

    render(){
        return(
            <div style={{display: 'flex', flexFlow: 'row wrap',}}>
                {this.state.following.map(user => (
                    <div key={user.id} style={{width: '160px', margin: '10px', padding: '16px', boxShadow:
                    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",}}>
                        <img src={user.avatar_url} alt={user.login} style={{borderRadius: '50%', maxWidth: '130px'}} />
                        <h4>{user.login}</h4>
                    </div>
                ))}
            </div>
        )
    }
}