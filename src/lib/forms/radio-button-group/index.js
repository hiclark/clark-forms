// @flow

import React, { type Node } from 'react';
import { Field, type FormProps } from 'redux-form';
import { Flex } from 'clark-styles';
import RadioButton from './radio-button';
import Label from '../label';

const onClickHandler = ({ onChange }, isSelected, value) => {
  const newValue = isSelected ? null : value;
  onChange(newValue);
};

type ValueType = string | number;

type ButtonGroupPropsType = {
  index: number,
  input: FormProps,
  label: string,
  name: string,
  required: boolean,
  stripped: ?boolean,
  values: Array<{ label: string, value: ValueType }>,
};

const RadioButtonGroup = ({
  values,
  label,
  name,
  index,
  input,
  required,
  stripped,
}: ButtonGroupPropsType) => (
  <Flex flexDirection="column">
    {!stripped && <Label name={name} label={label} required={required} />}
    {values.map(
      ({ value, label: buttonLabel }): Node => (
        <RadioButton
          key={value}
          index={index}
          input={input}
          isSelected={value === input.value}
          label={buttonLabel}
          name={name}
          onClickHandler={onClickHandler}
          value={value}
        />
      ),
    )}
  </Flex>
);

export default (props: ButtonGroupPropsType) => <Field component={RadioButtonGroup} {...props} />;
