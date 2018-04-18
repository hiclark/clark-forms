import React from 'react';
import { Field } from 'redux-form';
import Select from 'react-styled-select';
import styled from 'styled-components';

import Error from '../error';
import { CLARK_PRIMARY, CLARK_SECONDARY, GREY_25, TRANSPARENT, WHITE } from '../../styles/colors';
import { BORDER_RADIUS_F2 } from '../../styles/border-radius';
import { TYPE_SCALE_F4 } from '../../styles/type-scale';
import { FONT_FAMILY_PRIMARY } from '../../styles/font-family';
import { FONT_WEIGHT_100 } from '../../styles/font-weight';
import { BORDER_WIDTH_1, BORDER_WIDTH_2, renderBorderRadius } from '../../styles/borders';
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
    <DropdownSelect
      {...input}
      index={index}
      multi={multi}
      options={options}
      onChange={input.onChange}
      placeholder={placeholder}
      columns={columns}
      classes={{
        selectControl: 'select__control',
        selectMultiValueWrapper: 'select__multi-value-wrapper',
        selectPlaceholder: 'select__placeholder',
        selectValue: 'select__value',
        selectValueLabel: 'select__value-label',
        selectArrow: 'select__arrow',
        selectOption: 'select__option',
      }}
    />
    <Error touched={touched} error={error} />
  </div>
);

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
}) => (
  <DropdownContainer>
    <Label name={name} label={label} required={required} />

    <Field
      index={index}
      name={name}
      multi={multi}
      component={renderDropdown}
      options={values}
      placeholder={placeholder}
      columns={columns}
      validate={validate}
      onChange={onChange}
    />
  </DropdownContainer>
);

export default Dropdown;

const DropdownContainer = styled.div`
  display: block;
`;

const DropdownSelect = styled(Select)`
  ${BORDER_RADIUS_F2};
  border: ${BORDER_WIDTH_1} solid ${GREY_25};
  display: block;
  outline: none;
  width: 100%;
  z-index: 9;
  ${props => renderBorderRadius(props)};

  .select__control {
    background-color: ${TRANSPARENT};
    border: 0;
    cursor: pointer;
    padding: 0.6rem; /* this placeholder text isn't flush vertically in div*/
    line-height: 0;
  }

  .select__multi-value-wrapper {
    padding: 0;
  }

  .select__value {
    line-height: 1;
    padding: 0;
  }

  .select__value-label {
    ${TYPE_SCALE_F4};
    ${FONT_FAMILY_PRIMARY};
    ${FONT_WEIGHT_100};
    color: ${CLARK_SECONDARY};
  }

  .select__placeholder {
    ${TYPE_SCALE_F4};
    ${FONT_FAMILY_PRIMARY};
    ${FONT_WEIGHT_100};
    color: ${GREY_25};
    line-height: 1;
    padding: 0;
    position: relative;
  }

  .select__arrow {
    border-color: ${CLARK_PRIMARY};
    border-width: ${BORDER_WIDTH_2};
    transition: all 0.25s ease-in-out;
  }

  .select__option {
    ${TYPE_SCALE_F4};
    ${FONT_FAMILY_PRIMARY};
    ${FONT_WEIGHT_100};
    background-color: ${WHITE};
    color: ${CLARK_SECONDARY};
    transition: all 0.25s ease-in-out;
  }
`;
