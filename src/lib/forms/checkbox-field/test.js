import React from 'react';

import CheckboxField from './';

describe('<CheckboxField />', () => {
  const props = {
    onCheckboxClick: jest.fn(),
    checked: true,
    name: 'Name',
    index: 1,
    value: false,
  };

  describe('when checked is true', () => {
    const wrapper = shallow(<CheckboxField {...props} />);

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('with label', () => {
    const propsWithLabel = { ...props, label: 'Label' };
    const wrapper = shallow(<CheckboxField {...propsWithLabel} />);

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when checked is false', () => {
    const propsWithLabel = { ...props, checked: false };
    const wrapper = shallow(<CheckboxField {...propsWithLabel} />);

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
