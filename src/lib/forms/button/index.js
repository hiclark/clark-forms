import React, { Component, type Node } from 'react';
import { type LocationShape } from 'react-router-dom';

import Check from '../../../demo/assets/icons/check.svg';
import Loader from '../../../demo/assets/icons/loader.svg';

import { Container, Copy, SecondaryIcon, StyledButton, StyledLink } from './styles';

type PropsType = {
  children: Node,
  disabled?: boolean,
  icon?: Node,
  onClick?: () => void,
  path?: string | LocationShape,
  variant?: string,
  styleType?: string,
  type?: string,
};

type StateType = {
  buttonStates: Array<mixed>,
};

const times = x => f => {
  if (x > 0) {
    f();
    times(x - 1)(f);
  }
};

class Button extends Component<PropsType, StateType> {
  static defaultProps = {
    disabled: false,
    icon: null,
    onClick: () => {},
    path: null,
    variant: null,
    styleType: 'primary',
    type: 'submit',
  };

  state = {
    currentStateIdx: 0,
    buttonStates: [
      { key: 0, name: 'active', value: this.props.children },
      { key: 1, name: 'loading', value: <Loader /> },
      { key: 2, name: 'successful', value: <Check /> },
    ],
  };

  updateButtonState = () =>
    setTimeout(this.setState({ currentStateIdx: this.state.currentStateIdx + 1 }), 1000);

  scheduleNextButtonState = () =>
    this.setState({ currentStateIdx: this.state.currentStateIdx + 1 });

  handleClick = () => {
    const { onClick, variant } = this.props;

    if (variant && variant === 'dialog') this.scheduleNextButtonState();
    if (onClick) onClick();
  };

  render() {
    const { children, disabled, icon, variant, path, styleType, type } = this.props;
    console.log(variant, 'VALUE:', this.state.buttonStates[0].value);

    return (
      <Container>
        {path ? (
          <StyledLink disabled={disabled} styleType={styleType} to={path}>
            {children}
          </StyledLink>
        ) : (
          <StyledButton
            disabled={this.state.buttonState === 'disabled' || disabled}
            icon={icon}
            onClick={this.handleClick}
            styleType={styleType}
            type={type}
          >
            {icon && <SecondaryIcon>{icon}</SecondaryIcon>}
            <Copy hasSecondaryIcon={icon}>
              {this.state.buttonStates[this.state.currentStateIdx].value}
            </Copy>
          </StyledButton>
        )}
      </Container>
    );
  }
}

export default Button;
