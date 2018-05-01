import React from 'react';

import Rating from './';
import Check from '../../../demo/assets/icons/check.svg';

const RATING = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
];

const RATING_KEY = { left: 'Left', right: 'Right' };

describe('<Rating />', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      name: 'rating',
      values: RATING,
      ratingKey: RATING_KEY,
      icon: <Check />,
    };
    wrapper = shallow(<Rating {...props} />);
  });

  describe('<Rating />', () => {
    test('renders correctly', () => {
      expect(wrapper).toHaveLength(1);
    });

    test('render name prop', () => {
      expect(wrapper.prop('name')).toMatch('rating');
    });

    test('render values prop', () => {
      expect(wrapper.prop('values')).toEqual(RATING);
    });

    test('render ratingKey prop', () => {
      expect(wrapper.prop('ratingKey')).toEqual(RATING_KEY);
    });

    test('render icon prop', () => {
      expect(wrapper.prop('icon')).toEqual(<Check />);
    });
  });

  test('snapshot test <Rating />', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
