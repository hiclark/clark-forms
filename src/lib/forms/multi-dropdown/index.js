import React from 'react';
import { Field } from 'redux-form';
import Select from 'react-select';
import styled from 'styled-components';
import { COLORS, BORDER_RADIUS, TYPE_SCALE, SPACING, FONT_WEIGHT } from 'clark-styles';

import Error from '../error';
import { CLARK_ACCENT_PRIMARY, CLARK_ACCENT_PRIMARY_30, GREY_25 } from '../../styles/colors';
import { BORDER_RADIUS_F2 } from '../../styles/border-radius';
import { TYPE_SCALE_F4 } from '../../styles/type-scale';
import { FONT_FAMILY_PRIMARY } from '../../styles/font-family';
import { FONT_WEIGHT_100, FONT_WEIGHT_400 } from '../../styles/font-weight';
import { BORDER_WIDTH_1 } from '../../styles/borders';
import Label from '../label';

const INDICATOR_SPACING = '0.75rem'; // 12px;

const renderDropdown = ({
  input,
  index,
  options,
  placeholder,
  columns,
  meta: { touched, error },
  disabled,
  noOptionsMessage,
  isClearable = false,
  noDropdownIndicator,
}) => (
  <div>
    <StyledSelect
      {...input}
      index={index}
      isMulti
      options={options}
      noOptionsMessage={() => noOptionsMessage || 'No options'}
      onChange={args => input.onChange(args.map(({ value }) => value))}
      onBlur={event => event.preventDefault()}
      value={options.filter(({ value }) => input.value.includes(value))}
      placeholder={placeholder}
      columns={columns}
      classNamePrefix="select"
      isDisabled={disabled}
      isClearable={isClearable}
      noDropdownIndicator={noDropdownIndicator}
    />
    <Error touched={touched} error={error} />
  </div>
);

type PropsType = any;
const MultiDropdown = ({
  disabled,
  index,
  name,
  label,
  values,
  placeholder,
  columns,
  validate,
  required,
  onChange,
  stripped,
  noOptionsMessage,
  isClearable,
  noDropdownIndicator,
}: PropsType) => (
  <DropdownContainer>
    {!stripped && <Label name={name} label={label} required={required} />}
    <Field
      index={index}
      name={name}
      component={renderDropdown}
      options={values}
      noOptionsMessage={noOptionsMessage}
      isClearable={isClearable}
      columns={columns}
      validate={validate}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      noDropdownIndicator={noDropdownIndicator}
    />
  </DropdownContainer>
);

export default MultiDropdown;

const DropdownContainer = styled.div`
  display: block;
`;

const { CLARK_PRIMARY, CLARK_SECONDARY, WHITE, GREY_100 } = COLORS;
const { S_05, S_1 } = SPACING;
const { BR_4, CIRCLE } = BORDER_RADIUS;
const { FW_600 } = FONT_WEIGHT;
const { TS_6 } = TYPE_SCALE;

const StyledSelect = styled(Select)`
  color: ${GREY_100};
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
    min-height: 44px;
  }
  .select__control--is-focused {
    border: none;
  }

  .select__indicator-separator {
    display: none;
  }

  .select__indicator {
    color: ${CLARK_ACCENT_PRIMARY} !important;
    padding: ${INDICATOR_SPACING};
  }

  .select__option--is-focused {
    background-color: ${CLARK_ACCENT_PRIMARY_30} !important;
  }

  .select__option--is-selected {
    background-color: ${CLARK_ACCENT_PRIMARY} !important;
    ${FONT_WEIGHT_400};
  }

  .select__menu {
    margin-top: 0;
  }

  .select__multi-value {
    background: ${CLARK_SECONDARY};
    ${BR_4};
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${WHITE};
    padding: 0;
    ${FW_600};
  }

  .select__multi-value__label {
    color: #fff;
    ${TS_6};
    padding: ${S_05} ${S_05} ${S_05} ${S_1};
  }

  .select__multi-value__remove {
    &:hover {
      background: inherit;
      ${CIRCLE};
      color: ${CLARK_PRIMARY};
    }
    svg {
      height: 20px;
      width: 20px;
    }
  }

  .select__indicators {
    display: ${({ noDropdownIndicator }) => (noDropdownIndicator ? 'none' : 'flex')};
  }
`;
