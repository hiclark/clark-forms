import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';
import {
  TYPE_SCALE,
  SPACING,
  BORDER_RADIUS,
  FONT_WEIGHT,
  BORDER_WIDTH,
  LINE_HEIGHT,
  COLORS,
} from 'clark-styles';

import Error from '../error';
import Label from '../label';

const { TS_5 } = TYPE_SCALE;
const { S_025, S_05, S_1, S_4 } = SPACING;
const { BR_2 } = BORDER_RADIUS;
const { FW_100 } = FONT_WEIGHT;
const { BW_1 } = BORDER_WIDTH;
const { COPY } = LINE_HEIGHT;
const { WHITE, CLARK_PRIMARY, GREY_100, GREY_25 } = COLORS;
const ERROR_COLOR = '#fcece5';

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

type PropsType = any;
const Textarea = (props: PropsType) => (
  <div>
    <Label name={props.name} label={props.label} required={props.required} />
    <Field component={renderField} {...props} />
  </div>
);

export default Textarea;

const FormTextarea = styled.textarea`
  ${TS_5};
  ${FW_100};
  ${BR_2};
  border: ${BW_1} solid ${props => (props.showError ? GREY_25 : CLARK_PRIMARY)};
  color: ${GREY_100};
  display: block;
  line-height: ${COPY};
  height: calc(${S_1} + ${S_4});
  padding: calc(${S_025} + ${S_05});
  position: relative;
  outline: none;
  resize: none;
  width: 100%;
  margin-bottom: ${props => (props.showError ? 0 : S_05)};
  background-color: ${props => (props.showError ? WHITE : ERROR_COLOR)};
  transition: 0.5s;

  &::placeholder {
    color: ${GREY_25};
  }
`;
