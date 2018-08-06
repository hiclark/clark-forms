// @flow

import React from 'react';

import Checkbox from './';

describe('<Checkbox />', () => {
  const props = {
    onCheckboxClick: jest.fn(),
    checked: true,
    name: 'Name',
    index: 1,
    value: false,
  };

  describe('when checked is true', () => {
    const wrapper = shallow(<Checkbox {...props} />);

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('with label', () => {
    const propsWithLabel = { ...props, label: 'Label' };
    const wrapper = shallow(<Checkbox {...propsWithLabel} />);

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when checked is false', () => {
    const propsWithLabel = { ...props, checked: false };
    const wrapper = shallow(<Checkbox {...propsWithLabel} />);

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
