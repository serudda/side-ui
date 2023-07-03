import { Dispatch, SetStateAction, useCallback, useState } from 'react';

/**
 * The useToggle hook allows you to toggle between two states.
 * @refence https://usehooks-ts.com/react-hook/use-toggle
 */
export const useToggle = (
  defaultValue?: boolean,
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => setValue((x) => !x), []);

  return [value, toggle, setValue];
};
