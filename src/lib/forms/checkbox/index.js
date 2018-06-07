/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

import ToggleOff from './toggle-off.svg';
import ToggleOn from './toggle-on.svg';

import { SPACING_SMALL } from '../../styles/spacing';
import { GREY_75 } from '../../styles/colors';
import { FONT_WEIGHT_100 } from '../../styles/font-weight';
import RequiredAsterisk from '../required-asterisk';

const renderField = ({ required, index, label, input: { name, checked, onChange } }) => (
  <div>
    <HiddenField>
      <Field
        id={`${name}-${index}`}
        name={name}
        component="input"
        value={checked}
        type="checkbox"
        index={index}
      />
    </HiddenField>

    <label htmlFor={`${name}-${index}`} onClick={onChange} onKeyDown={onChange}>
      <CheckboxLabel>
        {checked ? <ToggleOn /> : <ToggleOff />}
        <LabelText>
          {label}
          {required && <RequiredAsterisk />}
        </LabelText>
      </CheckboxLabel>
    </label>
  </div>
);

const Checkbox = props => (
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
`;

const LabelText = styled.p`
  ${FONT_WEIGHT_100};
  color: ${GREY_75};
  margin-left: ${SPACING_SMALL};
`;
