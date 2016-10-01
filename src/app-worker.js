import WorkerDom from 'react-worker-dom/worker/index.js';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDom from 'react-dom';
import One from './One';

ReactDom.render(
  <AppContainer>
    <One />
  </AppContainer>, WorkerDom);

if (module.hot) {
  module.hot.accept('./One', () => {
    ReactDom.render(
      <AppContainer>
        <One />
      </AppContainer>,
      WorkerDom
    );
  });
}
