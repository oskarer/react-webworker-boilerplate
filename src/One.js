import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './One.css';
import OneOne from './OneOne';

class One extends React.Component {
  render() {
    return <div styleName='one'>
      Test sho
      <OneOne />
    </div>;
  }
}

export default CSSModules(One, styles);
