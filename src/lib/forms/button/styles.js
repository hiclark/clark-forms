// @flow

import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import {
  BUTTON_COLOR_PRIMARY,
  BUTTON_COLOR_TERTIARY,
  GREY_10,
  GREY_25,
  GREY_75,
  LINK_COLOR_QUINARY,
  WHITE,
} from '../../styles/colors';
import { BORDER_RADIUS_F2 } from '../../styles/border-radius';
import { BORDER_WIDTH_1 } from '../../styles/borders';
import { SPACING_MEDIUM } from '../../styles/spacing';
import { TYPE_SCALE_F6 } from '../../styles/type-scale';
import { FONT_WEIGHT_700 } from '../../styles/font-weight';
import { Z_INDEX_1 } from '../../styles/z-index';
// import media from '../../styles/media-queries';

const MAX_WIDTH = '17.5rem';
export const Container = styled.span`
  z-index: 0;
  position: relative;
  width: 100%;
`;

const primary = disabled => css`
  background: ${disabled ? GREY_25 : BUTTON_COLOR_PRIMARY};
  border: 0;
  color: ${WHITE};

  &:hover {
    background: ${disabled ? GREY_25 : BUTTON_COLOR_TERTIARY};
  }
`;

const secondary = disabled => css`
  background: ${WHITE};
  border: ${disabled ? `${BORDER_WIDTH_1} solid ${GREY_10}` : `${BORDER_WIDTH_1} solid ${GREY_25}`};
  color: ${disabled ? GREY_25 : GREY_75};

  &:hover {
    border: ${disabled
      ? `${BORDER_WIDTH_1} solid ${GREY_10}`
      : `${BORDER_WIDTH_1} solid ${LINK_COLOR_QUINARY}`};
    color: ${disabled ? GREY_25 : GREY_75};
  }
`;

const tertiary = css`
  color: ${LINK_COLOR_QUINARY};
  text-transform: capitalize;
  padding: 0;
  border: 0;

  &:hover {
    text-decoration: underline;
  }
`;

const dashed = disabled => css`
  background: ${WHITE};
  border: ${disabled
    ? `${BORDER_WIDTH_1} dashed ${GREY_10}`
    : `${BORDER_WIDTH_1} dashed ${GREY_25}`};
  color: ${disabled ? GREY_10 : GREY_75};

  &:hover {
    border: ${disabled
      ? `${BORDER_WIDTH_1} dashed ${GREY_10}`
      : `${BORDER_WIDTH_1} dashed ${LINK_COLOR_QUINARY}`};
    color: ${disabled ? GREY_10 : GREY_75};
  }
`;

const buttonStyleType = disabled => ({
  primary: () => primary(disabled),
  secondary: () => secondary(disabled),
  dashed: () => dashed(disabled),
  tertiary,
});

export const StyledButton = styled.button`
  ${FONT_WEIGHT_700};
  ${TYPE_SCALE_F6};
  ${BORDER_RADIUS_F2};
  ${Z_INDEX_1};
  padding: ${SPACING_MEDIUM};
  max-width: ${MAX_WIDTH};
  width: 100%;
  height: auto;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;

  ${({ disabled }) => disabled && 'pointer-events: none;'};
  ${({ disabled, styleType }) => buttonStyleType(disabled)[styleType]};

  &:focus {
    outline: none;
  }

  svg {
    height: ${SPACING_MEDIUM};
    width: ${SPACING_MEDIUM};
    color: ${({ btnState, styleType, variant }) =>
      styleType !== 'primary' &&
      btnState === 'success' &&
      variant === 'dialog' &&
      LINK_COLOR_QUINARY};
  }
`;

export const StyledLink = StyledButton.withComponent(Link);

export const Label = styled.span`
  margin-right: ${({ hasSecondaryIcon }) => hasSecondaryIcon && 'auto'};
`;

export const SecondaryIcon = styled.span`
  margin-right: auto;
  visibility: ${({ btnState, variant }) =>
    (btnState === 'loading' || (btnState === 'success' && variant === 'dialog')) && 'hidden'};
`;
