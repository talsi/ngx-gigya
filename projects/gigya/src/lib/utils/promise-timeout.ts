const DEFAULT_REQUEST_TIMEOUT_MS = 10 * 1000;

export function promiseTimeout<T>(promise: Promise<T>, timeout: number = DEFAULT_REQUEST_TIMEOUT_MS): Promise<T> {
  const timeoutPromise  = new Promise<T>((resolve, reject) => {
    const id = setTimeout(() => {
      clearTimeout(id);
      reject('Promise timed out in ' + timeout + 'ms. ');
    }, timeout);
  });
  return Promise.race([promise, timeoutPromise ]);
}
