import React from 'react';

import DatePicker, { renderDatePicker } from './';

describe('renderDatePicker', () => {
  it('renders correctly', () => {
    const props = { input: {}, meta: { touched: false, error: false } };
    expect(shallow(renderDatePicker(props))).toMatchSnapshot();
  });
});

describe('<DatePicker />', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      onCheckboxClick: jest.fn(),
      name: 'Name',
      label: 'Label',
      index: 1,
      value: false,
    };
    wrapper = shallow(<DatePicker {...props} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
