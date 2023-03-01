import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { 
        firstName: 'Emily', 
        lastName: 'Johnson' 
      },
      company: 'Element Biosciences'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, my name is {this.state.name.firstName} {this.state.name.lastName}. I want to work at {this.state.company}.
          </p>
          <button 
            onClick={() => {
              this.setState({ name: { firstName: 'Whitney', lastName: 'Kalschuer'} });
              console.log(this.state);
          }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
    
  }
  
}

export default App;
