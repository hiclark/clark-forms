import React, { Component, type Node } from 'react';
import { type LocationShape } from 'react-router-dom';

import Check from '../../../demo/assets/icons/check.svg';
import Loader from '../../../demo/assets/icons/loader.svg';

import { Container, Label, SecondaryIcon, StyledButton, StyledLink } from './styles';

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
  btnState: string,
  btnLabel: Node,
};

const labelMap = {
  loading: <Loader />,
  success: <Check />,
};

const getBtnProps = activeState => ({
  btnState: activeState,
  btnLabel: labelMap[activeState],
});

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
    btnState: 'active',
    btnLabel: this.props.children,
  };

  componentWillUpdate(_, nextState) {
    if (nextState.btnState === 'loading') {
      const nextBtnState = getBtnProps('success');

      setTimeout(() => this.setState({ ...nextBtnState }), 1000);
    }
  }

  handleClick = () => {
    const { onClick, variant } = this.props;

    if (variant === 'dialog') {
      const nextBtnState = getBtnProps('loading');
      this.setState({ ...nextBtnState });
    }

    // if onClick and variant, call onClick after sequence executes?
    if (onClick) onClick();
  };

  render() {
    const { children, disabled, icon, path, styleType, type, variant } = this.props;
    const { btnLabel, btnState } = this.state;

    return (
      <Container>
        {path ? (
          <StyledLink disabled={disabled} styleType={styleType} to={path}>
            {children}
          </StyledLink>
        ) : (
          <StyledButton
            btnState={btnState}
            disabled={btnState === 'loading' || disabled}
            icon={icon}
            onClick={this.handleClick}
            styleType={styleType}
            type={type}
            variant={variant}
          >
            {icon && (
              <SecondaryIcon btnState={btnState} variant={variant}>
                {icon}
              </SecondaryIcon>
            )}
            <Label hasSecondaryIcon={icon}>{btnLabel}</Label>
          </StyledButton>
        )}
      </Container>
    );
  }
}

export default Button;
