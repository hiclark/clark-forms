import React from 'react';
import styled from 'styled-components';

import RequiredAsterisk from '../required-asterisk';
import { CLARK_SECONDARY } from '../../styles/colors';
import { SPACING_SMALL } from '../../styles/spacing';

export default ({ name, label, required }) => (
  <Label htmlFor={name}>
    {label || <Spacing />}
    {required && <RequiredAsterisk />}
  </Label>
);
const Label = styled.label`
  color: ${CLARK_SECONDARY};
  display: block;
  margin-bottom: ${SPACING_SMALL};
`;

const Spacing = styled.span`
  display: inline-block;
`;
