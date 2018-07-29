import React from 'react';
// we have to pass in an argument here in this stateless component props
// props referes to getRecipe from App.js and whatever gets passed in to that argument gets stored here in this argument
// this props is an object and to access the property, you type in props.(name of property)
// onSubmit is an attribute
const Form = props => (
  <form onSubmit={props.getRecipe}>
    <input type="text"/>
    <button>Search</button>
  </form>
);

export default Form;

// stateless component
// can't use this.props here to access .getRecipe (from app.js) since this is a stateless component
// although (this.props) is used for passing data between components
// 