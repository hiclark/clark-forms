import { isRequired, minLength } from '../../utils/validation';
import normalizeNumbers from '../../utils/normalization/number';
import { type DataType } from '../../../lib/forms/fieldset';

const DROPDOWN = [{ value: 'first', label: 'First' }, { value: 'second', label: 'Second' }];

const FIELD_SETS: DataType = [
  {
    fieldSet: [
      {
        columns: { small: 1, large: 2 },
        fields: [
          {
            type: 'input',
            name: 'firstInput',
            label: 'First Input',
            validate: [isRequired, minLength(6)],
            normalize: normalizeNumbers(16),
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
            name: 'secondInput',
            label: 'Password Input',
            inputType: 'password',
          },
          {
            type: 'input',
            name: 'secondInput',
            label: 'Number Input',
            inputType: 'number',
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
          },
        ],
      },
    ],
  },
];

export default FIELD_SETS;
