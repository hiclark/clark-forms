/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import { Flex } from 'clark-styles';
import { StyledCheck, HiddenField, LabelText, Layout, Wrapper } from './styles';

const renderField = ({ disabled, index, label, input: { value: checked, name, onChange } }) => (
  <Fragment>
    <HiddenField>
      <Field
        id={`${name}-${index}`}
        name={name}
        disabled={disabled}
        component="input"
        value={checked}
        type="checkbox"
        index={index}
      />
    </HiddenField>
    <Layout disabled={disabled}>
      <label htmlFor={`${name}-${index}`} onClick={onChange} onKeyDown={onChange}>
        <Flex alignItems="center">
          <Wrapper>{checked && <StyledCheck checked={checked} />}</Wrapper>
          <LabelText>{label}</LabelText>
        </Flex>
      </label>
    </Layout>
  </Fragment>
);

type PropsType = any;
const CheckboxField = (props: PropsType) => <Field component={renderField} {...props} />;

export default CheckboxField;
