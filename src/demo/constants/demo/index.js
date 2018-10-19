import React from 'react';
import { isRequired, minLength } from '../../utils/validation';
import Check from '../../assets/icons/check.svg';

const DROPDOWN = [{ value: 'first', label: 'First' }, { value: 'second', label: 'Second' }];

const RATING = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
];

const RATING_KEY = { left: 'Poor', right: 'Excellent' };

const FIELD_SETS = [
  {
    fieldSet: [
      {
        columns: { small: 1, large: 2 },
        fields: [
          {
            type: 'input',
            name: 'firstInput',
            label: 'Required Input',
            required: true,
            validate: [isRequired, minLength(6)],
          },
          {
            type: 'dropdown',
            name: 'dropdownTest',
            label: 'Dropdown Test',
            values: DROPDOWN,
            validate: isRequired,
          },
          {
            type: 'input',
            name: 'firstInput',
            label: 'Required Input',
            required: true,
            validate: [isRequired, minLength(6)],
          },
          {
            type: 'locationAutocomplete',
            name: 'location',
            label: 'Location',
            validate: [isRequired],
          },
          {
            type: 'dropdown',
            name: 'multiselectTest',
            label: 'Multiselect Test',
            multi: true,
            values: DROPDOWN,
            validate: isRequired,
          },
          {
            type: 'input',
            name: 'pwInput',
            label: 'Password Input',
            inputType: 'password',
          },
          {
            type: 'input',
            name: 'secondInput',
            label: 'Number Input',
            inputType: 'number',
            min: 0,
            max: 10,
          },
        ],
      },
      {
        columns: { small: 1, large: 2 },
        fields: [
          {
            type: 'datepicker',
            name: 'datePicker',
            label: 'Date Picker',
            validate: [isRequired],
            showYearDropdown: true,
            showMonthDropdown: true,
            isOutsideRange: () => false,
          },
        ],
      },
      {
        columns: { small: 1, large: 2 },
        fields: [
          {
            type: 'daterangepicker',
            name: 'dateRangePicker',
            label: 'Date Range Picker',
            validate: [isRequired],
            showYearDropdown: true,
            showMonthDropdown: true,
            isOutsideRange: () => false,
          },
        ],
      },
      {
        columns: { small: 2 },
        fields: [
          {
            type: 'radioButton',
            name: 'accountType',
            label: 'Individual',
            value: 'individual',
            validate: isRequired,
          },
          {
            type: 'radioButton',
            name: 'accountType',
            label: 'Business',
            value: 'company',
            validate: isRequired,
          },
        ],
      },
      {
        columns: { small: 1, large: 2 },
        fields: [
          {
            type: 'checkbox',
            name: 'checkbox',
            label: 'Checkbox',
          },
        ],
      },
      {
        columns: { small: 1, large: 2 },
        fields: [
          {
            label: 'Toggle',
            type: 'toggleButton',
            name: 'toggle',
            values: [{ label: 'label1', value: 1 }, { label: 'label2', value: 2 }],
            validate: isRequired,
          },
        ],
      },
      {
        columns: { small: 1, large: 2 },
        fields: [
          {
            type: 'rating',
            name: 'rating',
            values: RATING,
            icon: <Check />,
            ratingKey: RATING_KEY,
          },
          {
            type: 'textarea',
            name: 'textArea',
            label: 'Text Area',
          },
        ],
      },
    ],
  },
];

export default FIELD_SETS;
