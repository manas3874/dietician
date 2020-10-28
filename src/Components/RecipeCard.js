import React, { Component } from "react";

class RecipeCard extends Component {
  render() {
    return (
      <div className="recipe-card">
        <img
          className="recipe-card--img"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
          alt=""
        />
        <div className="flex-row">
          <p className="recipe-card--title">Recipe Title</p>
          <p className="recipe-card--source">source of recipe</p>
        </div>
        <div className="flex-row">
          <p className="recipe-card--calories">calories</p>
          <p className="recipe-card--yield">yield</p>
        </div>
        <button
          className="recipe-card--btn"
          onClick={console.log(this.props.recipes.hits)}
        >
          cook now
        </button>
      </div>
    );
  }
}

export default RecipeCard;
