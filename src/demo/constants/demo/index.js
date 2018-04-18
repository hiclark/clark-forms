import { isRequired, minLength } from '../../utils/validation';

const DROPDOWN = [{ value: 'first', label: 'First' }, { value: 'second', label: 'Second' }];

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
          },
        ],
      },
    ],
  },
];

export default FIELD_SETS;
