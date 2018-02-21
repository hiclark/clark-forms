import React from 'react';

import Textarea from './';

describe('<Textarea />', () => {
  let wrapper;
  let textarea;
  let label;

  beforeEach(() => {
    const props = {
      type: 'textarea',
      name: 'Name',
      label: 'Label',
      index: 1,
      placeholder: 'Placeholder Text',
      showError: false,
      meta: {
        touched: false,
        error: false,
      },
    };
    wrapper = shallow(<Textarea {...props} />);
    textarea = wrapper.find('Field');
    label = wrapper.find('textarea__Label');
  });

  describe('<Textarea /> field renders props correctly', () => {
    test('render name prop', () => {
      expect(textarea.prop('name')).toMatch('Name');
    });

    test('render placeholder prop', () => {
      expect(textarea.prop('placeholder')).toMatch('Placeholder Text');
    });

    test('render type prop', () => {
      expect(textarea.prop('type')).toMatch('textarea');
    });

    test('render index prop', () => {
      expect(textarea.prop('index')).toEqual(1);
    });

    test('render showError prop', () => {
      expect(textarea.prop('showError')).toBeFalsy();
    });
  });

  describe('<Textarea /> label renders correctly', () => {
    test('render label text', () => {
      expect(label.render().text()).toEqual('Label');
    });
  });

  describe('<Textarea /> renders error component correctly', () => {
    test('error component snapshot test', () => {
      expect(textarea).toMatchSnapshot();
      wrapper.setProps({
        meta: {
          touched: true,
          error: true,
        },
      });
      expect(textarea).toMatchSnapshot();
    });
  });

  test('<Textarea /> snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
