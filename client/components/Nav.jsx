import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';

const Nav = () => (
  <div className="search-bar form-inline">
    <button type="button" className="btn hidden-sm-down">
      Home
    </button>
    <button type="button" className="btn hidden-sm-down">
      MyList
    </button>
    <Search />
  </div>
);

export default Nav;
