const parseRecipes = (recipes) => {
  console.log('incoming from server', recipes);
  const cleaned = recipes.reduce((recipesAll, rec) => {
    const entry = Object.assign({}, rec);
    const { _id } = entry;
    entry.id = _id;
    recipesAll[entry.id] = entry;
    return recipesAll;
  }, {});
  return cleaned;
};

export default parseRecipes;
