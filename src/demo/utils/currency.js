export const dollarsToCents = dollars => String(dollars).replace('$', '') * 100;
export const centsToDollars = cents => `$${(cents / 100).toFixed(2)}`;
export const formatDollars = dollars => dollars.replace(dollars, `$${dollars}`);

export const totalChargesAsDollars = charges => {
  const amounts = Object.keys(charges).map(key => charges[key].attributes.amountInCents);
  const totalDollars = centsToDollars(amounts.reduce((sum, current) => sum + current));
  return totalDollars;
};
