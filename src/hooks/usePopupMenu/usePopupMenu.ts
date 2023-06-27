import React, { KeyboardEvent, useEffect, useState } from 'react';
import { SelectOption, findIndexByFirstChar } from '@/common';

export interface UsePopupMenuProps {
  options: Array<SelectOption>;
  onOptionChange: (option: SelectOption) => void;
}

/**
 * Hook used for using all the popup menu functionalities
 * (key down/up, enter, scroll to, etc).
 */
export const usePopupMenu = ({ options, onOptionChange }: UsePopupMenuProps) => {
  const defaultCursorPosition = -1;
  const [cursor, setCursor] = useState(defaultCursorPosition);

  const refs = options.reduce((acc: any, value) => {
    acc[value.value] = React.createRef();
    return acc;
  }, {});

  const onScroll = (option?: SelectOption) => {
    if (!option) return;
    if (refs[option.value].current === null) return;
    refs[option.value].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  useEffect(() => onScroll(options.at(cursor)), [cursor]);

  const setOptionCursor = (option: SelectOption) => {
    const newCursor = options.findIndex((item) => item.value === option.value);
    setCursor(newCursor);
  };

  const onArrowDown = () => setCursor(cursor + 1);

  const onArrowUp = () => setCursor(cursor - 1);

  const onEnter = (option: SelectOption) => {
    setOptionCursor(option);
    onOptionChange(option);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    const { key } = event;
    if (key === 'ArrowDown' && cursor < options.length - 1) {
      onArrowDown();
      return;
    }
    if (key === 'ArrowUp' && cursor > 0) {
      onArrowUp();
      return;
    }
    if (key === 'Enter') {
      onEnter(options.at(cursor) as SelectOption);
      return;
    }

    const newCursor = findIndexByFirstChar(options, key);
    if (newCursor !== -1) setCursor(newCursor);
  };

  return { refs, onKeyDown, onEnter, setOptionCursor, cursor };
};
