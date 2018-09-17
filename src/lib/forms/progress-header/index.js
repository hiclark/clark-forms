// @flow

import React from 'react';
import styled from 'styled-components';

import BackArrow from './back-arrow';

import media from '../../styles/media-queries';
import { CLARK_PRIMARY, WHITE, GREY_25, GREY_75 } from '../../styles/colors';
import {
  SPACING_SMALL,
  SPACING_MEDIUM,
  SPACING_LARGE,
  SPACING_EXTRA_LARGE,
} from '../../styles/spacing';
import { FONT_WEIGHT_100 } from '../../styles/font-weight';

type PropsType = {
  currentPosition: number,
  maxPosition: number,
  title: string,
  handleBackLinkClick?: () => void,
  handleCancelClick?: () => void,
};

const ProgressHeader = ({
  currentPosition,
  maxPosition,
  title,
  handleBackLinkClick,
  handleCancelClick,
}: PropsType) => (
  <Header>
    <Container>
      {handleBackLinkClick && (
        <BackIconWrapper>
          <BackArrow onClick={handleBackLinkClick} />
        </BackIconWrapper>
      )}
      {currentPosition &&
        maxPosition &&
        title && <Title>{`Step ${currentPosition}/${maxPosition}: ${title}`}</Title>}
      {handleCancelClick && <CancelBtn onClick={handleCancelClick}>Cancel</CancelBtn>}
    </Container>
    {currentPosition &&
      maxPosition && (
        <ProgressBar>
          <ProgressBarProgress percentCovered={(currentPosition / maxPosition) * 100} />
        </ProgressBar>
      )}
  </Header>
);

export default ProgressHeader;

const Header = styled.header`
  background-color: ${WHITE};
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  height: ${SPACING_EXTRA_LARGE};
  padding: 0 calc(${SPACING_SMALL} + ${SPACING_MEDIUM});
`;

const ProgressBar = styled.div`
  background-color: ${GREY_25};
  height: 4px;
  width: 100%;
`;

const ProgressBarProgress = styled.div`
  background-color: ${CLARK_PRIMARY};
  width: ${props => props.percentCovered}%;
  height: 100%;
`;

const BackIconWrapper = styled.div`
  ${media.small`
    display: none;
  `};
  margin-right: ${SPACING_LARGE};
`;

const Title = styled.div`
  color: ${GREY_75};
  ${FONT_WEIGHT_100};
  text-align: center;
`;

const CancelBtn = styled.div`
  color: ${CLARK_PRIMARY};
  ${FONT_WEIGHT_100};
  margin-left: auto;
`;
