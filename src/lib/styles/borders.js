import { css } from 'styled-components';

import media from './media-queries';
import { BORDER_RADIUS_F2 } from './border-radius';
import { SPACING_EXTRA_SMALL } from './spacing';

export const BORDER_WIDTH_1 = '1px';
export const BORDER_WIDTH_2 = '2px';
export const BORDER_WIDTH_3 = '3px';

const renderBorderRadiusSides = (index, column) => {
  if (index === 1) {
    return css`
      border-radius: ${SPACING_EXTRA_SMALL} 0 0 ${SPACING_EXTRA_SMALL};
      margin-right: -${BORDER_WIDTH_1};
    `;
  } else if (index === column) {
    return css`
      border-radius: 0 ${SPACING_EXTRA_SMALL} ${SPACING_EXTRA_SMALL} 0;
      margin-left: -${BORDER_WIDTH_1};
    `;
  }
  return css`
    border-radius: 0;
    margin-left: -${BORDER_WIDTH_1};
    width: 101%; /* overlap right side */
  `;
};

export const renderBorderRadius = props => {
  const { columns: { small, large }, index } = props;
  const indexBaseOne = index + 1;

  if (small > 1) {
    return css`
      ${renderBorderRadiusSides(indexBaseOne, small)};
      /* this conditional is because we take a mobile (small) first strategy with our styles */
      ${media.small`
        ${renderBorderRadiusSides(indexBaseOne, small)};
      `};
    `;
  } else if (large > 1) {
    return css`
      ${media.small`
          ${renderBorderRadiusSides(indexBaseOne, large)};
      `};
    `;
  }

  return css`
    ${BORDER_RADIUS_F2};
  `;
};
