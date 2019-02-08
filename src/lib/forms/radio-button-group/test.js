import React from 'react';

import RadioButtonGroup from './';

const OPTIONS = [
  { value: 1, label: 'List Item 1' },
  { value: 2, label: 'List Item 2' },
  { value: 3, label: 'List Item 3' },
  { value: 4, label: 'List Item 4' },
  { value: 5, label: 'List Item 5' },
];

describe('<RadioButtonGroup />', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      name: 'radioButton',
      type: 'radioButton',
      values: OPTIONS,
    };
    wrapper = shallow(<RadioButtonGroup {...props} />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
