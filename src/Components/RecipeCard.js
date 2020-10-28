import React, { Component } from "react";

class RecipeCard extends Component {
  render() {
    return (
      <div className="recipe-card">
        <img src="" alt="" />
        <div className="flex-row">
          <p>Recipe Title</p>
          <p>source of recipe</p>
        </div>
        <div className="flex-row">
          <p>calories</p>
          <p>yield</p>
        </div>
        <button>cook now</button>
      </div>
    );
  }
}

export default RecipeCard;
