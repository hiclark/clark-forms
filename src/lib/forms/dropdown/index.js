import React from 'react';
import { Field } from 'redux-form';
import Select from 'react-select';
import styled from 'styled-components';

import Error from '../error';
import {
  CLARK_ACCENT_PRIMARY,
  CLARK_ACCENT_PRIMARY_30,
  CLARK_SECONDARY,
  GREY_25,
  WHITE,
} from '../../styles/colors';
import { BORDER_RADIUS_F2 } from '../../styles/border-radius';
import { TYPE_SCALE_F4 } from '../../styles/type-scale';
import { FONT_FAMILY_PRIMARY } from '../../styles/font-family';
import { FONT_WEIGHT_100 } from '../../styles/font-weight';
import { BORDER_WIDTH_1 } from '../../styles/borders';
import Label from '../label';

const renderDropdown = ({
  input,
  index,
  options,
  placeholder,
  columns,
  multi,
  meta: { touched, error },
}) => (
  <div>
    <StyledSelect
      {...input}
      index={index}
      multi={multi}
      options={options}
      onChange={({ value }) => input.onChange(value)}
      onBlur={() => input.onBlur(input.value)}
      value={options.find(({ value }) => value === input.value) || input.value}
      placeholder={placeholder}
      columns={columns}
      classNamePrefix="select"
    />
    <Error touched={touched} error={error} />
  </div>
);

type PropsType = any;
const Dropdown = ({
  index,
  name,
  label,
  values,
  placeholder,
  columns,
  validate,
  multi,
  required,
  onChange,
}: PropsType) => (
  <DropdownContainer>
    <Label name={name} label={label} required={required} />
    <Field
      index={index}
      name={name}
      multi={multi}
      component={renderDropdown}
      options={values}
      columns={columns}
      validate={validate}
      onChange={onChange}
      placeholder={placeholder}
    />
  </DropdownContainer>
);

export default Dropdown;

const DropdownContainer = styled.div`
  display: block;
`;

const StyledSelect = styled(Select)`
  color: ${CLARK_SECONDARY};
  ${FONT_WEIGHT_100};
  ${TYPE_SCALE_F4};
  ${FONT_FAMILY_PRIMARY};
  background: ${WHITE};

  &:focus {
    outline: none;
  }

  .select__control {
    ${BORDER_RADIUS_F2};
    border: ${BORDER_WIDTH_1} solid ${GREY_25} !important;
    box-shadow: none !important;
  }
  .select__control--is-focused {
    border: none;
  }

  .select__indicator-separator {
    display: none;
  }

  .select__indicator {
    color: ${CLARK_ACCENT_PRIMARY} !important;
    padding: 0.75rem;
  }

  .select__option--is-focused {
    background-color: ${CLARK_ACCENT_PRIMARY_30} !important;
  }

  .select__option--is-selected {
    background-color: ${CLARK_ACCENT_PRIMARY} !important;
  }

  .select__menu {
    margin-top: 0;
  }
`;
