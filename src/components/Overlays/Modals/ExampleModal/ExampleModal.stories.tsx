import { Button, ButtonSize, ButtonVariant } from '@components';
import { Modal, ModalBgColor, ModalSize } from './ExampleModal';
import type { Meta, StoryObj } from '@storybook/react';

const ModalBodyLongSample = () => {
  return <div className="font-regular h-56 w-[370px] text-left text-neutral-50"></div>;
};

const meta = {
  title: 'UI Components/Overlays/Modals/ExampleModal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    bgColor: ModalBgColor.slate,
    size: ModalSize.base,
    title: 'Share with people',
    subtitle: 'The following users have access to this project:',
    body: <ModalBodyLongSample />,
    footer: (
      <div className="flex w-full items-center justify-end space-x-4">
        <Button variant={ButtonVariant.tertiary} size={ButtonSize.sm} isFullWidth invert>
          Cancel
        </Button>
        <Button variant={ButtonVariant.primary} size={ButtonSize.sm} isFullWidth>
          Done
        </Button>
      </div>
    ),
    onClose: () => console.log('close modal'),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="inline-flex w-full items-center justify-center space-x-3">
        <Modal {...args} />
      </div>
    );
  },
};
