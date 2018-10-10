// @flow

import { css } from 'styled-components';

// NOTE: This must always be the lowest value
export const Z_INDEX_BOTTOM = css`
  z-index: -1;
`;

export const Z_INDEX_0 = css`
  z-index: 0;
`;

export const Z_INDEX_1 = css`
  z-index: 1;
`;

export const Z_INDEX_2 = css`
  z-index: 2;
`;

export const Z_INDEX_3 = css`
  z-index: 3;
`;

// NOTE: This must always be the greatest value
export const Z_TOP = 9;

export const Z_INDEX_TOP = css`
  z-index: ${Z_TOP};
`;
