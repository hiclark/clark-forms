// @flow

export const normalizeNumbers = (max: number) => (value: ?any) => {
  if (!value) {
    return value;
  }

  const numbers = value.replace(/[^\d]/g, ''); // only integers
  return numbers.length > max ? numbers.substr(0, max) : numbers; // set maxLength
};

export default normalizeNumbers;
