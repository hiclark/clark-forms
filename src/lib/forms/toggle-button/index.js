import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';
import Label from '../label';
import Error from '../error';
import { TYPE_SCALE_F4 } from '../../styles/type-scale';
import { SPACING_SMALL } from '../../styles/spacing';
import { BORDER_RADIUS_F2 } from '../../styles/border-radius';
import { CLARK_PRIMARY, GREY_25, WHITE } from '../../styles/colors';
import { FONT_WEIGHT_100 } from '../../styles/font-weight';

const ToggleButton = ({ values, input, meta: { touched, error }, disabled }) => (
  <div>
    <ButtonContainer disabled={disabled}>
      {values.map(({ value, label }) => {
        const isSelected = value === input.value;
        const onClick = () => {
          if (disabled) {
            return;
          }
          const newValue = isSelected ? null : value;
          input.onChange(newValue);
        };
        return (
          <Button key={label} selected={isSelected} onClick={onClick} disabled={disabled}>
            {label}
          </Button>
        );
      })}
    </ButtonContainer>
    <Error touched={touched} error={error} />
  </div>
);

type PropsType = any;
export default (props: PropsType) => (
  <div>
    <Label
      name={props.name}
      label={props.label}
      required={props.required}
      disabled={props.disabled}
    />
    <Field component={ToggleButton} {...props} />
  </div>
);

const bgColorChooser = (selected, disabled) => {
  if (selected && disabled) {
    return GREY_25;
  } else if (selected && !disabled) {
    return CLARK_PRIMARY;
  }

  return WHITE;
};

const colorChooser = (selected, disabled) => {
  if (!selected && !disabled) {
    return CLARK_PRIMARY;
  } else if (!selected && disabled) {
    return GREY_25;
  }

  return WHITE;
};

const Button = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  color: ${({ selected, disabled }) => colorChooser(selected, disabled)};
  background-color: ${({ selected, disabled }) => bgColorChooser(selected, disabled)};
  border-left: 1px solid ${({ disabled }) => (disabled ? GREY_25 : CLARK_PRIMARY)};
  &:first-child {
    border: 0;
  }
  ${TYPE_SCALE_F4};
  ${FONT_WEIGHT_100};
  padding: ${SPACING_SMALL};
  height: 44px;
`;

const ButtonContainer = styled.div`
  border: 1px solid ${({ disabled }) => (disabled ? GREY_25 : CLARK_PRIMARY)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${BORDER_RADIUS_F2};
`;
