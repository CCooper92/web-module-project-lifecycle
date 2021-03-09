import { Component } from 'react';

export default class UserForm extends Component {
    state= {
        usernameText: '',
    }
    handleChanges = e => {
        this.setState({
            usernameText: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.setUsername(this.state.usernameText);
        this.setState({
            usernameText: ''
        })
    }
    render(){
        return(
            <>
                <h4>Search Users</h4>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username' />
                    <input
                    id='username'
                    value={this.state.usernameText}
                    onChange={this.handleChanges}
                    />
                </form>
            </>
        )
    }
}

