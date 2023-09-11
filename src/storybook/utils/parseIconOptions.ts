import { IconCatalog } from '@components';

/**
 * parseIconOptions
 * @description - Parse the item in order to show the reaal Icon name on the Storybook option's list
 * @returns {CSSProperties}
 */
export const parseIconOptions = () => {
  const optionList = (Object.keys(IconCatalog) as Array<keyof typeof IconCatalog>).map((key) => ({
    [key]: IconCatalog[key],
  }));
  return optionList.reduce(
    (accumulatedOptions, currentOption) => ({ ...accumulatedOptions, ...currentOption }),
    {},
  );
};
