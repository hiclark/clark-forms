import React from 'react';
import { isRequired, minLength } from '../../utils/validation';
import Check from '../../assets/icons/check.svg';
import Link from './styles';

const LINK = (
  <span>
    By creating this account, I am agreeing to the
    <Link href="/sessions">Terms of Service</Link>
  </span>
);

const DROPDOWN = [{ value: 'first', label: 'First' }, { value: 'second', label: 'Second' }];

const RATING = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
];

const RATING_KEY = { left: 'Poor', right: 'Excellent' };

const RADIO = [
  { value: 1, label: 'List Item 1' },
  { value: 2, label: 'List Item 2' },
  { value: 3, label: 'List Item 3' },
  { value: 4, label: 'List Item 4' },
  { value: 5, label: 'List Item 5' },
];

const CHECKBOXES = [
  { value: 1, label: 'Checkbox 1' },
  { value: 2, label: 'Checkbox 2', required: true, validate: [isRequired] },
  { value: 3, label: 'Checkbox 3', disabled: true },
  { value: 4, label: LINK, required: true, validate: [isRequired] },
];

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
            menuIsOpen: true,
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
            displayFormat: 'ddd, MMMM Do, Y',
          },
          {
            type: 'datepicker',
            name: 'datePickerDisabled',
            label: 'Date Picker (Disabled)',
            validate: [isRequired],
            showYearDropdown: true,
            showMonthDropdown: true,
            isOutsideRange: () => true,
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
        columns: { small: 2, large: 2 },
        fields: [
          {
            type: 'radioButton',
            name: 'radioButton',
            label: 'Radio Button Group',
            values: RADIO,
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
            type: 'checkboxGroup',
            name: 'checkboxGroup',
            label: 'Checkbox Group',
            options: CHECKBOXES,
            required: true,
            validate: [isRequired],
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
