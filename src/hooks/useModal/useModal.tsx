import React, { useState } from 'react';
import { ModalContainer } from '~/components';

/**
 * A function that takes a result of a variable type and returns nothing.
 * This will close our modal and return to the caller of `openModal`.
 */
type CloseModal<ResultType> = (result?: ResultType) => void;

/**
 * A function that builds the UI for a modal.
 * It takes the close function as a parameter and returns a `ReactNode`
 * that we can display.
 */
type ModalFactory<ResultType> = (close: CloseModal<ResultType>) => React.ReactNode;

/**
 * Use `useModal` to display a modal which can resolve a value when closing it.
 * @reference This hook was extracted from https://www.esveo.com/en/blog/O5
 */
export const useModal = () => {
  // The react node has to be stored somewhere
  const [modalNode, setModalNode] = useState<React.ReactNode>(null);

  const openModal = <ModalResult,>(modalFactory: ModalFactory<ModalResult>) =>
    new Promise<ModalResult | undefined>((resolve) => {
      const close = (value?: ModalResult) => {
        resolve(value);

        // When the modal should be closed, we set our state to null
        // to stop rendering a dialog
        setModalNode(null);
      };

      const modal = <ModalContainer>{modalFactory(close)}</ModalContainer>;

      // To open the dialog, we store the resulting jsx in our state
      setModalNode(modal);
    });

  // We return the modalNode (or null) and the openModal function
  return { modalNode, openModal };
};
