
import './App.css';
import React from 'react'
import UserProfile from './components/UserProfile';
import Following from './components/Following';
import UserForm from './components/UserForm';

class App extends React.Component {
  state={
    username: 'CCooper92'
  }
  setUsername = (name) => {
    this.setState({
      username:name
    })
  }

  render() {
    return(
      <div className='App'>
        <h1>User Card </h1>
        <div>
          <UserProfile username={this.state.username}/>
          <UserForm setUsername={this.setUsername}/>
          <Following username={this.state.username} />
        </div>
      </div>
    )
  }
}

export default App;
