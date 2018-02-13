import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import BackArrow from '../back-arrow';
import Wordmark from '../../assets/icons/clark-wordmark.svg';

import media from '../../styles/media-queries';
import { CLARK_PRIMARY, WHITE, GREY_25, GREY_75 } from '../../styles/colors';
import {
  SPACING_SMALL,
  SPACING_MEDIUM,
  SPACING_LARGE,
  SPACING_EXTRA_LARGE,
} from '../../styles/spacing';
import { FONT_WEIGHT_100 } from '../../styles/font-weight';
import { BORDER_WIDTH_1 } from '../../styles/borders';

const FormProgressHeader = ({
  currentPosition,
  maxPosition,
  title,
  handleBackLinkClick,
  handleCancelClick,
}) => (
  <Header>
    <Container>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
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
          <ProgressBarProgress percentCovered={currentPosition / maxPosition * 100} />
        </ProgressBar>
      )}
  </Header>
);

const Header = styled.header`
  background-color: ${WHITE};
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  height: ${SPACING_EXTRA_LARGE};
  padding: 0 calc(${SPACING_SMALL} + ${SPACING_MEDIUM});
`;

const LogoContainer = styled(Link)`
  display: none;

  ${media.small`
    align-items: center;
    border-right: ${BORDER_WIDTH_1} solid ${GREY_25};
    display: flex;
    height: 100%;
    padding-right: calc(${SPACING_SMALL} + ${SPACING_MEDIUM});
  `};
`;

const Logo = styled(Wordmark)`
  color: ${CLARK_PRIMARY};
  width: 80px;
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
}
`;

const BackIconWrapper = styled.div`
  ${media.small`
    display: none;
  `};
`;

const Title = styled.div`
  color: ${GREY_75};
  ${FONT_WEIGHT_100};
  text-align: center;
  margin-left: ${SPACING_LARGE};
`;

const CancelBtn = styled.div`
  color: ${CLARK_PRIMARY};
  ${FONT_WEIGHT_100};
  margin-left: auto;
`;

export default FormProgressHeader;
