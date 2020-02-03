import React from 'react';
import PropTypes from 'prop-types';

import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
      items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem
            key={id}
            {...otherItemProps} // eslint-disable-line
          />
        ))
      }
    </div>
  </div>
);

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.instanceOf(Array),
};

CollectionPreview.defaultProps = {
  title: '',
  items: [],
};

export default CollectionPreview;
