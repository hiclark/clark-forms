import React from 'react';
import { type FormProps } from 'redux-form';
import { Flex, SPACING } from 'clark-styles';
import { InnerRadio, OuterRadio, Label } from './styles';

type ValueType = string | number;

type ButtonPropsType = {
  index: number,
  input: FormProps,
  isSelected: boolean,
  label: string,
  name: string,
  onClickHandler: (input: any, isSelected: boolean, value: ValueType) => void,
  value: ValueType,
};

const RadioButton = ({
  index,
  input,
  isSelected,
  label,
  name,
  onClickHandler,
  value,
}: ButtonPropsType) => (
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
    <Label htmlFor={name} deselected={!!input.value && !isSelected}>
      {label}
    </Label>
  </Flex>
);

export default RadioButton;
