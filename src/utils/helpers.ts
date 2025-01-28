export const formatUSD = (value: string) => {
  const num = parseFloat(value);
  if (num >= 1e6) {
    return `$${(num / 1e6).toFixed(2)}M`;
  }
  return `$${num.toFixed(2)}`;
};

export const formatAPY = (value: string) => {
  return `${parseFloat(value).toFixed(2)}%`;
};

export const formatAddress = (address: string) => {
  if (address.length <= 10) return address;
  return `${address.slice(0, 5)}...${address.slice(-6)}`;
};
