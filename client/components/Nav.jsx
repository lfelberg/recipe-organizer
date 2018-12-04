import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';

const Nav = ({
  handleChange,
  handleSearch,
  homeNav,
  myList,
  username,
}) => (
  <div className="search-bar form-inline">
    <button
      type="button"
      className="btn hidden-sm-down"
      onClick={homeNav}
    >
      Home
    </button>
    <button
      type="button"
      className="btn hidden-sm-down"
      onClick={myList}
    >
      MyList
    </button>
    <Search handleChange={handleChange} handleSearch={() => {}} type="filter" />
    <h2>{`Welcome ${username}!`}</h2>
    <Search handleChange={handleChange} handleSearch={handleSearch} type="search" />
  </div>
);

Nav.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  homeNav: PropTypes.func.isRequired,
  myList: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default Nav;
