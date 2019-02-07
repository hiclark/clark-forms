import React from 'react';

import CheckboxGroup from './';

describe('<CheckboxGroup />', () => {
  const props = {
    onCheckboxClick: jest.fn(),
    checked: true,
    name: 'Name',
    index: 1,
    value: false,
  };

  describe('when checked is true', () => {
    const wrapper = shallow(<CheckboxGroup {...props} />);

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('with label', () => {
    const propsWithLabel = { ...props, label: 'Label' };
    const wrapper = shallow(<CheckboxGroup {...propsWithLabel} />);

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when checked is false', () => {
    const propsWithLabel = { ...props, checked: false };
    const wrapper = shallow(<CheckboxGroup {...propsWithLabel} />);

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
