/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

import ToggleOff from './toggle-off.svg';
import ToggleOn from './toggle-on.svg';
import ToggleAdd from './toggle_add.svg';
import ToggleSub from './toggle_sub.svg';

import { SPACING_SMALL } from '../../styles/spacing';
import { GREY_75 } from '../../styles/colors';
import { FONT_WEIGHT_100 } from '../../styles/font-weight';
import RequiredAsterisk from '../required-asterisk';

const renderField = ({
  disabled,
  required,
  index,
  label,
  variant,
  input: { name, checked, onChange },
}) => {
  const toggleOn = variant === 'addSub' ? <ToggleSub /> : <ToggleOn />;
  const toggleOff = variant === 'addSub' ? <ToggleAdd /> : <ToggleOff />;

  return (
    <div>
      <HiddenField>
        <Field
          id={`${name}-${index}`}
          name={name}
          disabled={disabled}
          component="input"
          value={checked}
          type="checkbox"
          index={index}
        />
      </HiddenField>

      <label htmlFor={`${name}-${index}`} onClick={onChange} onKeyDown={onChange}>
        <CheckboxLabel disabled={disabled}>
          {checked ? toggleOn : toggleOff}
          <LabelText>
            {label}
            {required && <RequiredAsterisk />}
          </LabelText>
        </CheckboxLabel>
      </label>
    </div>
  );
};

type PropsType = any;
const Checkbox = (props: PropsType) => (
  <div>
    <Field component={renderField} {...props} />
  </div>
);

export default Checkbox;

const HiddenField = styled.div`
  display: none;
`;

const CheckboxLabel = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: ${({ disabled }) => disabled && '0.5'};
`;

const LabelText = styled.p`
  ${FONT_WEIGHT_100};
  color: ${GREY_75};
  margin-left: ${SPACING_SMALL};
`;
