import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';

const Nav = ({ handleSearch, homeNav }) => (
  <div className="search-bar form-inline">
    <button
      type="button"
      className="btn hidden-sm-down"
      onClick={homeNav}
    >
      Home
    </button>
    <button type="button" className="btn hidden-sm-down">
      MyList
    </button>
    <Search handleSearch={handleSearch} />
  </div>
);

Nav.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  homeNav: PropTypes.func.isRequired,
};

export default Nav;
