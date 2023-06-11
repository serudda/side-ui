import { useEffect } from 'react';

const addBodyClass = (className: string): void => document.body.classList.add(className);
const removeBodyClass = (className: string): void => document.body.classList.remove(className);

export const useBodyClass = (className: Array<string> | string): void => {
  useEffect(() => {
    // Set up
    className instanceof Array ? className.map(addBodyClass) : addBodyClass(className);

    // Clean up
    return (): void => {
      className instanceof Array ? className.map(removeBodyClass) : removeBodyClass(className);
    };
  }, [className]);
};
