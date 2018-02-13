import { isRequired, minLength } from '../../utils/validation';
import normalizeNumbers from '../../utils/normalization/number';

const HEADLINE = 'Where should we deposit your money?';
const SUB_HEADLINE = '';

const FIELD_SETS = [
  {
    fieldSet: [
      {
        columns: { small: 1, large: 2 },
        fields: [
          {
            type: 'input',
            name: 'accountNumber',
            label: 'Account Number',
            validate: [isRequired, minLength(6)],
            normalize: normalizeNumbers(16),
          },
          {
            type: 'input',
            name: 'routingNumber',
            label: 'Routing number',
            validate: [isRequired, minLength(9)],
            normalize: normalizeNumbers(9),
          },
        ],
      },
    ],
  },
];

export { HEADLINE, SUB_HEADLINE, FIELD_SETS };
