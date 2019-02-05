// @flow

import React from 'react';
import { Field, type FormProps } from 'redux-form';
import { Flex, SPACING } from 'clark-styles';
import { InnerRadio, OuterRadio, Label } from './styles';

type ValueType = string | number;

type ButtonPropsType = {
  index: number,
  input: FormProps,
  isSelected: boolean,
  label: string,
  name: string,
  value: ValueType,
};

const onClickHandler = (input, isSelected, value) => {
  const newValue = isSelected ? null : value;
  input.onChange(newValue);
};

const RadioButton = ({ index, input, isSelected, label, name, value }: ButtonPropsType) => (
  <Flex alignItems="center" margin={`0 0 ${SPACING.S_1} 0`}>
    <OuterRadio>
      <InnerRadio
        component="input"
        index={index}
        name={name}
        onClick={() => onClickHandler(input, isSelected, value)}
        selected={isSelected}
        type="radio"
        value={value}
      />
    </OuterRadio>
    <Label htmlFor={name} hasInput={input.value} isSelected={isSelected}>
      {label}
    </Label>
  </Flex>
);

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
        value={value}
      />
    ))}
  </Flex>
);

export default (props: ButtonGroupPropsType) => <Field component={RadioButtonGroup} {...props} />;
