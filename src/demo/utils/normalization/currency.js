import { formatDollars } from '../currency';

const normalizeCurrency = max => value => {
  const numbers = value.replace(/[^\d]/g, ''); // only integers
  const maxValue = numbers.length > max ? numbers.substr(0, max) : numbers; // set maxLength
  return formatDollars(maxValue);
};

export default normalizeCurrency;
