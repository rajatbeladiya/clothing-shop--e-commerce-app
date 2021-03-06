import React, { Component } from 'react';

import SHOP_DATA from './ShopData';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {
          collections.map(({ id, ...otherCollectionprops }) => (
            <CollectionPreview
              key={id}
              {...otherCollectionprops} // eslint-disable-line
            />
          ))
        }
      </div>
    );
  }
}

export default Shop;
