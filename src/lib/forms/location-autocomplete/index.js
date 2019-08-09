import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import styled from 'styled-components';
import { Field } from 'redux-form';
import { TYPE_SCALE } from 'clark-styles';

import Label from '../label';
import { SPACING_EXTRA_SMALL, SPACING_SMALL } from '../../styles/spacing';
import { FONT_FAMILY_PRIMARY } from '../../styles/font-family';
import { FONT_WEIGHT_100, FONT_WEIGHT_400 } from '../../styles/font-weight';
import { BORDER_WIDTH_1 } from '../../styles/borders';
import { LINE_HEIGHT_SOLID } from '../../styles/line-height';
import { WHITE, CLARK_SECONDARY, GREY_25, CLARK_ACCENT_PRIMARY } from '../../styles/colors';
import { TYPE_SCALE_F6 } from '../../styles/type-scale';
import { Z_INDEX_3 } from '../../styles/z-index';
import { EASE_IN_OUT_25 } from '../../styles/transitions';

const { TS_5 } = TYPE_SCALE;

const renderFunc = ({ loading, getInputProps, getSuggestionItemProps, suggestions }) => {
  const inputProps = getInputProps();

  return (
    <ComponentWrap className="autocomplete-root">
      <FormInput {...inputProps} />
      <Results className="autocomplete-dropdown-container">
        {loading && <Suggestion>Loading...</Suggestion>}
        {suggestions.map(suggestion => (
          <Suggestion {...getSuggestionItemProps(suggestion, { active: suggestion.active })}>
            {suggestion.description}
          </Suggestion>
        ))}
      </Results>
    </ComponentWrap>
  );
};

const GoogleAutocomplete = ({
  input: { value, onChange },
  meta: { touched, error },
  placeholder,
  onSelect,
  searchOptions,
}) => {
  const inputProps = {
    value,
    type: 'search',
    placeholder,
    onChange,
    onSelect,
    searchOptions,
    showError: !(error && touched),
  };
  return (
    <PlacesAutocomplete
      value={value}
      onChange={onChange}
      onSelect={onSelect}
      inputProps={inputProps}
      searchOptions={searchOptions}
    >
      {renderFunc}
    </PlacesAutocomplete>
  );
};

type PropsType = any;

const LocationAutocomplete = ({
  name,
  label,
  columns,
  validate,
  required,
  stripped,
  onSelect = null,
  searchOptions = {},
  ...props
}: PropsType) => (
  <Container>
    {!stripped && <Label name={name} label={label} required={required} />}
    <Field
      name={name}
      component={GoogleAutocomplete}
      columns={columns}
      validate={validate}
      onSelect={onSelect}
      searchOptions={searchOptions}
      {...props}
    />
  </Container>
);

export default LocationAutocomplete;

const Container = styled.div`
  display: block;
`;

const ComponentWrap = styled.div`
  margin-bottom: ${SPACING_SMALL};
  position: relative;
`;

const FormInput = styled.input`
  height: 44px;
  ${TS_5};
  ${FONT_FAMILY_PRIMARY};
  ${FONT_WEIGHT_100};
  border: ${BORDER_WIDTH_1} solid ${GREY_25};
  color: ${CLARK_SECONDARY};
  display: block;
  line-height: ${LINE_HEIGHT_SOLID};
  padding: calc(${SPACING_EXTRA_SMALL} + ${SPACING_SMALL});
  outline: none;
  width: 100%;
  background-color: ${WHITE};
  ${EASE_IN_OUT_25};

  &::placeholder {
    color: ${GREY_25};
  }
`;

const Results = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  ${Z_INDEX_3};
`;

const Suggestion = styled.div`
  ${TYPE_SCALE_F6};
  ${FONT_FAMILY_PRIMARY};
  ${({ active }) => (active ? FONT_WEIGHT_400 : FONT_WEIGHT_100)};
  border: ${BORDER_WIDTH_1} solid ${GREY_25};
  border-top: none;
  display: block;
  line-height: ${LINE_HEIGHT_SOLID};
  padding: calc(${SPACING_EXTRA_SMALL} + ${SPACING_SMALL});
  outline: none;
  width: 100%;
  background-color: ${({ active }) => (active ? CLARK_ACCENT_PRIMARY : WHITE)};
  color: ${({ active }) => (active ? WHITE : CLARK_SECONDARY)};
  ${EASE_IN_OUT_25};
  cursor: pointer;
`;
