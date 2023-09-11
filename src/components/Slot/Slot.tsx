import { Children, ReactElement, ReactNode, cloneElement, forwardRef, isValidElement } from 'react';
import { mergeReactProps } from '@common';
import { combinedRef } from '@hooks';

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

/**
 * A component that allows you to slot elements into it. Merges its props onto its immediate child.
 */
export const Slot = forwardRef<HTMLElement, SlotProps>((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);

  if (slottable) {
    // The new element to render is the one passed as a child of `Slottable`
    const newElement = slottable.props.children as React.ReactNode;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        // because the new element will be the one rendered, we are only interested
        // in grabbing its children (`newElement.props.children`)
        if (Children.count(newElement) > 1) return Children.only(null);
        return isValidElement(newElement) ? (newElement.props.children as React.ReactNode) : null;
      } else {
        return child;
      }
    });

    return (
      <SlotClone {...slotProps} ref={forwardedRef}>
        {isValidElement(newElement) ? cloneElement(newElement, undefined, newChildren) : null}
      </SlotClone>
    );
  }

  return (
    <SlotClone {...slotProps} ref={forwardedRef}>
      {children}
    </SlotClone>
  );
});

interface SlotCloneProps {
  children: React.ReactNode;
}

export const SlotClone = forwardRef<any, SlotCloneProps>((props, forwardedRef) => {
  const { children, ...slotProps } = props;

  if (isValidElement(children)) {
    return cloneElement(children, {
      ...mergeReactProps(slotProps, children.props),
      ref: combinedRef([forwardedRef, (children as any).ref]),
    } as any);
  }

  return Children.count(children) > 1 ? Children.only(null) : null;
});

const Slottable = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

function isSlottable(child: ReactNode): child is ReactElement {
  return isValidElement(child) && child.type === Slottable;
}

/**
 * @reference
 * https://github.com/ally-ui/ally-ui/blob/main/packages/common/react/lib/Slot.react.tsx
 *
 * asChild in React for render delegation
 * https://medium.com/@bryanmylee/aschild-in-react-svelte-vue-and-solid-for-render-delegation-645c73650ced
 */
