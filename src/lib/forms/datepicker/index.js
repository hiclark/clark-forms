import React from 'react';
import ReactDatePicker from 'react-datepicker';
// $FlowFixMe
import 'react-datepicker/dist/react-datepicker.css';
import { Field, type Validator } from 'redux-form';
import styled from 'styled-components';
import moment from 'moment';

import Error from '../error';
import { CLARK_SECONDARY } from '../../styles/colors';
import { SPACING_SMALL } from '../../styles/spacing';

type RenderPropsType = {
  input: {
    onBlur(x: string): void,
    onFocus(): void,
    onChange(): void,
    value: string,
  },
  meta: {
    touched: boolean,
    error: ?string,
  },
};

export const renderDatePicker = ({ input, meta: { touched, error } }: RenderPropsType) => (
  <div onBlur={() => input.onBlur(input.value)}>
    <ReactDatePicker
      selected={input.value ? moment(input.value) : null}
      onFocus={input.onFocus}
      onChange={input.onChange}
      dateForm="MM/DD/YYYY"
      placeholderText="MM/DD/YYYY"
    />
    <Error touched={touched} error={error} />
  </div>
);

type PropsType = {
  name: string,
  label: string,
  columns: { small: number, large: number },
  validate: Validator | Validator[],
};

const DatePicker = ({ name, label, columns, validate }: PropsType) => (
  <Container>
    <Label htmlFor={name}>{label}</Label>
    <Field name={name} component={renderDatePicker} columns={columns} validate={validate} />
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
