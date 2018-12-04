const searchEdamam = (query = '') => fetch(`/api/recipes?q=${query}`, { method: 'GET' });

export default searchEdamam;
