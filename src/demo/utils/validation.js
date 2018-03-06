const isRequired = value => {
  console.log(value);
  return value && value !== '$' ? undefined : 'Required';
};
const length = val => value =>
  value && value.length !== val ? `Must be ${val} characters` : undefined;
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const isNumber = value => (value && !value.match(/^[0-9]+$/) ? 'Must be a number' : undefined);
const isMoney = value =>
  value && !value.match(/^[$]?[0-9]+([.]{1}[0-9]{2})?$/) ? 'Must be a number' : undefined;
const isEmail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
const isPhoneNumber = value =>
  value && !/^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;

export { isRequired, maxLength, minLength, isNumber, isMoney, isEmail, isPhoneNumber, length };
