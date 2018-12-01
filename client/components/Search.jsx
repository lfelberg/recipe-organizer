import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleSearch, handleChange, type }) => {
  let btn = '';
  if (type === 'search') {
    btn = (
      <button
        type="button"
        className="btn hidden-sm-down"
        onClick={handleSearch}
      >
        <span className="glyphicon glyphicon-search" />
      </button>
    );
  }

  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        placeholder={type}
        onChange={e => handleChange(type, e.target.value)}
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
