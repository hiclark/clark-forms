import React from 'react';
import configureStore from 'redux-mock-store';

import Demo from './';

const initialState = {
  form: {},
};
const mockStore = configureStore();
let wrapper;
let store;

beforeEach(() => {
  store = mockStore(initialState);
  wrapper = shallow(<Demo store={store} />);
});

it('snapshot test <Demo />', () => {
  expect(wrapper).toMatchSnapshot();
});
