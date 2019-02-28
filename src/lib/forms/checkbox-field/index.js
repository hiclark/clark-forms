// @flow

import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import { Flex } from 'clark-styles';
import { HiddenField, LabelText, Layout, StyledCheck, StyledInput, Wrapper } from './styles';
import Error from '../error';

const renderField = ({ disabled, hasInput, index, input, label, meta, ...rest }) => {
  const { checked, name, onChange, value } = input;
  const { touched, error } = meta;

  return (
    <Fragment>
      <HiddenField>
        <input
          id={`${name}-${index}`}
          index={index}
          component="input"
          error={value === false ? error : undefined}
          {...rest}
          {...input}
        />
      </HiddenField>

      <Layout disabled={disabled}>
        <label htmlFor={`${name}-${index}`}>
          <Flex alignItems="center">
            <Wrapper>
              <StyledCheck checked={checked} />
            </Wrapper>
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
          </Flex>
        </label>
      </Layout>
      <Error touched={touched} error={value === false ? error : undefined} />
    </Fragment>
  );
};

const CheckboxField = (props: any) => <Field {...props} type="checkbox" component={renderField} />;

export default CheckboxField;
