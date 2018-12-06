// @flow

import React, { type Node } from 'react';
import { type LocationShape } from 'react-router-dom';

import { Container, Copy, SecondaryIcon, StyledButton, StyledLink } from './styles';

type PropsType = {
  children: Node,
  disabled?: boolean,
  icon?: Node,
  onClick?: () => void,
  path?: string | LocationShape,
  styleType?: string,
  type?: string,
};

const Button = ({ children, disabled, icon, onClick, path, styleType, type }: PropsType) => (
  <Container>
    {path ? (
      <StyledLink disabled={disabled} styleType={styleType} to={path}>
        {children}
      </StyledLink>
    ) : (
      <StyledButton
        disabled={disabled}
        icon={icon}
        onClick={onClick}
        styleType={styleType}
        type={type}
      >
        {icon && <SecondaryIcon>{icon}</SecondaryIcon>}
        <Copy>{children}</Copy>
      </StyledButton>
    )}
  </Container>
);

Button.defaultProps = {
  disabled: false,
  icon: null,
  onClick: () => {},
  path: null,
  styleType: 'primary',
  type: 'submit',
};

export default Button;
