import React from 'react';
import { reduxForm, Form, Field } from 'redux-form';
import required from './validations/required';
import minimum from './validations/minValue';
import Amount from './CustomFields/Amount';

const MyForm = ({ min }) => {
  const minValue = minimum(min);
  const validate = [required, minValue(min)];
  return (
    <Form onSubmit={v => console.log(v)}>
      <Field
        type="number"
        name="amount"
        label={`Donation Amount ($)`}
        required
        component={Amount}
        validate={[validate]}
      />
      <button type="submit">Submit (check console)</button>
    </Form>
  );
};

export default reduxForm({ form: 'donation' })(MyForm);
