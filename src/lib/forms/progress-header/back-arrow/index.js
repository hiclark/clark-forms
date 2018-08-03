// @flow

import React from 'react';
import styled from 'styled-components';
import ArrowLeft from './arrow-left.svg';
import { CLARK_PRIMARY } from '../../../styles/colors';

const BackArrow = ({ onClick }: { onClick(): void }) => (
  <BackIcon onClick={onClick}>
    <ArrowLeft />
  </BackIcon>
);

export default BackArrow;

const BackIcon = styled.div`
  color: ${CLARK_PRIMARY};
  cursor: pointer;
  height: 17px;
  width: 20px;
`;
