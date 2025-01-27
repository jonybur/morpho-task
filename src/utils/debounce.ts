export function debounce<T extends string, R>(
  func: (arg: T, signal: AbortSignal) => Promise<R>,
  wait: number
): (arg: T) => Promise<R> {
  let timeout: ReturnType<typeof setTimeout>;
  let currentController: AbortController | null = null;

  return async (arg: T): Promise<R> => {
    // Cancel previous request if it exists
    if (currentController) {
      currentController.abort();
    }

    // Create new controller for this request
    currentController = new AbortController();
    const signal = currentController.signal;

    return new Promise((resolve, reject) => {
      clearTimeout(timeout);
      timeout = setTimeout(async () => {
        try {
          const result = await func(arg, signal);
          resolve(result);
        } catch (error) {
          if ((error as Error).name === 'AbortError') {
            // Ignore abort errors
            return;
          }
          reject(error);
        } finally {
          currentController = null;
        }
      }, wait);
    });
  };
}
