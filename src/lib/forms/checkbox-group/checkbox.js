// @flow
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import { Flex } from 'clark-styles';
import { StyledCheck, HiddenField, LabelText, Layout, Wrapper } from './styles';

type PropsType = {
  checked: boolean,
  disabled: boolean,
  index: number,
  handleChange: () => void,
  hasInput: boolean,
  label: string,
  name: string,
  value: string | number,
};

const Checkbox = ({
  checked,
  disabled,
  index,
  handleChange,
  hasInput,
  label,
  name,
  value,
}: PropsType) => (
  <Fragment>
    <HiddenField>
      <Field
        id={`${name}-${index}`}
        name={`${name}[${index}]`}
        disabled={disabled}
        checked={checked}
        value={value}
        index={index}
        component="input"
        onClick={handleChange}
      />
    </HiddenField>

    <Layout disabled={disabled}>
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
  </Fragment>
);

export default Checkbox;
