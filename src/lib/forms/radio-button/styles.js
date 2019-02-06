// @flow

import { Field } from 'redux-form';
import styled from 'styled-components';
import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLORS,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING,
  TYPE_SCALE,
} from 'clark-styles';

const { CIRCLE } = BORDER_RADIUS;
const { BW_1 } = BORDER_WIDTH;
const { CLARK_SECONDARY, GREY_25, GREY_50, GREY_100, WHITE } = COLORS;
const { FW_100 } = FONT_WEIGHT;
const { TITLE } = LINE_HEIGHT;
const { S_025, S_05, S_1 } = SPACING;
const { TS_5 } = TYPE_SCALE;

const TOP_SPACING = '-1px';
const LEFT_SPACING = '-2px';
const DIMENSIONAL_SPACING = `calc(${S_05} + ${S_1})`;

export const OuterRadio = styled.div`
  ${CIRCLE};
  background-color: ${WHITE};
  border: ${BW_1} solid ${GREY_25};
  min-width: ${DIMENSIONAL_SPACING};
  min-height: ${DIMENSIONAL_SPACING};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerRadio = styled(Field)`
  ${CIRCLE};
  align-items: center;
  margin-bottom: ${S_025};
  cursor: pointer;
  outline: none;

  &:after {
    ${CIRCLE};
    top: ${TOP_SPACING};
    left: ${LEFT_SPACING};
    width: ${S_1};
    height: ${S_1};
    background-color: ${WHITE};
    position: relative;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;

    ${({ selected }) => selected && `background-color: ${CLARK_SECONDARY}`};
  }
`;

export const Label = styled.label`
  ${TITLE};
  ${TS_5};
  ${FW_100};
  color: ${({ hasInput, isSelected }) => (hasInput && !isSelected ? GREY_50 : GREY_100)};
  margin-left: calc(${S_025} + ${S_05});
  display: block;
`;
