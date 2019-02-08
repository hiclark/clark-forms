// @flow

import React from 'react';
import { Field, type FormProps } from 'redux-form';
import Checkbox from './checkbox';

const group = ({ input, options }) => {
  const { onChange } = input;
  const inputValue = input.value;

  const checkboxes = options.map(({ disabled, label, value }, index) => {
    const handleChange = () => {
      const arr = [...inputValue];
      if (arr.includes(value)) {
        arr.splice(arr.indexOf(value), 1);
      } else {
        arr.push(value);
      }
      return onChange(arr);
    };

    const checked = inputValue.includes(value);
    return (
      <Checkbox
        checked={checked}
        disabled={disabled}
        handleChange={handleChange}
        hasInput={!!input.value}
        index={index}
        label={label}
        name={label}
        value={value}
      />
    );
  });

  return <div>{checkboxes}</div>;
};

type PropsType = {
  options: Array<{ label: any, value: string }>,
  input: FormProps,
};

const CheckboxGroup = (props: PropsType) => <Field component={group} {...props} />;

export default CheckboxGroup;
