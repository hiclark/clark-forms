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
  toggleInputVisibility,
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
          onKeyPress={toggleInputVisibility}
          onClick={toggleInputVisibility}
        >
          {inputType === 'password' ? 'show' : 'hide'}
        </ToggleButton>
      )}
    </InputContainer>
    <Error touched={touched} error={error} />
    {hasPasswordRequirements && renderProgressValidationsText(input.value)}
  </Fragment>
);

type InputTypeType = 'password' | 'text';

export type InputType = {
  name: string,
  label: string,
  copy: ?string,
  inputType: InputTypeType,
  required: boolean,
  disabled: boolean,
  tooltip: Node,
  hasShowHideButton: boolean,
  stripped: ?boolean,
};

type StateType = { derivedInputType: InputTypeType };

class Input extends Component<InputType, StateType> {
  // This is generally considered an anti-pattern except in this use case
  // where we are only using the prop as seed data and
  // we don't care about prop changes
  state = {
    derivedInputType: this.props.inputType,
  };

  toggleInputVisibility = () => {
    const inputTypeToggle = this.state.derivedInputType === 'password' ? 'text' : 'password';
    this.setState({
      derivedInputType: inputTypeToggle,
    });
  };

  render() {
    const { derivedInputType } = this.state;
    const {
      name,
      label,
      copy,
      required,
      disabled,
      tooltip,
      hasShowHideButton,
      stripped,
    } = this.props;
    return (
      <Fragment>
        {!stripped && <Label name={name} label={label} required={required} disabled={disabled} />}
        {copy && <Copy>{copy}</Copy>}
        {tooltip ? (
          <ToolTip
            tipPosition="middle"
            content={tooltip}
            trigger={
              <Field
                inputType={derivedInputType}
                hasShowHideButton={hasShowHideButton}
                toggleInputVisibility={this.toggleInputVisibility}
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
            inputType={derivedInputType}
            hasShowHideButton={hasShowHideButton}
            toggleInputVisibility={this.toggleInputVisibility}
          />
        )}
      </Fragment>
    );
  }
}

export default Input;
