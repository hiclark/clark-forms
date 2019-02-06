/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';
import { BORDER_WIDTH, COLORS, FONT_WEIGHT, LINE_HEIGHT, SPACING, TYPE_SCALE } from 'clark-styles';

import Check from '../../../demo/assets/icons/check.svg';

const { BW_1 } = BORDER_WIDTH;
const { CLARK_SECONDARY, GREY_25, GREY_100 } = COLORS;
const { FW_100 } = FONT_WEIGHT;
const { TITLE } = LINE_HEIGHT;
const { S_025, S_05, S_1 } = SPACING;
const { TS_5 } = TYPE_SCALE;

const renderField = ({ disabled, index, label, input: { value: checked, name, onChange } }) => (
  <Fragment>
    <HiddenField>
      <Field
        id={`${name}-${index}`}
        name={name}
        disabled={disabled}
        component="input"
        value={checked}
        type="checkbox"
        index={index}
      />
    </HiddenField>
    <label htmlFor={`${name}-${index}`} onClick={onChange} onKeyDown={onChange}>
      <Wrapper>
        <Outer>{checked && <Checkmark checked={checked} />}</Outer>
        <LabelText>{label}</LabelText>
      </Wrapper>
    </label>
  </Fragment>
);

type PropsType = any;
const CheckboxField = (props: PropsType) => <Field component={renderField} {...props} />;

export default CheckboxField;

const BORDER_RADIUS = '4px';
const DIMENSIONAL_SPACING = `calc(${S_1} + ${S_05} + ${S_025})`;

const HiddenField = styled.div`
  display: none;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Outer = styled.div`
  width: ${DIMENSIONAL_SPACING};
  height: ${DIMENSIONAL_SPACING};
  border: ${BW_1} solid ${GREY_25};
  border-radius: ${BORDER_RADIUS};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Checkmark = styled(Check)`
  color: ${CLARK_SECONDARY};
  visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  width: calc(${S_1} + ${S_025});
  height: calc(${S_1} + ${S_025});
  background-color: white;
`;

const LabelText = styled.p`
  ${TITLE};
  ${TS_5};
  ${FW_100};
  color: ${GREY_100};
  margin-left: ${S_05};
`;
