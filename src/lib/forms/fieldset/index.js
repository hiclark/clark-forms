/* eslint react/no-array-index-key: 0 */
/* eslint no-shadow: 0 */
import React from 'react';
import { type Validator, type Normalizer } from 'redux-form';
import styled from 'styled-components';

import RadioButtonGroup from '../radio-button';
import Dropdown from '../dropdown';
import Input, { type InputType } from '../input';
import Checkbox from '../checkbox';
import Textarea from '../textarea';
import DatePicker from '../datepicker';
import DateRangePicker from '../date-range-picker';
import LocationAutocomplete from '../location-autocomplete';
import ToggleButton from '../toggle-button';
import Rating from '../rating';

import media from '../../styles/media-queries';
import { SPACING_SMALL, SPACING_MEDIUM } from '../../styles/spacing';
import { TYPE_SCALE_F4, TYPE_SCALE_F6 } from '../../styles/type-scale';
import { FONT_WEIGHT_100 } from '../../styles/font-weight';
import { CLARK_SECONDARY } from '../../styles/colors';

const mapFieldToComponent = type => {
  const components = {
    input: Input,
    radioButton: RadioButtonGroup,
    checkbox: Checkbox,
    dropdown: Dropdown,
    textarea: Textarea,
    datepicker: DatePicker,
    daterangepicker: DateRangePicker,
    toggleButton: ToggleButton,
    rating: Rating,
    locationAutocomplete: LocationAutocomplete,
  };

  return components[type];
};

const composeComponent = (index: number, field, columns: { small: number, large: number }) => {
  const { type, name } = field;
  const FieldComponent = mapFieldToComponent(type);
  return <FieldComponent key={name} index={index} columns={columns} {...field} />;
};

type BaseFieldSetObjectType = {
  type: 'dropdown' | 'datepicker' | 'input' | 'textarea',
  name: string,
  label: string,
  validate?: Validator | Validator[],
  normalize?: Normalizer | Normalizer[],
};

type InputFieldSetObjectType = {
  type: 'input',
  copy?: string,
  inputType?: InputType,
} & BaseFieldSetObjectType;

type DropdownFieldSetObjectType = {
  type: 'dropdown',
  multi?: boolean,
  values: { value: string, label: string }[],
} & BaseFieldSetObjectType;

type DatePickerFieldSetObjectType = {
  type: 'datepicker',
} & BaseFieldSetObjectType;

type TextAreaFieldSetObjectType = {
  type: 'textarea',
} & BaseFieldSetObjectType;

type FieldSetObjectType =
  | InputFieldSetObjectType
  | DropdownFieldSetObjectType
  | DatePickerFieldSetObjectType
  | TextAreaFieldSetObjectType;

type FieldSetType = {
  title?: string,
  subCopy?: string,
  fields: FieldSetObjectType[],
  columns: { small: number, large: number },
}[];

export type DataType = {
  fieldSet: FieldSetType,
}[];

type PropsType = {
  data: DataType,
};

const Fieldset = ({ data }: PropsType) => (
  <div>
    {data.map(object =>
      object.fieldSet.map((fieldSet, index) => {
        const { fields, title, columns, subCopy } = fieldSet;
        return (
          <div key={index}>
            {title && <FieldsetTitle>{title}</FieldsetTitle>}
            <FieldsetContainer
              key={index}
              columnsSmall={columns.small}
              columnsLarge={columns.large}
            >
              {fields.map((field, index) => (
                <Field
                  key={index}
                  columnsSmall={columns.small}
                  columnsLarge={columns.large}
                  type={field.type}
                >
                  {composeComponent(index, field, columns)}
                </Field>
              ))}
            </FieldsetContainer>
            {subCopy && <FieldsetSubCopy>{subCopy}</FieldsetSubCopy>}
          </div>
        );
      }),
    )}
  </div>
);

export default Fieldset;

const calculateWidth = (columns, type) => {
  if (type === 'radioButton') {
    return `width: ${100 / columns - 2}%;`;
  }

  return `width: ${100 / columns}%;`;
};

const FieldsetContainer = styled.div`
  display: ${props => (props.columnsSmall === 1 ? 'block' : 'flex')};
  justify-content: space-between;

  ${media.small`
    flex-direction: row;
    display: flex;
  `};
`;

const FieldsetTitle = styled.h3`
  ${TYPE_SCALE_F4};
  color: ${CLARK_SECONDARY};
  display: block;
`;

const Field = styled.div`
  ${props => calculateWidth(props.columnsSmall, props.type)};
  margin-bottom: calc(${SPACING_SMALL} + ${SPACING_MEDIUM});
`;

const FieldsetSubCopy = styled.p`
  ${TYPE_SCALE_F6};
  ${FONT_WEIGHT_100};
  color: ${CLARK_SECONDARY};
  margin: -${SPACING_MEDIUM} 0 calc(${SPACING_SMALL} + ${SPACING_MEDIUM}) 0;
`;
