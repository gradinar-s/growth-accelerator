export const formatCurrency = (prize, currency = "USD") => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(prize);
};

export const getPrizesList = (count, init) => {
  const indices = new Array(count - 1).fill().map((_, index) => index);
  const result = indices.reduce((acc, i) => [...acc, acc[i] * 2], [init]);

  return result.map((i) => formatCurrency(i));
};
