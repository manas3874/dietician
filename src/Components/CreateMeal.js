import React, { Component } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
class CreateMeal extends Component {
  // state = { recipe: [] };

  // recipe = () => {
  //   let appId = "a21fa717";
  //   let appKey = "5ebe583aa60117600d289e1a50a94839";
  //   // let query = "paneer";
  //   let query = this.props.ing[0];
  //   var apiUrl = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;

  //   axios.get(apiUrl).then((response) => {
  //     let recipe = response.data;
  //     this.setState({ recipe: recipe });
  //   });
  // };
  // console.log(this.state.recipe);
  // checker = () => {
  //   console.log(this.state.recipe);
  // };
  render() {
    return (
      <div>
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
