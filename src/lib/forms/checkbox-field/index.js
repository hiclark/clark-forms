// @flow

import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import {
  HiddenField,
  InputWrapper,
  LabelText,
  Layout,
  StyledCheck,
  StyledInput,
  CheckWrapper,
} from './styles';
import Error from '../error';

const renderField = ({
  disabled,
  hasInput,
  index,
  input,
  label,
  meta: { error, touched },
  ...rest
}) => {
  const { checked, name, onChange, value } = input;

  return (
    <Fragment>
      <HiddenField
        id={`${name}-${index}`}
        index={index}
        component="input"
        error={error}
        {...rest}
        {...input}
      />

      <Layout disabled={disabled}>
        <label htmlFor={`${name}-${index}`}>
          <InputWrapper alignItems="center">
            <CheckWrapper>
              <StyledCheck checked={checked} />
            </CheckWrapper>
            <StyledInput
              {...input}
              {...rest}
              checked={checked}
              label={label}
              name={name}
              onChange={onChange}
              type="checkbox"
              value={value}
              showError={!(error && touched)}
            />
            <LabelText disabled={disabled} deselected={hasInput && !checked}>
              {label}
            </LabelText>
          </InputWrapper>
        </label>
      </Layout>
      <Error touched={touched} error={error} />
    </Fragment>
  );
};

const CheckboxField = (props: any) => <Field {...props} type="checkbox" component={renderField} />;

export default CheckboxField;
