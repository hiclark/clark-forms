import styled from 'styled-components';
import { COLORS } from 'clark-styles';

const { CLARK_SECONDARY } = COLORS;
const Link = styled.a`
  color: ${CLARK_SECONDARY};
  text-decoration: underline;
  margin-left: 4px;
`;

export default Link;
