import React from 'react';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

import { Field } from 'redux-form';
import styled from 'styled-components';
import moment from 'moment';

import Error from '../error';
import { CLARK_SECONDARY } from '../../styles/colors';
import { SPACING_SMALL } from '../../styles/spacing';

import './react-dates-overrides.css';

export const SingleDatePickerField = ({
  meta: { active, error, touched },
  input: { value = null, onChange, onFocus, onBlur },
  placeholder = 'Select a date',
  isOutsideRange,
  numberOfMonths = 1,
}) => (
  <div>
    <SingleDatePicker
      date={value ? moment(value) : null}
      onDateChange={e => (e ? onChange(e.toISOString()) : onChange(null))}
      focused={active}
      onFocusChange={({ focused }) => (focused ? onFocus() : onBlur())}
      id="date"
      placeholder={placeholder}
      showDefaultInputIcon
      hideKeyboardShortcutsPanel
      isOutsideRange={isOutsideRange}
      numberOfMonths={numberOfMonths}
    />
    <Error touched={touched} error={error} />
  </div>
);

const DatePicker = ({ name, label, columns, validate, ...props }) => (
  <Container>
    <Label htmlFor={name}>{label}</Label>
    <Field
      name={name}
      component={SingleDatePickerField}
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
