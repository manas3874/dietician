import React, { Component } from "react";
import { Link } from "react-router-dom";

class RecipeCard extends Component {
  state = {
    recipeArray: [],
    imagesArray: [],
    titleArray: [],
    sourceArray: [],
    caloriesArray: [],
    yieldArray: [],
    recipeUrlArray: [],
  };

  stateSetter = (arg) => {
    // ! setState for entire recipe array
    this.setState({ recipeArray: arg });

    // ! Path to recipe array
    let path = this.state.recipeArray;

    // ! setState for calories array
    var calories = path.map((item) => {
      return Math.round(item.recipe.calories);
    });
    this.setState({ caloriesArray: calories });

    // ! setState for title array
    var titles = path.map((item) => {
      return item.recipe.label;
    });
    this.setState({ titleArray: titles });

    // ! setState for image array
    var images = path.map((item) => {
      return item.recipe.image;
    });
    this.setState({ imagesArray: images });

    // ! setState for source array
    var sources = path.map((item) => {
      return item.recipe.source;
    });
    this.setState({ sourceArray: sources });

    // ! setState for yields array
    var yields = path.map((item) => {
      return item.recipe.yield;
    });
    this.setState({ yieldArray: yields });

    // ! setState for recipeUrl array
    var urls = path.map((item) => {
      return item.recipe.url;
    });
    this.setState({ recipeUrlArray: urls });
  };

  componentDidMount() {
    setTimeout(() => {
      this.stateSetter(this.props.recipes);
      console.log(this.props.recipes);
    }, 2200);
  }
  render() {
    return (
      <div className="recipe-card">
        <img
          className="recipe-card--img"
          src={this.state.imagesArray[this.props.attr]}
          alt=""
        />
        <div className="flex-column">
          <p className="recipe-card--title">
            {this.state.titleArray[this.props.attr]}
          </p>
          <p className="recipe-card--source">
            By. {this.state.sourceArray[this.props.attr]}
          </p>
        </div>
        <div className="flex-row">
          <p className="recipe-card--calories">
            {this.state.caloriesArray[this.props.attr]}
          </p>
          <p className="recipe-card--yield">
            {this.state.yieldArray[this.props.attr]}
          </p>
        </div>
        <div className="flex-row">
          <p className="recipe-card--calories-label">calories</p>
          <p className="recipe-card--yield-label">yield</p>
        </div>

        <Link
          className="recipe-card--btn"
          to={{
            pathname: `${this.state.recipeUrlArray[this.props.attr]}`,
          }}
          target="_blank"
        >
          get cooking!
        </Link>
        {/* <a href={this.state.recipeUrlArray[this.props.attr]}>press</a> */}
      </div>
    );
  }
}

export default RecipeCard;
