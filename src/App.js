import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './MyName';
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React. wow</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        	{ /* 주석은 이렇게 작성 */
        		1 + 1 === 2 ? (<div>맞아요</div>) : (<div>틀려요</div>)
        	}
        </div>
        <MyName name1="박근희" />
        
        <Counter />
      </div>
    );
  }
}

export default App;
