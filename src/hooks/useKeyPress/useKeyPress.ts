import { useCallback, useEffect, useState } from 'react';

/**
 * This hook makes it easy to detect when the user is pressing a specific key on their keyboard.
 * @refence https://usehooks.com/useKeyPress/
 */

export const useKeyPress = (targetKey: string): boolean => {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  const downHandler = useCallback(
    ({ key }: { key: string }): void => {
      if (key === targetKey) setKeyPressed(true);
    },
    [targetKey],
  );

  // If released key is our target key then set to false
  const upHandler = useCallback(
    ({ key }: { key: string }): void => {
      if (key === targetKey) setKeyPressed(false);
    },
    [targetKey],
  );

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
};
