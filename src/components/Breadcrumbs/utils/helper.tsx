import { ReactNode } from 'react';

/**
 * Calculates the children to display before collapsing the items.
 * Ensures a minimum of 1 item is shown before the collapse and takes into account
 * the specified number of items to show after the collapse.
 *
 * The number of items to display before collapsing.
 * @param {number} itemsBeforeCollapse
 *
 * The number of items to display after collapsing.
 * @param {number} itemsAfterCollapse
 *
 * The array of React nodes representing the children.
 * @param {Array<ReactNode>} childrenArray
 *
 * The subset of childrenArray to be displayed before collapsing.
 * @return {Array<ReactNode>}
 */
export const calculateChildrenBeforeCollapse = (
  itemsBeforeCollapse: number,
  itemsAfterCollapse: number,
  childrenArray: Array<ReactNode>,
) => {
  let childrenBeforeCollapse: Array<ReactNode> = [];
  const hasChildren = childrenArray.length > 0;

  if (hasChildren) {
    /**
     * Calculate the maximum number of items that can be shown before
     * the collapse, ensuring that at least one item is always displayed.
     */
    const maxItemsBeforeCollapse = Math.max(1, itemsBeforeCollapse);

    /**
     * Determine the upper bound for slicing based on the number of items
     * to remain after the collapse, ensuring that this calculation
     * does not produce a negative index.
     */
    const maxIndexBasedOnAfterCollapse = Math.max(0, childrenArray.length - itemsAfterCollapse);

    /**
     * Decide the actual index up to which children should be included
     * before the collapse.
     * This is the minimum between the calculated maximum items before collapse
     * and the adjusted length considering items after the collapse.
     */
    const sliceIndex = Math.min(maxItemsBeforeCollapse, maxIndexBasedOnAfterCollapse);

    /**
     * Slice the array to include only the determined number of
     * children before the collapse.
     */
    childrenBeforeCollapse = childrenArray.slice(0, sliceIndex);
  }

  return childrenBeforeCollapse;
};

/**
 * Calculate the children to display after collapsing the items.
 * The number of items to display after collapsing
 * @param {number} itemsAfterCollapse
 *
 * The array of React nodes representing the children
 * @param {Array<ReactNode>} childrenArray
 *
 * The array of React nodes to display after collapsing
 * @return {Array<ReactNode>}
 */
export const calculateChildrenAfterCollapse = (
  itemsAfterCollapse: number,
  childrenArray: Array<ReactNode>,
) => {
  let childrenAfterCollapse: Array<ReactNode> = [];

  switch (true) {
    /**
     * If itemsAfterCollapse is greater than or equal
     * to the length of the array,
     * show all elements except the first one.
     */
    case itemsAfterCollapse >= childrenArray.length:
      childrenAfterCollapse = childrenArray.slice(1);
      break;

    /**
     * If itemsAfterCollapse is less than or equal to 0,
     * only show the last element of the array.
     */
    case itemsAfterCollapse <= 0:
      childrenAfterCollapse = childrenArray.slice(-1);
      break;

    /**
     * Otherwise, show the last N elements of the array,
     * where N is the greater of 1 and itemsAfterCollapse.
     */
    default:
      childrenAfterCollapse = childrenArray.slice(-Math.max(1, itemsAfterCollapse));
  }

  return childrenAfterCollapse;
};

/**
 * Calculates the subset of children that are collapsed
 * based on the visible children before and after the collapse.
 *
 *The array of React nodes representing all children.
 * @param {Array<ReactNode>} childrenArray
 *
 * The array of React nodes to be displayed before the collapse.
 * @param {Array<ReactNode>} childrenBeforeCollapse
 *
 * The array of React nodes to be displayed after the collapse.
 * @param {Array<ReactNode>} childrenAfterCollapse
 *
 * The subset of childrenArray that is collapsed.
 * @return {Array<ReactNode>}
 */
export const calculateCollapsedChildren = (
  childrenArray: Array<ReactNode>,
  childrenBeforeCollapse: Array<ReactNode>,
  childrenAfterCollapse: Array<ReactNode>,
) => {
  /**
   * Slices `childrenArray` to get the collapsed children,
   * based on visible children counts before and after collapse.
   * The start index is the length of `childrenBeforeCollapse`,
   * and the end index is calculated by subtracting
   * the length of `childrenAfterCollapse` from the total array length,
   * effectively capturing the middle portion to hide.
   */
  return childrenArray.slice(
    childrenBeforeCollapse.length,
    childrenArray.length - childrenAfterCollapse.length,
  );
};
