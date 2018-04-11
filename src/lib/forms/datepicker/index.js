import React, { PureComponent } from 'react';

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

export class SingleDatePickerField extends PureComponent {
  state = { focused: null };
  handleFocusChange = ({ focused }) => this.setState({ focused });

  render() {
    const {
      meta: { error, touched },
      input: { value = null, onChange, ...inputRest },
      placeholder = 'Select a date',
      isOutsideRange,
      numberOfMonths = 1,
    } = this.props;
    const { focused } = this.state;

    return (
      <div {...inputRest}>
        <SingleDatePicker
          date={value ? moment(value) : null}
          onDateChange={e => (e ? onChange(e.toISOString()) : onChange(null))}
          focused={focused}
          onFocusChange={this.handleFocusChange}
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
  }
}

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
