import React, { Component } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
class Recipes extends Component {
  state = { recipe: [] };

  recipe = () => {
    let appId = "a21fa717";
    let appKey = "5ebe583aa60117600d289e1a50a94839";
    // let query = "paneer";
    let query = this.props.location.query;
    var apiUrl = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;

    axios.get(apiUrl).then((response) => {
      let recipe = response.data;
      this.setState({ recipe: recipe });
    });
  };
  componentDidMount() {
    this.recipe();
  }
  render() {
    return (
      <div className="recipe-page">
        <RecipeCard attr="0" recipes={this.state.recipe} />
        <RecipeCard attr="0" recipes={this.state.recipe} />
        <RecipeCard attr="0" recipes={this.state.recipe} />
        {/* <h2>{console.log(this.state.recipe)}</h2> */}
      </div>
    );
  }
}

export default Recipes;
