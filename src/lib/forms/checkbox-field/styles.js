import styled from 'styled-components';
import { BORDER_WIDTH, COLORS, FONT_WEIGHT, LINE_HEIGHT, SPACING, TYPE_SCALE } from 'clark-styles';

import Check from '../../../demo/assets/icons/check.svg';

const { BW_1 } = BORDER_WIDTH;
const { CLARK_SECONDARY, GREY_25, GREY_100, WHITE } = COLORS;
const { FW_100 } = FONT_WEIGHT;
const { TITLE } = LINE_HEIGHT;
const { S_025, S_05, S_1 } = SPACING;
const { TS_5 } = TYPE_SCALE;

const BORDER_RADIUS = '4px';
const DIMENSIONAL_SPACING = `calc(${S_1} + ${S_05} + ${S_025})`;

export const HiddenField = styled.div`
  display: none;
`;

export const Layout = styled.div`
  opacity: ${({ disabled }) => disabled && '0.5'};
`;

export const Wrapper = styled.div`
  cursor: pointer;
  background-color: ${WHITE};
  width: ${DIMENSIONAL_SPACING};
  height: ${DIMENSIONAL_SPACING};
  border: ${BW_1} solid ${GREY_25};
  border-radius: ${BORDER_RADIUS};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCheck = styled(Check)`
  color: ${CLARK_SECONDARY};
  visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  width: calc(${S_1} + ${S_025});
  height: calc(${S_1} + ${S_025});
  background-color: white;
`;

export const LabelText = styled.p`
  ${TITLE};
  ${TS_5};
  ${FW_100};
  color: ${GREY_100};
  margin-left: ${S_05};
`;
