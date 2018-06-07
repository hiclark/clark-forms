import React from 'react';
import styled from 'styled-components';

import RequiredAsterisk from '../required-asterisk';
import { CLARK_SECONDARY } from '../../styles/colors';
import { SPACING_SMALL } from '../../styles/spacing';

type PropsType = { name: string, label: string, required: boolean };
const Label = ({ name, label, required }: PropsType) => (
  <Wrap htmlFor={name}>
    {label || <Spacing />}
    {required && <RequiredAsterisk />}
  </Wrap>
);

export default Label;

const Wrap = styled.label`
  color: ${CLARK_SECONDARY};
  display: block;
  margin-bottom: ${SPACING_SMALL};
`;

const Spacing = styled.span`
  display: inline-block;
`;
