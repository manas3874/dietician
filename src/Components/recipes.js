import React, { Component } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
class Recipes extends Component {
  state = { recipe: [] };

  recipe = async (query) => {
    let appId = "7be2ace9";
    let appKey = "7d38fb0e3c1f7576bd1c64c4ec3d7360";
    // let appId = "aa09e304";
    // let appKey = "3f343ecdd2d12c850ae36bcbcb44ba90";
    // let appId = "a21fa717";
    // let appKey = "5ebe583aa60117600d289e1a50a94839";
    // let appId = "c392c294";
    // let appKey = "54cc27763f75f7c8bb46ee00aa6f2335";
    // let query = "potato";

    console.log(query);
    var apiUrl = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=3`;

    await axios.get(apiUrl).then((response) => {
      let recipe = JSON.stringify(response.data.hits);
      this.setState({ recipe: JSON.parse(recipe) });
    });
  };
  componentDidMount() {
    // let query = "potato";
    let query = this.props.location.query;
    this.recipe(query);
  }
  render() {
    return (
      <div className="recipe-page" onClick={console.log(this.state.recipe)}>
        <RecipeCard attr="0" recipes={this.state.recipe} />
        <RecipeCard attr="1" recipes={this.state.recipe} />
        <RecipeCard attr="2" recipes={this.state.recipe} />
        {/* <RecipeCard attr="3" recipes={this.state.recipe} />
        <RecipeCard attr="4" recipes={this.state.recipe} />
        <RecipeCard attr="5" recipes={this.state.recipe} /> */}
        {/* <h2>{console.log(this.state.recipe)}</h2> */}
      </div>
    );
  }
}

export default Recipes;
