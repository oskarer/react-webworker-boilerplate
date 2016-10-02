import React from 'react';
import WorkerDom from 'react-worker-dom/worker/index.js';
import { AppContainer } from 'react-hot-loader';
import Router from 'react-router/HashRouter'
import Link from 'react-router/Link'
import ReactDom from 'react-dom';

// import Root from './Root';
import One from './One';

ReactDom.render(
  <AppContainer>
    <Router>
      <div>
        <Link to="/about">About</Link>
        <One />
      </div>
    </Router>
  </AppContainer>, WorkerDom);

if (module.hot) {
  module.hot.accept('./One', () => {
    ReactDom.render(
      <AppContainer>
        <Router>
          <div>
            <Link to="/about">About</Link>
            <One />
          </div>
        </Router>
      </AppContainer>,
      WorkerDom
    );
  });
}
