import React from 'react';
import styled from 'styled-components';

import { CLARK_PRIMARY } from '../../styles/colors';
import { FONT_WEIGHT_100 } from '../../styles/font-weight';
import { TYPE_SCALE_F6 } from '../../styles/type-scale';

const Error = ({ touched, error }) => (
  <div>{touched && (error && <ErrorStyle>{error}</ErrorStyle>)}</div>
);

const ErrorStyle = styled.span`
  ${FONT_WEIGHT_100};
  ${TYPE_SCALE_F6};
  color: ${CLARK_PRIMARY};
`;

export default Error;
