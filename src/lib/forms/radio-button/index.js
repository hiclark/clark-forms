import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

import RequiredAsterisk from '../required-asterisk';
import media from '../../styles/media-queries';
import { SPACING_SMALL } from '../../styles/spacing';
import { TYPE_SCALE_F5 } from '../../styles/type-scale';
import { CLARK_TERTIARY, WHITE } from '../../styles/colors';
import { BORDER_RADIUS_F3 } from '../../styles/border-radius';
import { BORDER_WIDTH_2 } from '../../styles/borders';

const RadioButton = ({ name, label, index, value, placeholder, icon, required }) => (
  <RadioButtonContainer>
    <Radio
      name={name}
      component="input"
      value={value}
      placeholder={placeholder}
      type="radio"
      index={index}
    />
    <Icon>{icon}</Icon>
    <Label htmlFor={name}>
      {label}
      {required && <RequiredAsterisk />}
    </Label>
  </RadioButtonContainer>
);

export default RadioButton;

const Radio = styled(Field)`
  color: ${CLARK_TERTIARY};
  appearance: none;
  bottom: 0;
  cursor: pointer;
  display: block;
  left: 0;
  position: absolute;
  outline: none;
  margin: 0;
  right: 0;
  top: 0;
  width: 100%;
  transition: all 0.25s ease-in-out;
`;

const RadioButtonContainer = styled.div`
  ${BORDER_RADIUS_F3};
  align-items: center;
  border: ${BORDER_WIDTH_2} solid ${CLARK_TERTIARY};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 105px;
  position: relative;
  text-align: center;
  z-index: 999;

  ${media.small`
    height: 150px;
  `};

  /* TODO: this is not ideal, find a more elegant way to address checked state
     tring to keep this logic in the component itself.
  */
  > ${Radio}:checked {
    background-color: ${CLARK_TERTIARY};
    z-index: 0;
  }

  > ${Radio}:checked ~ label {
    color: ${WHITE};
    position: relative;
  }

  > ${Radio}:checked ~ div {
    color: ${WHITE};
    position: relative;
  }
`;

const Icon = styled.div`
  color: ${CLARK_TERTIARY};
  display: block;
  margin: 0 auto ${SPACING_SMALL} auto;
  width: 30px;
  transition: all 0.25s ease-in-out;
`;

const Label = styled.label`
  ${TYPE_SCALE_F5};
  color: ${CLARK_TERTIARY};
  display: block;
  transition: all 0.25s ease-in-out;
`;
