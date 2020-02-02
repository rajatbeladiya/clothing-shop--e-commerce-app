import React, { Component } from 'react';

import MenuItem from '../menu-item/MenuItem';
import './directory.scss';

class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: 'HATS',
          imageUrl: 'https://i.pinimg.com/originals/e2/da/fb/e2dafb5b15392598085c755ca08c9a87.jpg',
          id: 1,
          linkUrl: 'hats',
        },
        {
          title: 'JACKETS',
          imageUrl: 'https://74d343bddea1278bf658-a5924997c99da0b7bc8dfec8a1658825.lmsin.net/Max/MX2/Pre%20Landing%20page/Men%20-%20Desktop22oct.jpg',
          id: 2,
          linkUrl: '',
        },
        {
          title: 'SNEAKERS',
          imageUrl: 'https://pmcfootwearnews.files.wordpress.com/2018/05/rexfeatures_762811u.jpg?w=700&h=437&crop=1',
          id: 3,
          linkUrl: '',
        },
        {
          title: 'WOMEN',
          imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          size: 'large',
          id: 4,
          linkUrl: '',
        },
        {
          title: 'MEN',
          imageUrl: 'https://thenypost.files.wordpress.com/2018/06/men-shopping-masculine.jpg?quality=80&strip=all&w=618&h=410&crop=1',
          size: 'large',
          id: 5,
          linkUrl: '',
        },
      ],
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {
          sections.map(({ id, ...restSelectionProps }) => (
            <MenuItem
              key={id}
              {...restSelectionProps} // eslint-disable-line
            />
          ))
        }
      </div>
    );
  }
}

export default Directory;
