// @flow

import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import { Flex } from 'clark-styles';
import { HiddenField, LabelText, Layout, StyledCheck, StyledInput, Wrapper } from './styles';

const renderField = ({ disabled, hasInput, index, input, label }) => (
  <Fragment>
    <HiddenField>
      <Field
        id={`${input.name}-${index}`}
        name={input.name}
        checked={input.checked}
        value={input.value}
        index={index}
        component="input"
        onClick={input.onChange}
      />
    </HiddenField>

    <Layout disabled={disabled}>
      <label htmlFor={`${input.name}-${index}`} onChange={input.onChange}>
        <Flex alignItems="center">
          <Wrapper>
            <StyledCheck checked={input.checked} />
          </Wrapper>
          <StyledInput
            checked={input.checked}
            label={label}
            name={input.name}
            onChange={input.onChange}
            type="checkbox"
            value={input.value}
          />
          <LabelText disabled={disabled} deselected={hasInput && !input.checked}>
            {label}
          </LabelText>
        </Flex>
      </label>
    </Layout>
  </Fragment>
);

const CheckboxField = (props: any) => <Field {...props} type="checkbox" component={renderField} />;

export default CheckboxField;
