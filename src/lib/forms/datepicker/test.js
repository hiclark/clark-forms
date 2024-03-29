import React from 'react';

import DatePicker, { SingleDatePickerField } from './';

describe('SingleDatePickerField', () => {
  it('renders correctly', () => {
    const props = { input: {}, meta: { touched: false, error: false } };
    const wrapper = shallow(<SingleDatePickerField {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<DatePicker />', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      columns: 2,
      onCheckboxClick: jest.fn(),
      name: 'Name',
      label: 'Label',
      value: false,
    };
    wrapper = shallow(<DatePicker {...props} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<DatePicker />', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      columns: 2,
      onCheckboxClick: jest.fn(),
      name: 'Name',
      label: 'Label',
      value: false,
      openDirection: 'up',
    };
    wrapper = shallow(<DatePicker {...props} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
