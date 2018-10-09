import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

import { SPACING_MEDIUM } from '../../styles/spacing';
import { FONT_WEIGHT_100 } from '../../styles/font-weight';
import { TYPE_SCALE_F5, TYPE_SCALE_F6 } from '../../styles/type-scale';
import { CLARK_PRIMARY, CLARK_SECONDARY, GREY_50, WHITE } from '../../styles/colors';
import { BORDER_RADIUS_100 } from '../../styles/border-radius';
import { BORDER_WIDTH_1 } from '../../styles/borders';

const Rating = ({ name, values, icon, input, ratingKey: { left, right } }) => (
  <RatingContainer>
    <RatingKeys>
      <RatingKey>{left}</RatingKey>
      <RatingKey>{right}</RatingKey>
    </RatingKeys>
    <RatingContent>
      {values.map(({ value, label }) => {
        const isSelected = value === input.value;
        const onClickHandler = () => {
          const newValue = isSelected ? null : value;
          input.onChange(newValue);
        };
        return (
          <div key={value}>
            <RadioButton selected={isSelected} onClick={onClickHandler}>
              <Icon selected={isSelected}>{icon}</Icon>
            </RadioButton>
            <Label htmlFor={name}>{label}</Label>
          </div>
        );
      })}
    </RatingContent>
  </RatingContainer>
);

type PropsType = any;
export default (props: PropsType) => <Field component={Rating} {...props} />;

const RatingContainer = styled.div`
  padding: ${SPACING_MEDIUM};
`;

const RatingKeys = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const RatingKey = styled.h6`
  ${TYPE_SCALE_F6};
  color: ${CLARK_SECONDARY};
  margin: 0 0 ${SPACING_MEDIUM} 0;
`;

const RatingContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const RadioButton = styled.div`
  ${BORDER_RADIUS_100};
  align-items: center;
  background-color: ${WHITE};
  border: ${BORDER_WIDTH_1} solid ${CLARK_PRIMARY};
  color: ${CLARK_PRIMARY};
  cursor: pointer;
  display: flex;
  height: 35px;
  width: 35px;
  transition: all 0.25s ease-in-out;

  ${({ selected }) =>
    selected &&
    `
    background-color: ${CLARK_PRIMARY};
    color: white;
  `};
`;

const Icon = styled.span`
  color: inherit;
  line-height: 0;
  margin: 0 auto;
  opacity: 0;
  width: 50%;

  ${({ selected }) =>
    selected &&
    `
    opacity: 1;
  `};
`;

const Label = styled.label`
  ${TYPE_SCALE_F5};
  ${FONT_WEIGHT_100};
  color: ${GREY_50};
  display: block;
  margin-top: ${SPACING_MEDIUM};
`;
