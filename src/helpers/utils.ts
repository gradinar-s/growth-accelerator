export const formatCurrency = (prize: number, currency: string = "USD") => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(prize);
};

export const getPrizesList = (count: number, init: number) => {
  const indices = new Array(count - 1).fill(null).map((_, index) => index);
  const result = indices.reduce((acc, i) => [...acc, acc[i] * 2], [init]);

  return result.map((i) => formatCurrency(i));
};
