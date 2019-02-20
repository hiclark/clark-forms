// @flow
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import { Flex } from 'clark-styles';
import { StyledCheck, HiddenField, LabelText, Layout, Wrapper } from './styles';
import Error from '../error';

type PropsType = {
  checked: boolean,
  disabled: boolean,
  // error: any,
  index: number,
  handleChange(): void,
  hasInput: boolean,
  label: string,
  name: string,
  required: boolean,
  touched: boolean,
  value: string,
};

const Checkbox = ({
  checked,
  disabled,
  // error,
  index,
  handleChange,
  hasInput,
  label,
  name,
  required,
  touched,
  value,
}: PropsType) => (
  <Fragment>
    <HiddenField>
      <Field
        id={`${name}-${index}`}
        name={name}
        disabled={disabled}
        checked={checked}
        value={value}
        index={index}
        component="input"
        onClick={handleChange}
      />
    </HiddenField>

    <Layout disabled={disabled} showError={touched && required && !checked}>
      <label htmlFor={`${name}-${index}`} onChange={handleChange} onKeyDown={handleChange}>
        <Flex alignItems="center">
          <Wrapper>
            <StyledCheck checked={checked} />
          </Wrapper>
          <LabelText deselected={hasInput && !checked} disabled={disabled}>
            {label}
          </LabelText>
        </Flex>
      </label>
    </Layout>
    {required && !checked && <Error touched={touched} error="Error" />}
  </Fragment>
);

export default Checkbox;
