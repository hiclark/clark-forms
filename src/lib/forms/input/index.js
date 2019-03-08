import React, { Fragment, Component, type Node } from 'react';
import { Field } from 'redux-form';
import { ToolTip } from 'clark-styles';

import Error from '../error';
import Label from '../label';
import { InputContainer, FormInput, ToggleButton, Copy, List, Item, CheckIcon } from './styles';

const PASSWORD_REQUIREMENTS = ['8 characters', '1 number', '1 special character', '1 uppercase'];

const progressivelyValidate = (value: string) => {
  const validFields = [
    value.length > 7 && 0,
    value.match(/\d/) && 1,
    value.match(/[\W]/) && 2,
    value.match(/[A-Z]/) && 3,
  ];

  return validFields;
};

const renderProgressValidationsText = (value: string) => {
  const validFields = progressivelyValidate(value);
  return (
    <List>
      {PASSWORD_REQUIREMENTS.map((requirement: string, index: number) => (
        <Item key={requirement}>
          <CheckIcon isValid={validFields.includes(index)} />
          {requirement}
        </Item>
      ))}
    </List>
  );
};

const renderField = ({
  input,
  hasShowHideButton,
  inputType,
  handleInputVisibilityToggle,
  hasPasswordRequirements,
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
    {hasPasswordRequirements && renderProgressValidationsText(input.value)}
  </Fragment>
);

export type InputType = {
  name: string,
  label: string,
  copy: ?string,
  inputType: string,
  required: boolean,
  disabled: boolean,
  tooltip: Node,
  hasShowHideButton: boolean,
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
    const { name, label, copy, required, disabled, tooltip, hasShowHideButton } = this.props;

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
