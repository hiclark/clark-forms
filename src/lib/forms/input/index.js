import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';
import { ToolTip } from 'clark-styles';

import Error from '../error';
import { SPACING_EXTRA_SMALL, SPACING_SMALL } from '../../styles/spacing';
import { BORDER_RADIUS_F2 } from '../../styles/border-radius';
import { TYPE_SCALE_F4, TYPE_SCALE_F6 } from '../../styles/type-scale';
import { FONT_FAMILY_PRIMARY } from '../../styles/font-family';
import { FONT_WEIGHT_100 } from '../../styles/font-weight';
import { BORDER_WIDTH_1 } from '../../styles/borders';
import { LINE_HEIGHT_SOLID, LINE_HEIGHT_COPY } from '../../styles/line-height';
import { WHITE, CLARK_PRIMARY, CLARK_SECONDARY, GREY_25, ERROR_PRIMARY } from '../../styles/colors';
import Label from '../label';

export type InputType = string;

const renderField = ({ input, inputType, meta: { error, touched }, ...rest }) => (
  <Fragment>
    {/* we rename the inputType prop to avoid a colision with the type attribute
    that is used to specify which form element to render */}
    <FormInput {...rest} {...input} showError={!(error && touched)} type={inputType} />
    <Error touched={touched} error={error} />
  </Fragment>
);

type PropsType = any;
const Input = (props: PropsType) => {
  const { name, label, copy, required, disabled, tooltip } = props;
  return (
    <Fragment>
      <Label name={name} label={label} required={required} disabled={disabled} />
      {copy && <Copy>{copy}</Copy>}
      {tooltip ? (
        <ToolTip
          tipPosition="middle"
          content={tooltip}
          trigger={<Field component={renderField} disabled {...props} />}
        />
      ) : (
        <Field component={renderField} disabled={disabled} {...props} />
      )}
    </Fragment>
  );
};

export default Input;

const FormInput = styled.input`
  ${TYPE_SCALE_F4};
  ${FONT_FAMILY_PRIMARY};
  ${FONT_WEIGHT_100};
  ${BORDER_RADIUS_F2};
  ${LINE_HEIGHT_SOLID};
  border: ${BORDER_WIDTH_1} solid ${props => (props.showError ? GREY_25 : CLARK_PRIMARY)};
  display: block;
  padding: calc(${SPACING_EXTRA_SMALL} + ${SPACING_SMALL});
  position: relative;
  outline: none;
  width: 100%;
  margin-bottom: ${props => (props.showError ? 0 : SPACING_SMALL)};
  background-color: ${props => (props.showError ? WHITE : ERROR_PRIMARY)};
  transition: all 0.25s ease-in-out;
  color: ${({ disabled }) => (disabled ? GREY_25 : CLARK_SECONDARY)};

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
