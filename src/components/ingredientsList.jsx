import IngredientsListEntry from './ingredientsListEntry.js';

const IngredientsList = (props) => {
  const { ingredients } = props;
  const ingredient = ingredients.map(i => <IngredientsListEntry item={i} key={i.name} />);
  return (
    <div className="recipe-viewer">
      <ul>
        {ingredient}
      </ul>
    </div>
  );
};

IngredientsList.propTypes = {
  ingredients: React.PropTypes.array.isRequired,
};

export default IngredientsList;
