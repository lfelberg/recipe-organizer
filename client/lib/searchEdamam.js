const searchEdamam = (query = 'pie') => fetch(`/api/recipes?q=${query}`, { method: 'GET' });

export default searchEdamam;
