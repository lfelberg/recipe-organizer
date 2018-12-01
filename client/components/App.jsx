import { v1 } from 'uuid';
import React from 'react';
import Nav from './Nav';
import RecipeList from './RecipeList';
import RecipeViewer from './RecipeViewer';
import exampleRecipeData from '../../database/data/exampleRecipes';

const generateManyRecipes = () => {
  const recipes = {};
  for (let i = 0; i < 30; i += 1) {
    const index = Math.floor(Math.random() * exampleRecipeData.length);
    const entry = Object.assign({}, exampleRecipeData[index]);
    const uuid = v1();
    entry.id = uuid;
    recipes[uuid] = entry;
  }
  return recipes;
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: generateManyRecipes(),
      currentRecipeId: null,
      viewRecipe: false,
    };

    this.handleCurrentRecipeChange = this.handleCurrentRecipeChange.bind(this);
  }

  getCurrentRecipe() {
    const { recipes, currentRecipeId } = this.state;
    return recipes[currentRecipeId];
  }

  getRecipeList() {
    const { recipes, currentRecipeId } = this.state;
    const recipeListEntries = [];
    const keys = Object.keys(recipes);
    keys.forEach((id) => {
      if (currentRecipeId !== id) {
        recipeListEntries.push(recipes[id]);
      }
    });
    return recipeListEntries;
  }

  handleCurrentRecipeChange(currentRecipeId) {
    this.setState({ currentRecipeId, viewRecipe: true });
  }

  render() {
    const { viewRecipe } = this.state;
    const current = (viewRecipe) ? (<RecipeViewer recipe={this.getCurrentRecipe()} />) : '';
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Nav />
          </div>
        </nav>
        <div className="viewer">
          {current}
        </div>
        <RecipeList
          recipes={this.getRecipeList()}
          onCurrentRecipeChange={this.handleCurrentRecipeChange}
        />
      </div>
    );
  }
}

export default App;
