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
      entries: {
        filter: '',
        search: '',
      },
      recipes: null,
      currentRecipeId: null,
      viewRecipe: false,
    };

    this.handleCurrentRecipeChange = this.handleCurrentRecipeChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getRecipeList = this.getRecipeList.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  componentDidMount() {
    this.search();
  }

  getCurrentRecipe() {
    const { recipes, currentRecipeId } = this.state;
    return recipes[currentRecipeId];
  }

  getRecipeList() {
    const { recipes, currentRecipeId, entries } = this.state;
    const { filter } = entries;
    const recipeListEntries = [];
    const keys = Object.keys(recipes);
    keys.forEach((id) => {
      const current = recipes[id];
      if (currentRecipeId !== id) {
        if ((filter !== '') && current.label.toLowerCase().includes(filter.toLowerCase())) {
          recipeListEntries.push(current);
        } else if (filter === '') {
          recipeListEntries.push(recipes[id]);
        }
      }
    });
    return recipeListEntries;
  }

  search(query) {
    searchEdamam(query)
      .then(response => response.json())
      .then(results => parseRecipes(results))
      .then(recipes => this.setState({ recipes }))
      .catch(err => console.log(`Error: ${err}`));
  }

  handleChange(key, text) {
    const { entries } = this.state;
    entries[key] = text;
    this.setState({ entries, viewRecipe: false });
  }

  handleSearch() {
    const { entries } = this.state;
    const { search } = entries;
    this.search(search);
  }

  handleCurrentRecipeChange(currentRecipeId) {
    window.scrollTo(0, 0);
    this.setState({ currentRecipeId, viewRecipe: true });
  }

  showAll() {
    const entries = { filter: '', search: '' };
    this.setState({ entries, viewRecipe: false });
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
              handleChange={this.handleChange}
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
