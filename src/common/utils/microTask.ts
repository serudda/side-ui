/**
 * This function is used to schedule a microtask.
 * @reference https://github.com/tailwindlabs/headlessui/blob/main/packages/%40headlessui-react/src/utils/micro-task.ts
 */
// Polyfill
export function microTask(cb: () => void) {
  if (typeof queueMicrotask === 'function') {
    queueMicrotask(cb);
  } else {
    Promise.resolve()
      .then(cb)
      .catch((e) =>
        setTimeout(() => {
          throw e;
        }),
      );
  }
}
