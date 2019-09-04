import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Navbar = props => {
  return (
    <navbar className='navbar bg-primary'>
      <h1>
        <i className='fab fa-github' />
        {props.title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About </Link>
        </li>
      </ul>
    </navbar>
  );
};
Navbar.defaultProps = {
  title: 'GitHub Finder'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};
export default Navbar;
