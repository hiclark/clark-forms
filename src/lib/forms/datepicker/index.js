import React from 'react';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

import { Field } from 'redux-form';
import styled from 'styled-components';
import moment from 'moment';
import Label from '../label';
import Error from '../error';
import Calendar from '../../assets/icons/calendar.svg';

import './react-dates-overrides.css';

type SingleDatePickerPropsType = any;
export const SingleDatePickerField = ({
  meta: { active, error, touched },
  input: { value = null, onChange, onFocus, onBlur },
  placeholder = 'Select a date',
  isOutsideRange,
  numberOfMonths = 1,
  displayFormat = 'MM/DD/YYYY',
  disabled,
  openDirection,
}: SingleDatePickerPropsType) => (
  <div>
    <SingleDatePicker
      openDirection={openDirection || 'down'}
      date={value ? moment(value) : null}
      onDateChange={momentObject =>
        momentObject ? onChange(momentObject.startOf('day').toISOString()) : onChange(null)
      }
      focused={active}
      onFocusChange={({ focused }) => (focused ? onFocus() : onBlur())}
      id="date"
      placeholder={placeholder}
      customInputIcon={<Calendar />}
      hideKeyboardShortcutsPanel
      isOutsideRange={momentObject => isOutsideRange(momentObject.startOf('day'))}
      numberOfMonths={numberOfMonths}
      displayFormat={displayFormat}
      disabled={disabled}
    />
    <Error touched={touched} error={error} />
  </div>
);

type PropsType = any;
const DatePicker = ({
  name,
  label,
  columns,
  validate,
  required,
  stripped,
  ...props
}: PropsType) => (
  <Container>
    {!stripped && <Label name={name} label={label} required={required} />}
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
