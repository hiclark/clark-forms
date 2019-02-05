import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';
import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLORS,
  FONT_WEIGHT,
  SPACING,
  TYPE_SCALE,
} from 'clark-styles';

const { CIRCLE } = BORDER_RADIUS;
const { BW_1 } = BORDER_WIDTH;
const { CLARK_SECONDARY, GREY_25, GREY_100, WHITE } = COLORS;
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
  <RadioButtonGroup>
    {values.map(({ value, label }) => {
      const isSelected = value === input.value;
      const onClickHandler = () => {
        const newValue = isSelected ? null : value;
        input.onChange(newValue);
      };
      return (
        <Wrapper>
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
          <Label htmlFor={name}>{label}</Label>
        </Wrapper>
      );
    })}
  </RadioButtonGroup>
);

export default (props: PropsType) => <Field component={RadioButton} {...props} />;

const POSITIONAL_SPACER = `calc(${S_05} + ${S_1})`;

const RadioButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  margin-bottom: ${S_1};
  display: flex;
  align-items: center;
`;

const OuterRadio = styled.div`
  ${CIRCLE};
  border: ${BW_1} solid ${GREY_25};
  width: ${POSITIONAL_SPACER};
  height: ${POSITIONAL_SPACER};
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
    width: ${S_1};
    height: ${S_1};
    background-color: ${WHITE};
    top: -1px;
    left: -2px;
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
  color: ${GREY_100};
  margin-left: calc(${S_025} + ${S_05});
  display: block;
`;
