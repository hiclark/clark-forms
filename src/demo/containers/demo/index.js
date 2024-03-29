/* eslint-disable no-console */
import React from 'react';
import { reduxForm } from 'redux-form';

import Fieldset from '../../../lib/forms/fieldset';
import FIELD_SETS from '../../constants/demo';

const handleClick = () => {
  console.log('demo');
};

const Demo = ({ handleSubmit, pristine }) => (
  <div>
    <form onSubmit={handleSubmit(handleClick)}>
      <Fieldset data={FIELD_SETS} />
      <button disabled={pristine}>Next</button>
    </form>
  </div>
);

export default reduxForm({
  form: 'demo',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Demo);
