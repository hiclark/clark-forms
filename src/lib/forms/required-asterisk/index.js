// @flow

import React from 'react';
import styled from 'styled-components';
import { CLARK_PRIMARY } from '../../styles/colors';

export default () => <RequiredAsterisk>*</RequiredAsterisk>;

const RequiredAsterisk = styled.span`
  color: ${CLARK_PRIMARY};
  padding-left: 4px;
`;
