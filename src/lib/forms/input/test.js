import React from 'react';

import Input from './';

describe('<Input />', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      name: '',
      label: '',
      copy: '',
      inputType: 'text',
      required: true,
      disabled: false,
      tooltip: null,
      hasShowHideButton: false,
      stripped: true,
    };
    wrapper = shallow(<Input {...props} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
