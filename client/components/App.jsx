import React from 'react';
import Nav from './Nav';
import RecipeList from './RecipeList';
import RecipeViewer from './RecipeViewer';
import searchEdamam from '../lib/searchEdamam';
import parseRecipes from '../lib/parseRecipes';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      recipes: null,
      currentRecipeId: null,
      viewRecipe: false,
    };

    this.handleCurrentRecipeChange = this.handleCurrentRecipeChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getRecipeList = this.getRecipeList.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  componentDidMount() {
    searchEdamam()
      .then(response => response.json())
      .then(results => parseRecipes(results))
      .then(recipes => this.setState({ recipes }))
      .catch(err => console.log(`Error: ${err}`));
  }

  getCurrentRecipe() {
    const { recipes, currentRecipeId } = this.state;
    return recipes[currentRecipeId];
  }

  getRecipeList() {
    const { recipes, currentRecipeId, search } = this.state;
    const recipeListEntries = [];
    const keys = Object.keys(recipes);
    keys.forEach((id) => {
      const current = recipes[id];
      if (currentRecipeId !== id) {
        if ((search !== '') && current.label.toLowerCase().includes(search)) {
          recipeListEntries.push(current);
        } else if (search === '') {
          recipeListEntries.push(recipes[id]);
        }
      }
    });
    return recipeListEntries;
  }

  handleSearch(text) {
    this.setState({ search: text, viewRecipe: false });
  }

  handleCurrentRecipeChange(currentRecipeId) {
    window.scrollTo(0, 0);
    this.setState({ currentRecipeId, viewRecipe: true });
  }

  showAll() {
    this.setState({ search: '', viewRecipe: false });
  }

  render() {
    const { viewRecipe, recipes } = this.state;
    const list = (recipes === null) ? 'Loading...'
      : (
        <RecipeList
          recipes={this.getRecipeList()}
          onCurrentRecipeChange={this.handleCurrentRecipeChange}
        />
      );
    const current = (viewRecipe) ? (<RecipeViewer recipe={this.getCurrentRecipe()} />) : '';
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-8 offset-md-2">
            <Nav
              homeNav={this.showAll}
              handleSearch={this.handleSearch}
            />
          </div>
        </nav>
        <div className="viewer">
          {current}
        </div>
        {list}
      </div>
    );
  }
}

export default App;
