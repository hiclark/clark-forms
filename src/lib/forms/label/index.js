import React from 'react';
import styled from 'styled-components';

import RequiredAsterisk from '../required-asterisk';
import { CLARK_SECONDARY, GREY_25 } from '../../styles/colors';
import { SPACING_SMALL } from '../../styles/spacing';

type PropsType = { name: string, label: string, required: boolean, disabled?: boolean };
const Label = ({ name, label, required, disabled }: PropsType) => (
  <Wrap htmlFor={name} disabled={disabled}>
    {label || <Spacing />}
    {required && <RequiredAsterisk />}
  </Wrap>
);

Label.defaultProps = { disabled: false };

export default Label;

const Wrap = styled.label`
  ${({ disabled }) => (disabled ? `color: ${GREY_25}` : `color: ${CLARK_SECONDARY}`)};
  display: block;
  margin-bottom: ${SPACING_SMALL};
`;

const Spacing = styled.span`
  display: inline-block;
`;
