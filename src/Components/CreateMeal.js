import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
class CreateMeal extends Component {
  render() {
    return (
      <div className="create-meal">
        {/* <button onClick={this.recipe}>click here</button> */}
        {/* <button onClick={this.checker}>check here</button> */}
        <Link to={{ pathname: "/recipes", query: this.props.ing }}>
          get recipes
        </Link>
      </div>
    );
  }
}

export default CreateMeal;

//  let query = "potato";
