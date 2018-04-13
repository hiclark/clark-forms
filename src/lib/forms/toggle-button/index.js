import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';
import Label from '../label';
import { TYPE_SCALE_F4 } from '../../styles/type-scale';
import { SPACING_SMALL } from '../../styles/spacing';
import { BORDER_RADIUS_F2 } from '../../styles/border-radius';
import { TEAL } from '../../styles/colors';
import { FONT_WEIGHT_100 } from '../../styles/font-weight';

const ToggleButton = ({ values, input }) => {
  const onChange = value => {
    const selected = value === input.value ? undefined : value;
    input.onChange(selected);
  };

  return (
    <ButtonContainer>
      {values.map(({ value, label }) => (
        <Button key={label} selected={value === input.value} onClick={() => onChange(value)}>
          {label}
        </Button>
      ))}
    </ButtonContainer>
  );
};

export default props => (
  <div>
    <Label name={props.name} label={props.label} required={props.required} />
    <Field component={ToggleButton} {...props} />
  </div>
);

const Button = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  color: ${TEAL};
  ${props =>
    props.selected &&
    `
    background-color: ${TEAL};
    color: white;
  `};

  border-left: 1px solid ${TEAL};
  &:first-child {
    border: 0;
  }
  ${TYPE_SCALE_F4};
  ${FONT_WEIGHT_100};
  padding: ${SPACING_SMALL};
  height: 44px;
`;

const ButtonContainer = styled.div`
  border: 1px solid ${TEAL};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${BORDER_RADIUS_F2};
`;
