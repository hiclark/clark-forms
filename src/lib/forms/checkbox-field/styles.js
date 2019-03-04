import styled from 'styled-components';
import {
  BORDER_WIDTH,
  BORDER_RADIUS,
  COLORS,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SPACING,
  TYPE_SCALE,
} from 'clark-styles';
import Check from './check.svg';

const { BW_1 } = BORDER_WIDTH;
const { BR_2 } = BORDER_RADIUS;
const { CLARK_SECONDARY, GREY_25, GREY_50, GREY_100, WHITE } = COLORS;
const { FW_100 } = FONT_WEIGHT;
const { TITLE } = LINE_HEIGHT;
const { S_025, S_05, S_1 } = SPACING;
const { TS_5 } = TYPE_SCALE;
const BOX_DIMENSIONS = `calc(${S_1} + ${S_05} + ${S_025})`;

export const StyledInput = styled.input`
  position: absolute;
  width: 100%;
  opacity: 0;
`;

export const HiddenField = styled.input`
  display: none;
`;

export const Layout = styled.div`
  margin-bottom: ${S_1};
  opacity: ${({ disabled }) => disabled && '0.5'};
`;

export const Wrapper = styled.div`
  ${BR_2};
  background-color: ${WHITE};
  min-width: ${BOX_DIMENSIONS};
  min-height: ${BOX_DIMENSIONS};
  border: ${BW_1} solid ${GREY_25};
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// $FlowFixMe
export const StyledCheck = styled(Check)`
  color: ${CLARK_SECONDARY};
  visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  width: calc(${S_1} + ${S_025});
  height: calc(${S_1} + ${S_025});
  background-color: white;
`;

export const LabelText = styled.label`
  ${TITLE};
  ${TS_5};
  ${FW_100};
  color: ${({ deselected }) => (deselected ? GREY_50 : GREY_100)};
  opacity: ${({ disabled }) => disabled && '0.5'};
  margin-left: ${S_05};
  cursor: pointer;
`;
