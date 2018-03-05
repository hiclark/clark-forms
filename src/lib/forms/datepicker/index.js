import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Field } from 'redux-form';
import ReactDatePicker from 'react-datepicker';
import styled from 'styled-components';
import moment from 'moment';

import Error from '../error';
import { CLARK_SECONDARY } from '../../styles/colors';
import { SPACING_SMALL } from '../../styles/spacing';

const renderDatePicker = ({ input, meta: { touched, error } }) => (
  <div>
    <ReactDatePicker
      onChange={input.onChange}
      dateForm="MM/DD/YYYY"
      selected={input.value ? moment(input.value) : null}
    />
    <Error touched={touched} error={error} />
  </div>
);

const DatePicker = ({ index, name, label, values, placeholder, columns }) => (
  <Container>
    <Label htmlFor={name}>{label}</Label>
    <Field
      index={index}
      name={name}
      component={renderDatePicker}
      options={values}
      placeholder={placeholder}
      columns={columns}
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
