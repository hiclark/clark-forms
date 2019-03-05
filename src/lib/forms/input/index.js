import React, { Fragment, Component, type Node } from 'react';
import { Field } from 'redux-form';
import { ToolTip } from 'clark-styles';

import Error from '../error';
import Label from '../label';
import { InputContainer, FormInput, ToggleButton, Copy } from './styles';

const renderField = ({
  input,
  hasShowHideButton,
  inputType,
  handleInputVisibilityToggle,
  meta: { touched, error },
  ...rest
}) => (
  <Fragment>
    {/* we rename the inputType prop to avoid a colision with the type attribute
    that is used to specify which form element to render */}
    <InputContainer showError={!(error && touched)}>
      <FormInput
        {...rest}
        {...input}
        showError={!(error && touched)}
        type={inputType}
        hasShowHideButton={hasShowHideButton}
      />
      {hasShowHideButton && (
        <ToggleButton
          role="button"
          tabIndex={0}
          onKeyPress={handleInputVisibilityToggle}
          onClick={handleInputVisibilityToggle}
        >
          {inputType === 'password' ? 'show' : 'hide'}
        </ToggleButton>
      )}
    </InputContainer>
    <Error touched={touched} error={error} />
  </Fragment>
);

export type InputType = {
  name: string,
  label: string,
  copy: ?string,
  inputType: string,
  hasShowHideButton: boolean,
  required: boolean,
  disabled: boolean,
  tooltip: Node,
};

type StateType = { isMasked: boolean };
class Input extends Component<InputType, StateType> {
  state = {
    isMasked: false,
  };

  handleInputVisibilityToggle = () => {
    this.setState({
      isMasked: !this.state.isMasked,
    });
  };

  render() {
    const { isMasked } = this.state;
    const { name, label, copy, hasShowHideButton, required, disabled, tooltip } = this.props;
    return (
      <Fragment>
        <Label name={name} label={label} required={required} disabled={disabled} />
        {copy && <Copy>{copy}</Copy>}
        {tooltip ? (
          <ToolTip
            tipPosition="middle"
            content={tooltip}
            trigger={
              <Field
                inputType={isMasked ? 'text' : 'password'}
                hasShowHideButton={hasShowHideButton}
                handleInputVisibilityToggle={this.handleInputVisibilityToggle}
                component={renderField}
                disabled
                {...this.props}
              />
            }
          />
        ) : (
          <Field
            {...this.props}
            component={renderField}
            disabled={disabled}
            inputType={isMasked ? 'text' : 'password'}
            hasShowHideButton={hasShowHideButton}
            handleInputVisibilityToggle={this.handleInputVisibilityToggle}
          />
        )}
      </Fragment>
    );
  }
}

export default Input;
