import React from 'react';
import LoginModal from './LoginModal';
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
      session: {
        username: 'lisa',
        password: 'lisa',
        recipes: [],
        error: '',
      },

      recipes: null,
      currentRecipeId: null,
      viewRecipe: false,
      showMyRecipes: false,
      loggedIn: true,
    };

    this.handleCurrentRecipeChange = this.handleCurrentRecipeChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getRecipeList = this.getRecipeList.bind(this);
    this.login = this.login.bind(this);
    this.showAll = this.showAll.bind(this);
    this.showMyList = this.showMyList.bind(this);
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

  handleAdd(id) {
    const { session, recipes } = this.state;
    session.recipes.push(recipes[id]);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(session),
    };

    fetch(`/api/users/${session.username}/recipes`, options)
      .then(res => res.json())
      .then(() => this.setState({ session }));
  }

  handleChange(key, text, type = 'search') {
    const { entries, session } = this.state;
    if (type === 'session') {
      session[key] = text;
    } else {
      entries[key] = text;
    }
    this.setState({ entries, session, viewRecipe: false });
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

  login(loginExists = true) {
    const { session } = this.state;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(session),
    };
    const entryType = (loginExists) ? '/login' : '/signup';
    fetch(entryType, options)
      .then(res => res.json())
      .then((res) => {
        const { data } = res;
        if (typeof data === 'string') {
          session.error = data;
          this.setState({ loggedIn: false, session });
        } else {
          session.error = '';
          this.setState({ loggedIn: true, session: data });
        }
      });
  }

  showMyList() {
    const pathname = '/my-recipes';
    const { session } = this.state;
    // window.history.pushState({ loc: 'myrecipes' }, 'my recipes', pathname);
    fetch(`/api/users/${session.username}/recipes`)
      .then(res => res.json())
      .then((res) => {
        session.recipes = res.data;
        this.setState({ showMyRecipes: true, session });
      });
  }

  showAll() {
    const entries = { filter: '', search: '' };
    window.history.pushState({ loc: 'home' }, 'home', '/');
    this.setState({
      entries,
      viewRecipe: false,
      showMyRecipes: false,
      currentRecipeId: null,
    });
  }

  renderRecipes() {
    const {
      viewRecipe,
      showMyRecipes,
      recipes,
      session,
    } = this.state;
    let list = (recipes === null) ? 'Loading...'
      : (
        <RecipeList
          recipes={this.getRecipeList()}
          addRecipe={this.addToMyRecipes}
          onCurrentRecipeChange={this.handleCurrentRecipeChange}
        />
      );

    if (showMyRecipes) {
      list = (
        <RecipeList
          recipes={session.recipes}
          onCurrentRecipeChange={this.handleCurrentRecipeChange}
        />
      );
    }

    let current = '';
    if (viewRecipe) {
      current = (
        <RecipeViewer
          recipe={this.getCurrentRecipe()}
          handleAdd={this.handleAdd}
        />
      );
    }

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-8 offset-md-2">
            <Nav
              homeNav={this.showAll}
              myList={this.showMyList}
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

  render() {
    const {
      loggedIn,
      session,
    } = this.state;

    if (!loggedIn) {
      return (
        <LoginModal
          handleChange={this.handleChange}
          handleSubmit={this.login}
          error={session.error}
        />
      );
    }
    return this.renderRecipes();
  }
}

export default App;
