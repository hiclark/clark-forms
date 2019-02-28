// @flow

import React, { type Node } from 'react';
import { Field, type FormProps } from 'redux-form';
import CheckboxField from '../checkbox-field';
import Label from '../label';

const group = ({ input, label, meta, options, required }) => {
  const { onBlur, onChange, name, value: inputValue } = input;

  const checkboxes = options.map(
    ({ disabled, label: checkboxLabel, required: fieldRequired, value }): Node => {
      const handleChange = () => {
        const arr = [...inputValue];
        if (arr.includes(value)) {
          arr.splice(arr.indexOf(value), 1);
        } else {
          arr.push(value);
        }
        onBlur();
        return onChange(arr);
      };

      return (
        <CheckboxField
          key={`${label}-${value}`}
          disabled={disabled}
          handleChange={handleChange}
          hasInput={!!input.value}
          label={checkboxLabel}
          name={`${name}[${checkboxLabel}]`}
          required={fieldRequired}
          value={value}
          {...meta}
        />
      );
    },
  );

  return (
    <div>
      <Label name={name} label={label} required={required} />
      {checkboxes}
    </div>
  );
};

type PropsType = {
  options: Array<{ label: any, value: string }>,
  input: FormProps,
};

const CheckboxGroup = (props: PropsType) => <Field component={group} {...props} />;

export default CheckboxGroup;
