import React, { Component } from 'react';
import './App.css';

import Form from"./components/Form";

class App extends Component {
  // this is for the Api call getRecipe
  // we will pass this data of getRecipe below using this.getRecipe
  // this on line 19 refers to the app component and .getRecipe is for that data
  // recipeName is that name value from form, e. means we can read the property from it. elements.value to access it's value
  // we will console.log recipeName (const) and you will see what is typed in the search
  getRecipe = (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    console.log(recipeName);
  }
  // we place that e in there to prevent the default page reloading, it's an object
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
