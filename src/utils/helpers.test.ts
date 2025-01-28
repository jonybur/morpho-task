import { formatAddress, formatAPY, formatUSD } from './helpers';

describe('formatUSD', () => {
  it('should format numbers less than 1M', () => {
    expect(formatUSD('1234.567')).toBe('$1234.57');
    expect(formatUSD('0.5')).toBe('$0.50');
    expect(formatUSD('999999.99')).toBe('$999999.99');
  });

  it('should format numbers greater than or equal to 1M', () => {
    expect(formatUSD('1000000')).toBe('$1.00M');
    expect(formatUSD('1500000')).toBe('$1.50M');
    expect(formatUSD('10000000')).toBe('$10.00M');
  });
});

describe('formatAPY', () => {
  it('should format APY with 2 decimal places and percentage sign', () => {
    expect(formatAPY('5')).toBe('5.00%');
    expect(formatAPY('5.5')).toBe('5.50%');
    expect(formatAPY('5.55')).toBe('5.55%');
    expect(formatAPY('5.554')).toBe('5.55%');
    expect(formatAPY('5.556')).toBe('5.56%');
  });
});

describe('formatAddress', () => {
  it('should return the full address if length is 10 or less', () => {
    expect(formatAddress('0x123456')).toBe('0x123456');
    expect(formatAddress('1234567890')).toBe('1234567890');
  });

  it('should truncate addresses longer than 10 characters', () => {
    expect(formatAddress('0x1234567890123456789012345678901234567890')).toBe('0x123...567890');
    expect(formatAddress('abcdefghijklmnopqrstuvwxyz')).toBe('abcde...uvwxyz');
  });
});
