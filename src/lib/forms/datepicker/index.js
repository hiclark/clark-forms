import React from 'react';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

import { Field } from 'redux-form';
import styled from 'styled-components';
import moment from 'moment';
import Label from '../label';

import Error from '../error';

import './react-dates-overrides.css';

type SingleDatePickerPropsType = any;
export const SingleDatePickerField = ({
  meta: { active, error, touched },
  input: { value = null, onChange, onFocus, onBlur },
  placeholder = 'Select a date',
  isOutsideRange,
  numberOfMonths = 1,
}: SingleDatePickerPropsType) => (
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

type PropsType = any;
const DatePicker = ({ name, label, columns, validate, required, ...props }: PropsType) => (
  <Container>
    <Label name={name} label={label} required={required} />
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
