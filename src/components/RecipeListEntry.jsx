const RecipeListEntry = (props) => {
  const { name, imageURL } = props.recipe;
  return (
    <div
      className="recipe-list-entry media"
      onClick={() => {
        props.onCurrentRecipeChange(props.recipe.name);
      }}
      key={name}
    >
      <div className="media-left media-middle">
        <img className="media-object" src={imageURL} alt="" />
      </div>
      <div className="media-body">
        <div className="recipe-list-entry-name">
          {name}
        </div>
      </div>
    </div>
  );
};

RecipeListEntry.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  onCurrentRecipeChange: React.PropTypes.func.isRequired,
};

export default RecipeListEntry;
