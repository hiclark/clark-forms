import React, { PureComponent } from 'react';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

import { Field } from 'redux-form';
import styled from 'styled-components';
import moment from 'moment';
import Error from '../error';
import Label from '../label';

import './react-dates-overrides.css';

export class DateRangePickerField extends PureComponent {
  state = { focusedInput: null };
  handleFocusChange = focusedInput => this.setState({ focusedInput });

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
              startDate: newDates.startDate ? newDates.startDate.toISOString() : null,
              endDate: newDates.endDate ? newDates.endDate.toISOString() : null,
            })
          }
          onFocusChange={this.handleFocusChange}
          startDateId="startDate"
          startDatePlaceholderText="Start Date"
          showDefaultInputIcon
          hideKeyboardShortcutsPanel
          isOutsideRange={isOutsideRange}
        />
        <Error touched={touched} error={error} />
      </div>
    );
  }
}

const RangePicker = ({ name, label, columns, validate, required, ...props }) => (
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
