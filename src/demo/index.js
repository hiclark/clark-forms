/* eslint no-unused-expressions: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { injectGlobal } from 'styled-components';

import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

import Demo from './containers/demo';

import GraphikLight from './assets/fonts/Graphik-Light.woff';
import GraphikLight2 from './assets/fonts/Graphik-Light.woff2';
import GraphikMedium from './assets/fonts/Graphik-Medium.woff';
import GraphikMedium2 from './assets/fonts/Graphik-Medium.woff2';
import GraphikSemibold from './assets/fonts/Graphik-Semibold.woff';
import GraphikSemibold2 from './assets/fonts/Graphik-Semibold.woff2';

const store = configureStore();
const target = document.getElementById('root');

if (!target) {
  throw Error('no element with id "root" exists');
}

ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <Demo />
    </AppContainer>
  </Provider>,
  target,
);

registerServiceWorker();

injectGlobal`
  @font-face {
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 100;
    src: url(${GraphikLight}) format('woff2'),
         url(${GraphikLight2}) format('woff');
  }

  @font-face {
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 400;
    src: url(${GraphikMedium}) format('woff2'),
         url(${GraphikMedium2}) format('woff');
  }

  @font-face {
    font-family: 'Graphik';
    font-style: normal;
    font-weight: 700;
    src: url(${GraphikSemibold}) format('woff2'),
         url(${GraphikSemibold2}) format('woff');
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
    height: 100%;
  }

  body {
    font-family: 'Graphik';
    margin: 0;
    position: relative;
    line-height: 1;
    min-height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
