import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './menu-item.scss';

const MenuItem = ({
  title, imageUrl, size, linkUrl, history, match,
}) => (
  <div
    className={`menu-item ${size}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    role="presentation"
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  size: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  linkUrl: PropTypes.string,
  history: PropTypes.instanceOf(Object),
  match: PropTypes.instanceOf(Object),
};

MenuItem.defaultProps = {
  size: '',
  imageUrl: '',
  title: '',
  linkUrl: '',
  history: {},
  match: {},
};

export default withRouter(MenuItem);
