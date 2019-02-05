import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

import RequiredAsterisk from '../required-asterisk';
import { SPACING_EXTRA_SMALL, SPACING_SMALL, SPACING_MEDIUM } from '../../styles/spacing';
import { TYPE_SCALE_F5 } from '../../styles/type-scale';
import { CLARK_SECONDARY, GREY_25, WHITE } from '../../styles/colors';
import { BORDER_WIDTH_1 } from '../../styles/borders';
import { BORDER_RADIUS_100 } from '../../styles/border-radius';
import { FONT_WEIGHT_100 } from '../../styles/font-weight';

type PropsType = {
  name: string,
  label: string,
  index: number,
  value: boolean,
  placeholder: boolean,
  required: boolean,
};

const RadioButton = ({ name, label, index, value, placeholder, required }: PropsType) => (
  <RadioButtonGroup>
    <OuterRadio>
      <InnerRadio
        name={name}
        component="input"
        value={value}
        placeholder={placeholder}
        type="radio"
        index={index}
      />
    </OuterRadio>
    <Label htmlFor={name}>
      {label}
      {required && <RequiredAsterisk />}
    </Label>
  </RadioButtonGroup>
);

export default RadioButton;

const OUTER_SPACING = '24px';
const CUSTOM_MARGIN = '4px';
const BUTTON_COLOR = '#00CBC4';

const OuterRadio = styled.div`
  ${BORDER_RADIUS_100};
  border: ${BORDER_WIDTH_1} solid ${GREY_25};
  width: ${OUTER_SPACING};
  height: ${OUTER_SPACING};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerRadio = styled(Field)`
  ${BORDER_RADIUS_100};
  align-items: center;
  margin-bottom: ${CUSTOM_MARGIN};
  cursor: pointer;

  &:after {
    ${BORDER_RADIUS_100};
    width: ${SPACING_MEDIUM};
    height: ${SPACING_MEDIUM};
    background-color: ${WHITE};
    top: -1px;
    left: -2px;
    position: relative;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }

  &:checked:after {
    ${BORDER_RADIUS_100};
    width: ${SPACING_MEDIUM};
    height: ${SPACING_MEDIUM};
    background-color: ${BUTTON_COLOR};
    top: -1px;
    left: -2px;
    position: relative;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }
`;

const RadioButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  ${TYPE_SCALE_F5};
  ${FONT_WEIGHT_100};
  color: ${CLARK_SECONDARY};
  margin-left: calc(${SPACING_EXTRA_SMALL} + ${SPACING_SMALL});
  display: block;
`;
