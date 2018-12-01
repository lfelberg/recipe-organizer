import RecipeListEntry from './RecipeListEntry.js';

const RecipeList = (props) => {
  const { recipes } = props;
  const recipeListEntries = recipes.map(recipe => (
    <RecipeListEntry
      recipe={recipe}
      key={recipe.name}
      onCurrentRecipeChange={props.onCurrentRecipeChange}
    />
  ));

  return (
    <div className="recipe-list">
      {recipeListEntries}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: React.PropTypes.array.isRequired,
  onCurrentRecipeChange: React.PropTypes.func.isRequired,
};

export default RecipeList;
