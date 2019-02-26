// @flow

import React, { type Node } from 'react';
import { Field, type FormProps } from 'redux-form';
import Checkbox from './checkbox';
import Label from '../label';

const group = ({ input, label, meta, options, required }) => {
  const { onBlur, onChange, name, value: inputValue } = input;
  const { error, touched } = meta;
  console.log('GRP META:', meta);

  const checkboxes = options.map(
    ({ disabled, label: checkboxLabel, required: fieldRequired, value }, index): Node => {
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

      const checked = inputValue.includes(value);
      console.log('meta:', meta);
      return (
        <Checkbox
          key={`${label}-${value}`}
          checked={checked}
          disabled={disabled}
          error={error}
          handleChange={handleChange}
          hasInput={!!input.value}
          index={index}
          label={checkboxLabel}
          name={`${name}[${checkboxLabel}]`}
          required={fieldRequired}
          touched={touched}
          value={value}
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
