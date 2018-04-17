import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

import Error from '../error';
import { SPACING_EXTRA_SMALL, SPACING_SMALL } from '../../styles/spacing';
import { BORDER_RADIUS_F2 } from '../../styles/border-radius';
import { TYPE_SCALE_F4, TYPE_SCALE_F6 } from '../../styles/type-scale';
import { FONT_FAMILY_PRIMARY } from '../../styles/font-family';
import { FONT_WEIGHT_100 } from '../../styles/font-weight';
import { BORDER_WIDTH_1, renderBorderRadius } from '../../styles/borders';
import { LINE_HEIGHT_SOLID, LINE_HEIGHT_COPY } from '../../styles/line-height';
import { WHITE, CLARK_PRIMARY, CLARK_SECONDARY, GREY_25, ERROR_PRIMARY } from '../../styles/colors';
import Label from '../label';

const renderField = ({
  input,
  inputType,
  index,
  min,
  max,
  placeholder,
  columns,
  meta: { touched, error },
}) => (
  <div>
    <FormInput
      {...input}
      type={inputType}
      min={min}
      max={max}
      index={index}
      placeholder={placeholder}
      columns={columns}
      showError={!(error && touched)}
    />
    <Error touched={touched} error={error} />
  </div>
);

const Input = props => {
  const { name, label, copy, inputType, required, min, max } = props;
  return (
    <div>
      <Label name={name} label={label} required={required} />

      {copy && <Copy>{copy}</Copy>}
      <Field component={renderField} inputType={inputType} min={min} max={max} {...props} />
    </div>
  );
};

export default Input;

const FormInput = styled.input`
  ${TYPE_SCALE_F4};
  ${FONT_FAMILY_PRIMARY};
  ${FONT_WEIGHT_100};
  ${BORDER_RADIUS_F2};
  border: ${BORDER_WIDTH_1} solid ${props => (props.showError ? GREY_25 : CLARK_PRIMARY)};
  color: ${CLARK_SECONDARY};
  display: block;
  line-height: ${LINE_HEIGHT_SOLID};
  padding: calc(${SPACING_EXTRA_SMALL} + ${SPACING_SMALL});
  position: relative;
  outline: none;
  width: 100%;
  margin-bottom: ${props => (props.showError ? 0 : SPACING_SMALL)};
  background-color: ${props => (props.showError ? WHITE : ERROR_PRIMARY)};
  transition: all 0.25s ease-in-out;
  z-index: ${props => (props.showError ? 0 : 9)};
  ${props => renderBorderRadius(props)};

  &::placeholder {
    color: ${GREY_25};
  }
`;

const Copy = styled.div`
  ${TYPE_SCALE_F6};
  ${FONT_WEIGHT_100};
  ${LINE_HEIGHT_COPY};
  color: ${CLARK_SECONDARY};
  margin-bottom: ${SPACING_SMALL};
`;
