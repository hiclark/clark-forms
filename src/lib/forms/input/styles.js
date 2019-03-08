// @flow

import styled from 'styled-components';
import {
  BORDER_WIDTH,
  BORDER_RADIUS,
  COLORS,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING,
  TYPE_SCALE,
  TRANSITIONS,
} from 'clark-styles';

import Check from '../../assets/icons/check.svg';
import { ERROR_PRIMARY } from '../../styles/colors';

const { WHITE, CLARK_PRIMARY, CLARK_SECONDARY, GREY_25, GREY_75, GREY_100 } = COLORS;
const { S_025, S_05, S_1, S_4 } = SPACING;
const { BR_2 } = BORDER_RADIUS;
const { TS_4, TS_5, TS_6 } = TYPE_SCALE;
const { FW_100 } = FONT_WEIGHT;
const { BW_1 } = BORDER_WIDTH;
const { SOLID, COPY } = LINE_HEIGHT;
const { EASE_IN_OUT_25 } = TRANSITIONS;

const ICON_SIZE = '20px';

export const InputContainer = styled.div`
  ${EASE_IN_OUT_25};
  align-items: center;
  position: relative;
  display: flex;
  margin-bottom: ${({ showError }) => (showError ? 0 : S_05)};
`;

export const FormInput = styled.input`
  ${TS_4};
  ${FW_100};
  ${BR_2};
  ${SOLID};
  ${EASE_IN_OUT_25};
  border: ${BW_1} solid ${({ showError }) => (showError ? GREY_25 : CLARK_PRIMARY)};
  color: ${({ disabled }) => (disabled ? GREY_25 : GREY_100)};
  display: block;
  padding: ${({ hasShowHideButton }) =>
    hasShowHideButton
      ? `calc(${S_025} + ${S_05}) ${S_4} calc(${S_025} + ${S_05}) calc(${S_025} + ${S_05})`
      : `calc(${S_025} + ${S_05})`};
  position: relative;
  outline: none;
  width: 100%;
  background-color: ${({ showError }) => (showError ? WHITE : ERROR_PRIMARY)};
  &::placeholder {
    color: ${GREY_25};
  }
`;

export const Copy = styled.div`
  ${TS_5};
  ${FW_100};
  ${COPY};
  color: ${GREY_100};
  margin-bottom: ${S_05};
`;

export const ToggleButton = styled.span`
  ${TS_6};
  cursor: pointer;
  position: absolute;
  display: flex;
  color: ${(GREY_25, GREY_75)};
  line-height: 0;
  right: calc(${S_025} + ${S_05});
  outline: none;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${S_1};
  padding: 0;
`;

export const Item = styled.li`
  ${TS_5};
  ${FW_100};
  align-items: center;
  color: ${GREY_100};
  display: flex;
  margin-bottom: ${S_1};
  width: 50%;
`;

// $FlowFixMe
export const CheckIcon = styled(Check)`
  ${EASE_IN_OUT_25};
  color: ${({ isValid }) => (isValid ? CLARK_SECONDARY : GREY_25)};
  height: ${ICON_SIZE};
  margin-right: ${S_1};
  width: ${ICON_SIZE};
`;
