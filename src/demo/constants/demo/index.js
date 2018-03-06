import { isRequired, minLength } from '../../utils/validation';
import normalizeNumbers from '../../utils/normalization/number';

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
    ],
  },
];

export default FIELD_SETS;
