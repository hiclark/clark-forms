import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import styled from 'styled-components';
import { Field } from 'redux-form';
import Label from '../label';
import { SPACING_EXTRA_SMALL, SPACING_SMALL } from '../../styles/spacing';
import { FONT_FAMILY_PRIMARY } from '../../styles/font-family';
import { FONT_WEIGHT_100, FONT_WEIGHT_400 } from '../../styles/font-weight';
import { BORDER_WIDTH_1 } from '../../styles/borders';
import { LINE_HEIGHT_SOLID } from '../../styles/line-height';
import { WHITE, CLARK_SECONDARY, GREY_25, CLARK_ACCENT_PRIMARY } from '../../styles/colors';
import { TYPE_SCALE_F4, TYPE_SCALE_F6 } from '../../styles/type-scale';

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
}) => {
  const inputProps = {
    value,
    type: 'search',
    placeholder,
    onChange,
    showError: !(error && touched),
  };

  return (
    <PlacesAutocomplete value={value} onChange={onChange} inputProps={inputProps}>
      {renderFunc}
    </PlacesAutocomplete>
  );
};

type PropsType = any;

const LocationsAutocomplete = ({
  name,
  label,
  columns,
  validate,
  required,
  ...props
}: PropsType) => (
  <Container>
    <Label name={name} label={label} required={required} />
    <Field
      name={name}
      component={GoogleAutocomplete}
      columns={columns}
      validate={validate}
      {...props}
    />
  </Container>
);

export default LocationsAutocomplete;

const Container = styled.div`
  display: block;
`;

const ComponentWrap = styled.div`
  margin-bottom: ${SPACING_SMALL};
  position: relative;
`;

const FormInput = styled.input`
  ${TYPE_SCALE_F4};
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
  transition: all 0.25s ease-in-out;

  &::placeholder {
    color: ${GREY_25};
  }
`;

const Results = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1000;
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
  transition: all 0.25s ease-in-out;
  cursor: pointer;
`;
