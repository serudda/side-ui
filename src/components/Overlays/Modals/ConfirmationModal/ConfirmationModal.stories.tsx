import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonVariant } from '@/components';
import { useModal } from '@/hooks';
import { BasicModalHeader } from '../ModalSections';
import { ConfirmationModal, type ConfirmationModalProps } from './ConfirmationModal';

const meta = {
  title: 'UI Components/Overlays/Modals/ConfirmationModal',
  component: ConfirmationModal,
  tags: ['autodocs'],
  args: {
    description: 'This action cannot be undone. Please confirm.',
    cancelBtnLabel: 'Cancel',
    confirmBtnLabel: 'Add new item',
    confirmBtnVariant: ButtonVariant.destructive,
  },
} satisfies Meta<typeof ConfirmationModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const TemplateExample = (args: ConfirmationModalProps) => {
  const { modalNode, openModal } = useModal();
  const [items, setItems] = useState<Array<string>>([]);

  const handleClick = async () => {
    const item = await openModal<string | null>((close) => (
      <ConfirmationModal
        {...args}
        header={
          <BasicModalHeader
            title="Confirmation Modal"
            hasCloseBtn={false}
            onClose={() => close(null)}
          />
        }
        onClose={() => close(null)}
        onConfirm={() => close('New Item')}
      />
    ));

    if (!item) return; // Do nothing if the action wasn't confirmed

    // Change items
    setItems([...items, item]);
  };

  return (
    <>
      <Button size={ButtonSize.xs} onClick={handleClick} invert>
        Add Item
      </Button>
      {modalNode}
    </>
  );
};

export const Default: Story = {
  render: (args) => <TemplateExample {...args} />,
};
