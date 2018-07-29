import React, { Component } from 'react';
import './App.css';

import Form from"./components/Form";

class App extends Component {
  //this is for the Api call getRecipe
  //we will pass this data of getRecipe below using this.getRecipe
  //this on line 19 refers to the app component and .getRecipe is for that data
  getRecipe () {
    console.log("Working!!!");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
      </div>
    );
  }
}

export default App;
