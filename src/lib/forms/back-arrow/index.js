import React from 'react';
import styled from 'styled-components';
import ArrowLeft from '../../assets/icons/arrow-left.svg';
import { CLARK_PRIMARY } from '../../styles/colors';

const BackArrow = ({ onClick }) => (
  <BackIcon onClick={onClick}>
    <ArrowLeft />
  </BackIcon>
);

export default BackArrow;

const BackIcon = styled.div`
  color: ${CLARK_PRIMARY};
  width: 20px;
  height: 17px;
  cursor: pointer;
`;
