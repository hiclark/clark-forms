import React from 'react';

import { isRequired } from '../../utils/validation';
import normalizeNumbers from '../../utils/normalization/number';

import User from '../../assets/icons/user.svg';
import Building from '../../assets/icons/building.svg';

const HEADLINE = 'Just a few more steps... Who is this bank account for?';

const FIELD_SETS = [
  {
    fieldSet: [
      {
        columns: { small: 2 },
        fields: [
          {
            type: 'radioButton',
            name: 'accountType',
            label: 'Individual',
            value: 'individual',
            icon: <User />,
            validate: isRequired,
          },
          {
            type: 'radioButton',
            name: 'accountType',
            label: 'Business',
            value: 'company',
            icon: <Building />,
            validate: isRequired,
          },
        ],
      },
    ],
  },
];

const COMPANY_ACCOUNT_FIELD_SETS = [
  {
    fieldSet: [
      {
        columns: { small: 1, large: 1 },
        fields: [
          {
            type: 'input',
            name: 'businessName',
            label: 'Business Name',
            validate: isRequired,
          },
        ],
      },
      {
        columns: { small: 1, large: 1 },
        fields: [
          {
            type: 'input',
            copy:
              'Enter your 9-digit Employer Identification Number (EIN) if you have one. Otherwise, enter your 9-digit Social Security Number (SSN).',
            name: 'businessTaxId',
            label: 'Taxpayer Identification Number',
            validate: isRequired,
            normalize: normalizeNumbers(9),
          },
        ],
      },
    ],
  },
];

export { HEADLINE, FIELD_SETS, COMPANY_ACCOUNT_FIELD_SETS };
