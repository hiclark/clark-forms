// @flow

const isRequired = (value: ?any) => (value && value !== '$' ? undefined : 'Required');
const length = (targetLength: number) => (value: ?any) =>
  value && value.length !== targetLength ? `Must be ${targetLength} characters` : undefined;
const maxLength = (max: number) => (value: ?any) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const minLength = (min: number) => (value: ?any) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const isNumber = (value: ?any) =>
  value && !value.match(/^[0-9]+$/) ? 'Must be a number' : undefined;
const isMoney = (value: ?any) =>
  value && !value.match(/^[$]?[0-9]+([.]{1}[0-9]{2})?$/)
    ? 'Must be a dollar value (ex. 45.50)'
    : undefined;
const isEmail = (value: ?any) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
const isPhoneNumber = (value: ?any) =>
  value && !/^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;
const isTime = (value: ?any) =>
  value && !/^(10|11|12|[1-9]):[0-5][0-9]$/.test(value) ? 'Invalid time' : undefined;
const isDivisibleBy = (divisor: number) => (value: ?any) =>
  value && value % 0.25 !== 0 ? `Must be divisible by ${divisor}` : undefined;
const isPositive = (value: ?any) => (value && value <= 0 ? 'Must be a positive number' : undefined);

export {
  isRequired,
  maxLength,
  minLength,
  isNumber,
  isMoney,
  isEmail,
  isPhoneNumber,
  length,
  isTime,
  isDivisibleBy,
  isPositive,
};
