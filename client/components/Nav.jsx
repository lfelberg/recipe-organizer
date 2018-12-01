import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';

const Nav = ({ handleChange, handleSearch, homeNav }) => (
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
    <Search handleChange={handleChange} handleSearch={() => {}} type="filter" />
    <Search handleChange={handleChange} handleSearch={handleSearch} type="search" />
  </div>
);

Nav.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  homeNav: PropTypes.func.isRequired,
};

export default Nav;
