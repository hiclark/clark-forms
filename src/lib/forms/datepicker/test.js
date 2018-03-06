import React from 'react';

import DatePicker from './';

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
    datepicker = wrapper.find('Field');
    label = wrapper.find('label');
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
