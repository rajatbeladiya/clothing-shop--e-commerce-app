import React from 'react';
import PropTypes from 'prop-types';

const CollectionItem = ({
  id, name, price, imageUrl,
}) => (
  <div className="collection-item" key={id}>
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{`$${price}`}</span>
    </div>
  </div>
);

CollectionItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
};

CollectionItem.defaultProps = {
  id: 0,
  name: '',
  price: 0,
  imageUrl: '',
};

export default CollectionItem;
