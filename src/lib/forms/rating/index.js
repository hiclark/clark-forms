import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

import Label from '../label';
import { SPACING_SMALL, SPACING_MEDIUM, SPACING_LARGE } from '../../styles/spacing';
import { FONT_WEIGHT_100 } from '../../styles/font-weight';
import { TYPE_SCALE_F5 } from '../../styles/type-scale';
import { CLARK_PRIMARY, CLARK_SECONDARY, GREY_25, WHITE } from '../../styles/colors';
import { BORDER_RADIUS_100 } from '../../styles/border-radius';
import { BORDER_WIDTH_1 } from '../../styles/borders';

const Rating = ({
  name,
  values,
  icon,
  input,
  label,
  labelHint,
  required,
  ratingKey: { left, right },
}) => (
  <RatingContainer>
    {label && (
      <LabelWrapper>
        <Label name={name} label={label} required={required} labelHint={labelHint} />
      </LabelWrapper>
    )}
    <RatingContent>
      {values.map(({ value, label: itemLabel }) => {
        const isSelected = value === input.value;
        const onClickHandler = () => {
          const newValue = isSelected ? null : value;
          input.onChange(newValue);
        };
        return (
          <RatingEntry key={value}>
            <RadioButton selected={isSelected} onClick={onClickHandler}>
              <Icon selected={isSelected}>{icon}</Icon>
            </RadioButton>
            <ItemLabel htmlFor={name}>{itemLabel}</ItemLabel>
          </RatingEntry>
        );
      })}
    </RatingContent>
    <RatingKeys>
      <RatingKey>{left}</RatingKey>
      <RatingKey>{right}</RatingKey>
    </RatingKeys>
  </RatingContainer>
);

type PropsType = any;
export default (props: PropsType) => <Field component={Rating} {...props} />;

const RatingContainer = styled.div`
  padding: ${SPACING_MEDIUM};
  display: inline-block;
`;

const RatingKeys = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${SPACING_MEDIUM};
`;

const RatingKey = styled.h6`
  color: ${CLARK_SECONDARY};
  margin: 0 0 ${SPACING_MEDIUM} 0;
  ${TYPE_SCALE_F5};
  ${FONT_WEIGHT_100};
`;

const RatingContent = styled.div`
  align-items: center;
  display: flex;
`;

const RadioButton = styled.div`
  ${BORDER_RADIUS_100};
  align-items: center;
  background-color: ${WHITE};
  border: ${BORDER_WIDTH_1} solid ${GREY_25};
  color: ${CLARK_PRIMARY};
  cursor: pointer;
  display: flex;
  height: 25px;
  width: 25px;
  transition: all 0.25s ease-in-out;

  ${({ selected }) =>
    selected &&
    `
    background-color: ${CLARK_PRIMARY};
    color: white;
    border: ${BORDER_WIDTH_1} solid ${CLARK_PRIMARY};
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

const ItemLabel = styled.label`
  ${TYPE_SCALE_F5};
  ${FONT_WEIGHT_100};
  color: ${CLARK_SECONDARY};
  display: block;
  margin-top: ${SPACING_SMALL};
  text-align: center;
`;

const RatingEntry = styled.div`
  margin-right: ${SPACING_LARGE};

  &:last-child {
    margin-right: 0;
  }
`;

const LabelWrapper = styled.div`
  margin-bottom: ${SPACING_MEDIUM};
`;
