import { isRequired, isNumber } from '../../utils/validation';
import normalizeNumbers from '../../utils/normalization/number';
import normalizeDate from '../../utils/normalization/date';

const HEADLINE = 'Last step! Verify your identity.';

const FIELD_SETS = [
  {
    fieldSet: [
      {
        columns: { small: 2, large: 2 },
        subCopy: 'Please confirm your legal name on this account.',
        fields: [
          {
            type: 'input',
            name: 'firstName',
            label: 'First Name',
            validate: isRequired,
          },
          {
            type: 'input',
            name: 'lastName',
            label: 'Last Name',
            validate: isRequired,
          },
        ],
      },
      {
        columns: { small: 1, large: 2 },
        fields: [
          {
            type: 'input',
            name: 'birthday',
            label: 'Date of Birth',
            placeholder: 'MM/DD/YYYY',
            validate: isRequired,
            normalize: normalizeDate,
          },
          {
            type: 'input',
            name: 'ssnLast4',
            label: 'Last 4 digits of SSN',
            validate: [isRequired, isNumber],
            normalize: normalizeNumbers(4),
          },
        ],
      },
    ],
  },
];

export { HEADLINE, FIELD_SETS };
