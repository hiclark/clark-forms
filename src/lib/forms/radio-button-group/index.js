// @flow

import React from 'react';
import { Field, type FormProps } from 'redux-form';
import { Flex } from 'clark-styles';
import RadioButton from './radio-button';

const onClickHandler = (input, isSelected, value) => {
  const newValue = isSelected ? null : value;
  input.onChange(newValue);
};

type ValueType = string | number;

type ButtonGroupPropsType = {
  index: number,
  input: FormProps,
  name: string,
  values: Array<{ label: string, value: ValueType }>,
};

const RadioButtonGroup = ({ values, name, index, input }: ButtonGroupPropsType) => (
  <Flex flexDirection="column">
    {values.map(({ value, label }) => (
      <RadioButton
        index={index}
        input={input}
        isSelected={value === input.value}
        label={label}
        name={name}
        onClickHandler={onClickHandler}
        value={value}
      />
    ))}
  </Flex>
);

export default (props: ButtonGroupPropsType) => <Field component={RadioButtonGroup} {...props} />;
