// @flow

type ValidationType = (value: any) => ?string;

export const isRequired: ValidationType = (value: ?any) =>
  value && (value !== '$' || value.length === 0) ? undefined : 'Required';

export const length = (targetLength: number): ValidationType => value =>
  value && value.length !== targetLength ? `Must be ${targetLength} characters` : undefined;

export const maxLength = (max: number): ValidationType => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = (min: number): ValidationType => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const isNumber: ValidationType = value =>
  value && !value.match(/^[0-9]+$/) ? 'Must be a number' : undefined;

export const isMoney: ValidationType = value =>
  value && !value.match(/^[$]?[0-9]+([.]{1}[0-9]{2})?$/)
    ? 'Must be a dollar value (ex. 45.50)'
    : undefined;

export const isEmail: ValidationType = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const isPhoneNumber: ValidationType = value =>
  value && !/^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;

export const isTime: ValidationType = value =>
  value && !/^(10|11|12|[1-9]):[0-5][0-9]$/.test(value) ? 'Invalid time' : undefined;

export const isDivisibleBy = (divisor: number): ValidationType => value =>
  value && value % 0.25 !== 0 ? `Must be divisible by ${divisor}` : undefined;

export const isPositive: ValidationType = value =>
  value && value <= 0 ? 'Must be a positive number' : undefined;

export const hasDigit = (contentType: string): ValidationType => value =>
  value && !value.match(/\d/)
    ? `Uh oh, your ${contentType} must contain at least one digit`
    : undefined;

export const hasLowercaseLetter = (contentType: string): ValidationType => value =>
  value && !value.match(/[a-z]/)
    ? `Uh oh, your ${contentType} must contain at least one lowercase letter`
    : undefined;

export const hasUppercaseLetter = (contentType: string): ValidationType => value =>
  value && !value.match(/[A-Z]/)
    ? `Uh oh, your ${contentType} must contain at least one uppercase letter`
    : undefined;

export const hasSpecialCharacter = (contentType: string): ValidationType => value =>
  value && !value.match(/[\W]/)
    ? `Uh oh, your ${contentType} must contain at least one special character`
    : undefined;

export const hasSpaceCharacter = (contentType: string): ValidationType => value =>
  value && value.match(/[\s]/) ? `Uh oh, your ${contentType} can not contain a space` : undefined;
