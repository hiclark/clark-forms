import React from 'react';

import Checkbox from './';

describe('<Checkbox />', () => {
  let wrapper;
  let checkbox;
  let label;

  beforeEach(() => {
    const props = {
      onCheckboxClick: jest.fn(),
      checked: true,
      name: 'Name',
      label: 'Label',
      index: 1,
      value: false,
    };
    wrapper = shallow(<Checkbox {...props} />);
    checkbox = wrapper.find('Field');
    label = wrapper.find('label');
  });

  describe('<Checkbox /> field renders props correctly', () => {
    test('render value prop', () => {
      expect(checkbox.prop('value')).toBeFalsy();
    });

    test('render index prop', () => {
      expect(checkbox.prop('index')).toEqual(1);
    });

    test('render name prop', () => {
      expect(checkbox.prop('name')).toMatch('Name');
    });
  });

  describe('<Checkbox /> label renders correctly', () => {
    test('render label text', () => {
      expect(
        label
          .find('checkbox__LabelText')
          .render()
          .text(),
      ).toEqual('Label');
    });

    test('render label icon', () => {
      expect(
        label
          .find('checkbox__CheckboxLabel')
          .childAt(0)
          .type(),
      ).toEqual('toggle-on.svg');
    });

    test('simulates onCheckboxClick click event', () => {
      expect(label.props().onClick).toHaveBeenCalledTimes(0);
      label.simulate('click');
      expect(label.props().onClick).toHaveBeenCalledTimes(1);
    });

    test('onCheckboxClick click event renders icon correctly', () => {
      expect(
        wrapper
          .find('label')
          .find('checkbox__CheckboxLabel')
          .childAt(0)
          .type(),
      ).toEqual('toggle-on.svg');
      wrapper.setProps({ checked: false });
      expect(
        wrapper
          .find('label')
          .find('checkbox__CheckboxLabel')
          .childAt(0)
          .type(),
      ).toEqual('toggle-off.svg');
    });
  });

  test('snapshot test <Checkbox />', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
