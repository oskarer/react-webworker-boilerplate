import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './One.scss';
import OneOne from './OneOne';

class One extends React.Component {
  render() {
    return <div styleName='one'>
      Test shos
      <OneOne />
    </div>;
  }
}

export default CSSModules(One, styles);
