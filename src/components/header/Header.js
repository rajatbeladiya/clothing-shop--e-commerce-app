import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';
import { auth } from '../../utils/firebase';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">SHOP</Link>
      <Link to="/contact" className="option">CONTACT</Link>
      {
        currentUser
          ? (
            <Link
              to="/"
              className="option"
              onClick={(e) => {
                e.preventDefault();
                auth.signOut();
              }}
            >
              SIGN OUT
            </Link>
          )
          : (
            <Link
              to="/sign-in"
              className="option"
            >
              SIGN IN
            </Link>
          )
      }
    </div>
  </div>
);

Header.propTypes = {
  currentUser: PropTypes.instanceOf(Object),
};

Header.defaultProps = {
  currentUser: {},
};

export default Header;
