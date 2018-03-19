import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field } from 'redux-form';
import styled from 'styled-components';
import moment from 'moment';

import Error from '../error';
import { CLARK_SECONDARY } from '../../styles/colors';
import { SPACING_SMALL } from '../../styles/spacing';

export const renderDatePicker = ({ input, meta: { touched, error }, ...props }) => (
  <div onBlur={() => input.onBlur(input.value)}>
    <ReactDatePicker
      selected={input.value ? moment(input.value) : null}
      onFocus={input.onFocus}
      onChange={input.onChange}
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
