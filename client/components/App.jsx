import React from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';
import RecipeViewer from './RecipeViewer';
import exampleRecipeData from '../../database/data/exampleRecipes';

class App extends React.Component {
  constructor(props) {
    super(props);

    const recipes = {};
    const currentRecipeId = exampleRecipeData[0].name;
    exampleRecipeData.forEach((recipe) => {
      recipes[recipe.name] = recipe;
    });

    this.state = { recipes, currentRecipeId };

    this.handleCurrentRecipeChange = this.handleCurrentRecipeChange.bind(this);
    this.getRecipeList = this.getRecipeList.bind(this);
    this.getCurrentRecipe = this.getCurrentRecipe.bind(this);
  }

  getCurrentRecipe() {
    return this.state.recipes[this.state.currentRecipeId];
  }

  getRecipeList() {
    const recipeListEntries = [];
    const keys = Object.keys(this.state.recipes);
    keys.forEach((id) => {
      if (this.state.currentRecipeId !== id) {
        recipeListEntries.push(this.state.recipes[id]);
      }
    });
    return recipeListEntries;
  }

  handleCurrentRecipeChange(currentRecipeId) {
    this.setState({ currentRecipeId });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <h5>
                <em>search</em>
                view goes here
              </h5>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <RecipeViewer
              recipe={this.getCurrentRecipe()}
            />
          </div>
          <div className="col-md-5">
            <RecipeList
              recipes={this.getRecipeList()}
              onCurrentRecipeChange={this.handleCurrentRecipeChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
