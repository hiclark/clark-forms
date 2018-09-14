// @flow

import React, { PureComponent } from 'react';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

import { Field } from 'redux-form';
import styled from 'styled-components';
import moment from 'moment';
import Error from '../error';
import Label from '../label';

import './react-dates-overrides';

type StateType = { focusedInput: ?string };

export class DateRangePickerField extends PureComponent<*, StateType> {
  state = { focusedInput: null };
  handleFocusChange = (focusedInput: string) => this.setState({ focusedInput });

  render() {
    const {
      meta: { error, touched },
      input: { value: { startDate, endDate } = { startDate: null, endDate: null }, onChange },
      isOutsideRange,
    } = this.props;
    const { focusedInput } = this.state;

    return (
      <div>
        <DateRangePicker
          startDate={startDate ? moment(startDate) : null}
          endDate={endDate ? moment(endDate) : null}
          endDateId="endDate"
          endDatePlaceholderText="End Date"
          focusedInput={focusedInput}
          onDatesChange={newDates =>
            onChange({
              startDate: newDates.startDate
                ? newDates.startDate.startOf('day').toISOString()
                : null,
              endDate: newDates.endDate ? newDates.endDate.startOf('day').toISOString() : null,
            })
          }
          onFocusChange={this.handleFocusChange}
          startDateId="startDate"
          startDatePlaceholderText="Start Date"
          showDefaultInputIcon
          hideKeyboardShortcutsPanel
          isOutsideRange={
            isOutsideRange && (momentObject => isOutsideRange(momentObject.startOf('day')))
          }
        />
        <Error touched={touched} error={error} />
      </div>
    );
  }
}

type PropsType = any;
const RangePicker = ({ name, label, columns, validate, required, ...props }: PropsType) => (
  <Container>
    <Label name={name} label={label} required={required} />
    <Field
      name={name}
      component={DateRangePickerField}
      columns={columns}
      validate={validate}
      {...props}
    />
  </Container>
);

export default RangePicker;

const Container = styled.div`
  display: block;
`;
