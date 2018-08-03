// @flow

export const normalizeTime = (value: any): string => {
  if (!value) {
    return value;
  }

  const numbers = value.replace(/[^\d]/g, ''); // only integers
  let hours = numbers.slice(0, 2);
  let minutes = numbers.slice(2, 4);

  if (numbers.length <= 2) {
    return numbers;
  }

  if (numbers.length === 3) {
    hours = numbers.slice(0, 1);
    minutes = numbers.slice(1, 3);
  }

  return `${hours}:${minutes}`;
};

export default normalizeTime;
