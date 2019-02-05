import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';
import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLORS,
  Flex,
  FONT_WEIGHT,
  SPACING,
  TYPE_SCALE,
} from 'clark-styles';

const { CIRCLE } = BORDER_RADIUS;
const { BW_1 } = BORDER_WIDTH;
const { CLARK_SECONDARY, GREY_25, GREY_50, GREY_100, WHITE } = COLORS;
const { FW_100 } = FONT_WEIGHT;
const { S_025, S_05, S_1 } = SPACING;
const { TS_5 } = TYPE_SCALE;

type PropsType = {
  name: string,
  label: string,
  index: number,
  value: boolean,
};

const RadioButton = ({ values, name, index, input }: PropsType) => (
  <Flex flexDirection="column">
    {values.map(({ value, label }) => {
      const isSelected = value === input.value;
      const onClickHandler = () => {
        const newValue = isSelected ? null : value;
        input.onChange(newValue);
      };
      return (
        <Flex alignItems="center" margin={`0 0 ${S_1} 0`}>
          <OuterRadio>
            <InnerRadio
              component="input"
              index={index}
              name={name}
              onClick={onClickHandler}
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
    })}
  </Flex>
);

export default (props: PropsType) => <Field component={RadioButton} {...props} />;

const TOP_SPACING = '-1px';
const LEFT_SPACING = '-2px';
const DIMENSIONAL_SPACING = `calc(${S_05} + ${S_1})`;

const OuterRadio = styled.div`
  ${CIRCLE};
  background-color: ${WHITE};
  border: ${BW_1} solid ${GREY_25};
  width: ${DIMENSIONAL_SPACING};
  height: ${DIMENSIONAL_SPACING};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerRadio = styled(Field)`
  ${CIRCLE};
  align-items: center;
  margin-bottom: ${S_025};
  cursor: pointer;

  &:after {
    ${CIRCLE};
    top: ${TOP_SPACING};
    left: ${LEFT_SPACING};
    width: ${S_1};
    height: ${S_1};
    background-color: ${WHITE};
    position: relative;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;

    ${({ selected }) => selected && `background-color: ${CLARK_SECONDARY}`};
  }
`;

const Label = styled.label`
  ${TS_5};
  ${FW_100};
  color: ${({ hasInput, isSelected }) => (hasInput && !isSelected ? GREY_50 : GREY_100)};
  margin-left: calc(${S_025} + ${S_05});
  display: block;
`;
