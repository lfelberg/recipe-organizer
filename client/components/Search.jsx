import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleSearch }) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      onChange={e => handleSearch(e.target.value)}
    />
    <button type="button" className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search" />
    </button>
  </div>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
