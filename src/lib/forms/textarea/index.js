import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

import Error from '../error';

import {
  SPACING_EXTRA_SMALL,
  SPACING_SMALL,
  SPACING_MEDIUM,
  SPACING_EXTRA_LARGE,
} from '../../styles/spacing';
import { BORDER_RADIUS_F2 } from '../../styles/border-radius';
import { TYPE_SCALE_F4 } from '../../styles/type-scale';
import { FONT_FAMILY_PRIMARY } from '../../styles/font-family';
import { FONT_WEIGHT_100 } from '../../styles/font-weight';
import { BORDER_WIDTH_1, renderBorderRadius } from '../../styles/borders';
import { LINE_HEIGHT_COPY } from '../../styles/line-height';
import { WHITE, CLARK_PRIMARY, CLARK_SECONDARY, GREY_25, ERROR_PRIMARY } from '../../styles/colors';
import Label from '../label';

const renderField = ({ input, index, placeholder, columns, type, meta: { touched, error } }) => (
  <div>
    <FormTextarea
      {...input}
      type={type}
      index={index}
      placeholder={placeholder}
      columns={columns}
      showError={!(error && touched)}
    />
    <Error touched={touched} error={error} />
  </div>
);

const Textarea = (props: { name: string, label: string }) => (
  <div>
    <Label name={props.name} label={props.label} required={props.required} />
    <Field component={renderField} {...props} />
  </div>
);

export default Textarea;

const FormTextarea = styled.textarea`
  ${TYPE_SCALE_F4};
  ${FONT_FAMILY_PRIMARY};
  ${FONT_WEIGHT_100};
  ${BORDER_RADIUS_F2};
  border: ${BORDER_WIDTH_1} solid ${props => (props.showError ? GREY_25 : CLARK_PRIMARY)};
  color: ${CLARK_SECONDARY};
  display: block;
  line-height: ${LINE_HEIGHT_COPY};
  height: calc(${SPACING_MEDIUM} + ${SPACING_EXTRA_LARGE});
  padding: calc(${SPACING_EXTRA_SMALL} + ${SPACING_SMALL});
  position: relative;
  outline: none;
  resize: none;
  width: 100%;
  margin-bottom: ${props => (props.showError ? 0 : SPACING_SMALL)};
  background-color: ${props => (props.showError ? WHITE : ERROR_PRIMARY)};
  transition: 0.5s;
  ${props => renderBorderRadius(props)};

  &::placeholder {
    color: ${GREY_25};
  }
`;
