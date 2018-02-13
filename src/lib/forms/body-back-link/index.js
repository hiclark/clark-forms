import React from 'react';
import styled from 'styled-components';
import media from '../../styles/media-queries';
import BackArrow from '../back-arrow';
import { CLARK_PRIMARY } from '../../styles/colors';
import { SPACING_LARGE } from '../../styles/spacing';

const BodyBackLink = ({ onClick }) => (
  <BackArrowWrapper>
    <BackArrow onClick={onClick} />
  </BackArrowWrapper>
);

export default BodyBackLink;

const BackArrowWrapper = styled.div`
  display: none;

  ${media.small`
    color: ${CLARK_PRIMARY};
    display: block;
    padding-top: ${SPACING_LARGE}
  `};
`;
