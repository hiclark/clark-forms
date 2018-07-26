// @flow

export const normalizeNumbers = (max: number) => (value: ?any) => {
  const numbers = value && value.replace(/[^\d]/g, ''); // only integers
  return numbers && numbers.length > max ? numbers.substr(0, max) : numbers; // set maxLength
};

export default normalizeNumbers;
