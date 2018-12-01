import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleSearch, type }) => {
  const btn = (type === 'search')
  ?
    (
      <button type="button" className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search" />
      </button>
    )
    : '';
  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        placeholder={type}
        onChange={e => handleSearch(e.target.value)}
      />
      {btn}
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Search;
