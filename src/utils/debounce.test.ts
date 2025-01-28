import { debounce } from './debounce';

jest.useFakeTimers();

describe('debounce', () => {
  let mockFn: jest.Mock;
  let debouncedFn: (arg: string) => Promise<string>;

  beforeEach(() => {
    mockFn = jest.fn().mockImplementation(async (arg: string) => `processed-${arg}`);
    debouncedFn = debounce(mockFn, 1000);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('should delay function execution', async () => {
    const promise = debouncedFn('test');
    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);
    const result = await promise;

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(result).toBe('processed-test');
  });

  it('should cancel previous calls when called multiple times', async () => {
    debouncedFn('test1');
    debouncedFn('test2');
    const promise3 = debouncedFn('test3');

    jest.advanceTimersByTime(1000);

    const result = await promise3;
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenLastCalledWith('test3', expect.any(AbortSignal));
    expect(result).toBe('processed-test3');
  });

  it('should handle rejected promises', async () => {
    const error = new Error('Test error');
    mockFn.mockRejectedValueOnce(error);

    const promise = debouncedFn('test');
    jest.advanceTimersByTime(1000);

    await expect(promise).rejects.toThrow('Test error');
  });

  it('should ignore AbortError when request is cancelled', async () => {
    let resolvePromise1: (value: string) => void;
    let resolvePromise2: (value: string) => void;
    let callCount = 0;

    mockFn.mockImplementation(async (_: string, signal: AbortSignal) => {
      callCount++;
      return new Promise((resolve, reject) => {
        if (callCount === 1) {
          resolvePromise1 = resolve;
        } else {
          resolvePromise2 = resolve;
        }

        signal.addEventListener('abort', () => {
          const error = new Error('Aborted');
          error.name = 'AbortError';
          reject(error);
        });
      });
    });

    debouncedFn('test1');
    jest.advanceTimersByTime(1000); // Trigger first call

    const promise2 = debouncedFn('test2');
    jest.advanceTimersByTime(1000); // Trigger second call

    // Resolve both promises
    resolvePromise1!('processed-test1');
    resolvePromise2!('processed-test2');

    const result = await promise2;
    expect(result).toBe('processed-test2');
    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenNthCalledWith(1, 'test1', expect.any(AbortSignal));
    expect(mockFn).toHaveBeenNthCalledWith(2, 'test2', expect.any(AbortSignal));
  }, 10000);
});
