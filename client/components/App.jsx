import React from 'react';
import LoginModal from './LoginModal';
import Nav from './Nav';
import RecipeList from './RecipeList';
import RecipeViewer from './RecipeViewer';
import searchEdamam from '../lib/searchEdamam';
import parseRecipes from '../lib/parseRecipes';

const ESCAPE_KEY = 27;

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
        recipes: null,
        error: '',
      },

      recipes: null,
      currentRecipe: null,
      recentAdded: false,
      viewRecipe: false,
      showMyRecipes: false,
      loggedIn: true,
    };

    this.handleCurrentRecipeChange = this.handleCurrentRecipeChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleViewerClose = this.handleViewerClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getRecipeList = this.getRecipeList.bind(this);
    this.login = this.login.bind(this);
    this.showAll = this.showAll.bind(this);
    this.showMyList = this.showMyList.bind(this);
  }

  componentDidMount() {
    this.search();
    document.addEventListener('keyup', this.handleViewerClose, false);
  }

  getRecipeList(recipesToFilter) {
    const { currentRecipeId, entries } = this.state;
    const { filter } = entries;
    const recipeListEntries = [];
    const keys = Object.keys(recipesToFilter);
    keys.forEach((id) => {
      const current = recipesToFilter[id];
      if (currentRecipeId !== id) {
        if ((filter !== '') && current.label.toLowerCase().includes(filter.toLowerCase())) {
          recipeListEntries.push(current);
        } else if (filter === '') {
          recipeListEntries.push(recipesToFilter[id]);
        }
      }
    });
    return recipeListEntries;
  }

  search(query) {
    searchEdamam(query)
      .then(response => response.json())
      .then(results => parseRecipes(results.data))
      .then(recipes => this.setState({ recipes, showMyRecipes: false, viewRecipe: false }))
      .catch(err => console.log(`Error: ${err}`));
  }

  handleViewerClose(event) {
    if (event.keyCode === ESCAPE_KEY) {
      this.setState({ viewRecipe: false });
    }
  }

  handleAdd(id) {
    const { session, recipes } = this.state;
    window.scrollTo(0, 0);
    session.recipes = (session.recipes === null) ? {} : session.recipes;
    session.recipes[id] = recipes[id];
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(Object.values(session.recipes)),
    };

    fetch(`/api/users/${session.username}/recipes`, options)
      .then(res => res.json())
      .then(() => {
        setTimeout(this.setState.bind(this), 5000, { recentAdded: false });
        this.setState({ session, viewRecipe: false, recentAdded: true });
      });
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

  handleCurrentRecipeChange(id) {
    const { recipes, session, showMyRecipes } = this.state;
    window.scrollTo(0, 0);
    const currentRecipe = (showMyRecipes) ? session.recipes[id] : recipes[id];
    this.setState({ currentRecipe, viewRecipe: true });
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
        session.recipes = {};
        res.data.forEach((recipe) => { session.recipes[recipe.id] = recipe; });
        this.setState({ session, showMyRecipes: true, viewRecipe: false });
      });
  }

  showAll() {
    const entries = { filter: '', search: '' };
    window.history.pushState({ loc: 'home' }, 'home', '/');
    this.setState({
      entries,
      viewRecipe: false,
      showMyRecipes: false,
      currentRecipe: null,
    });
  }

  renderRecipes() {
    const {
      viewRecipe,
      recentAdded,
      showMyRecipes,
      currentRecipe,
      recipes,
      session,
    } = this.state;
    const recipesToFilter = (showMyRecipes) ? session.recipes : recipes;
    const cb = (showMyRecipes) ? () => {} : this.addToMyRecipes;

    const list = (recipesToFilter === null) ? 'Loading...'
      : (
        <RecipeList
          recipes={this.getRecipeList(recipesToFilter)}
          addRecipe={cb}
          onCurrentRecipeChange={this.handleCurrentRecipeChange}
        />
      );

    let current = '';
    if (viewRecipe) {
      current = (
        <RecipeViewer
          recipe={currentRecipe}
          handleAdd={this.handleAdd}
        />
      );
    } else if (recentAdded) {
      current = (<h1>{`${currentRecipe.label} added!`}</h1>);
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
              username={session.username}
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
