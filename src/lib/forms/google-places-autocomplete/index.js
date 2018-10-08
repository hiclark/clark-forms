import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import styled from 'styled-components';
import { Field } from 'redux-form';
import Label from '../label';

const renderFunc = ({ loading, getInputProps, getSuggestionItemProps, suggestions }) => (
  <div className="autocomplete-root">
    <input {...getInputProps()} />
    <div className="autocomplete-dropdown-container">
      {loading && <div>Loading...</div>}
      {suggestions.map(suggestion => (
        <div {...getSuggestionItemProps(suggestion)}>
          <span>{suggestion.description}</span>
        </div>
      ))}
    </div>
  </div>
);

const GoogleAutocomplete = ({ input }) => {
  const inputProps = {
    value: input.value,
    type: 'search',
    placeholder: 'Search Places...',
    onChange: input.onChange,
  };

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  return (
    <PlacesAutocomplete
      value={input.value}
      onChange={input.onChange}
      onSelect={handleSelect}
      inputProps={inputProps}
    >
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
