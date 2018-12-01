import React from 'react';
import PropTypes from 'prop-types';

const Search = () => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button type="button" className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search" />
    </button>
  </div>
);

export default Search;