export const dollarsToCents = (dollars: string | number): number =>
  parseInt(String(dollars).replace('$', ''), 10) * 100;

export const centsToDollars = (cents: number): string => `$${(cents / 100).toFixed(2)}`;

export const formatDollars = (dollars: string): string => dollars.replace(dollars, `$${dollars}`);

type ChargeType = { attributes: { amountInCents: number } };

type ChargesType = {
  [id: string]: ChargeType,
};

export const totalChargesAsDollars = (charges: ChargesType): string => {
  const amounts: number[] = Object.keys(charges).map(key => charges[key].attributes.amountInCents);

  const totalDollars: string = centsToDollars(amounts.reduce((sum, current) => sum + current));

  return totalDollars;
};
