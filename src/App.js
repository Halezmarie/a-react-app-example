import React, { Component } from 'react';
import CatComponent from './CatComponent.js'
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent.js'
import MouseComponent  from './MouseComponent.js'
import ExampleComponent  from './ExampleComponent.js'
import TestComponent  from './TestComponent.js'

// Add your code own within the return statement

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          {"Now"}
        </header>
        <ExampleComponent />
        <TestComponent />
        <CatComponent />
        <GraceHopperQuoteComponent />
        <MouseComponent />
        

      </div>
    );
  }
}

export default App;
