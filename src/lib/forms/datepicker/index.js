import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field } from 'redux-form';
import styled from 'styled-components';
import moment from 'moment';

import Error from '../error';
import { SPACING_EXTRA_SMALL, SPACING_SMALL, SPACING_LARGE } from '../../styles/spacing';
import { BORDER_RADIUS_F2 } from '../../styles/border-radius';
import { TYPE_SCALE_F4 } from '../../styles/type-scale';
import { FONT_FAMILY_PRIMARY } from '../../styles/font-family';
import { FONT_WEIGHT_100 } from '../../styles/font-weight';
import { BORDER_WIDTH_1, renderBorderRadius } from '../../styles/borders';
import { LINE_HEIGHT_SOLID } from '../../styles/line-height';
import { WHITE, CLARK_PRIMARY, CLARK_SECONDARY, GREY_25, ERROR_PRIMARY } from '../../styles/colors';

import './datepicker.css';

export const renderDatePicker = ({ input, meta: { touched, error }, columns, index, ...props }) => (
  <div onBlur={() => input.onBlur(input.value)}>
    <ReactDatePicker
      customInput={
        <FormInput
          {...input}
          columns={columns}
          index={index}
          type="text"
          showError={!(error && touched)}
        />
      } //eslint-disable-line
      selected={input.value ? moment(input.value) : null}
      onFocus={input.onFocus}
      onChange={value => input.onChange(value && value.format())}
      dateForm="MM/DD/YYYY"
      placeholderText="MM/DD/YYYY"
      {...props}
    />
    <Error touched={touched} error={error} />
  </div>
);

const DatePicker = ({ name, label, columns, validate, ...props }) => (
  <Container>
    <Label htmlFor={name}>{label}</Label>
    <Field
      name={name}
      component={renderDatePicker}
      columns={columns}
      validate={validate}
      {...props}
    />
  </Container>
);

export default DatePicker;

const Container = styled.div`
  display: block;
`;

const Label = styled.label`
  color: ${CLARK_SECONDARY};
  display: block;
  margin-bottom: ${SPACING_SMALL};
`;

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

  padding-left: ${SPACING_LARGE};

  &::placeholder {
    color: ${GREY_25};
  }
`;
