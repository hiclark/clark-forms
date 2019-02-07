/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
import React, { Component, Fragment } from 'react';
import { Field } from 'redux-form';
import { Flex } from 'clark-styles';
import { StyledCheck, HiddenField, LabelText, Layout, Wrapper } from './styles';

const Checkbox = ({ checked, disabled, index, handleChange, hasInput, label, name, value }) => (
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
          <LabelText deselected={hasInput && !checked}>{label}</LabelText>
        </Flex>
      </label>
    </Layout>
  </Fragment>
);

class CheckboxGroup extends Component {
  group = ({ disabled, input, options }) => {
    const { onChange } = input;
    const inputValue = input.value;

    const checkboxes = options.map(({ label, value }, index) => {
      const handleChange = () => {
        const arr = [...inputValue];
        if (!arr.includes(value)) {
          arr.push(value);
        } else {
          arr.splice(arr.indexOf(value), 1);
        }
        return onChange(arr);
      };

      const checked = inputValue.includes(value);
      return (
        <Checkbox
          checked={checked}
          disabled={disabled}
          handleChange={handleChange}
          hasInput={!!input.value}
          index={index}
          label={label}
          name={label}
          value={value}
        />
      );
    });

    return <div>{checkboxes}</div>;
  };

  render() {
    return <Field {...this.props} component={this.group} />;
  }
}

export default CheckboxGroup;
