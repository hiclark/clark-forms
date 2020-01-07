import React, { Fragment } from 'react';
import styled from 'styled-components';

import RequiredAsterisk from '../required-asterisk';
import { CLARK_SECONDARY, GREY_25 } from '../../styles/colors';
import { SPACING_SMALL } from '../../styles/spacing';
import { FONT_WEIGHT_100 } from '../../styles/font-weight';

type PropsType = {
  name: string,
  label: string,
  labelHint?: ?string,
  required: boolean,
  disabled?: boolean,
};
const Label = ({ name, label, required, disabled, labelHint }: PropsType) => (
  <Wrap htmlFor={name} disabled={disabled}>
    {label ? (
      <Fragment>
        {label}
        {labelHint && <LabelHint>&nbsp;{labelHint}</LabelHint>}
      </Fragment>
    ) : (
      <Spacing />
    )}
    {required && <RequiredAsterisk />}
  </Wrap>
);

Label.defaultProps = { disabled: false, labelHint: null };

export default Label;

const Wrap = styled.label`
  ${({ disabled }) => (disabled ? `color: ${GREY_25}` : `color: ${CLARK_SECONDARY}`)};
  display: block;
  margin-bottom: ${SPACING_SMALL};
`;

const Spacing = styled.span`
  display: inline-block;
`;

const LabelHint = styled.span`
  ${FONT_WEIGHT_100};
`;
