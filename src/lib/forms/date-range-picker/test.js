import React from 'react';

import DateRangePicker, { DateRangePickerField } from './';

describe('DateRangePickerField', () => {
  it('renders correctly', () => {
    const props = { input: {}, meta: { touched: false, error: false } };
    const wrapper = shallow(<DateRangePickerField {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<DateRangePicker />', () => {
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
    wrapper = shallow(<DateRangePicker {...props} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

// no label
describe('<DateRangePicker /> no label', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      columns: 2,
      onCheckboxClick: jest.fn(),
      name: 'Name',
      value: false,
    };
    wrapper = shallow(<DateRangePicker {...props} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
