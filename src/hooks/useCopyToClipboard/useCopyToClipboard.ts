import { useState } from 'react';

type TargetType = string | React.RefObject<HTMLElement>;

interface Output {
  copied: boolean;
  setCopied: React.Dispatch<React.SetStateAction<boolean>>;
  copy: (target: TargetType) => Promise<boolean>;
}

export const useCopyToClipboard = (): Output => {
  const [copied, setCopied] = useState(false);

  const getTextFromTarget = (target: TargetType): string | null | undefined => {
    if (typeof target === 'string') return target;
    return target.current?.textContent;
  };

  const copy = async (target: TargetType) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    try {
      const text = getTextFromTarget(target);
      if (!text) return false;

      await navigator.clipboard.writeText(text);
      setCopied(true);
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopied(false);
      return false;
    }
  };

  return { copy, copied, setCopied };
};
