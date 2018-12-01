import { v1 } from 'uuid';

const parseRecipes = (recipes) => {
  const recArray = Array.from(recipes);
  const cleaned = recArray.reduce((recipesAll, rec) => {
    const entry = Object.assign({}, rec.recipe);
    const uuid = v1();
    entry.id = uuid;
    recipesAll[uuid] = entry;
    return recipesAll;
  }, {});
  return cleaned;
};

export default parseRecipes;
