import { Avatar } from '../Avatar/Avatar';
import { StackedAvatar } from './StackedAvatar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI Components/Avatars/StackedAvatar',
  component: StackedAvatar,
  tags: ['autodocs'],
  args: {
    maxAvatars: 5,
    border: undefined,
    tooltipProps: {
      delayShow: 100,
    },
  },
} satisfies Meta<typeof StackedAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <StackedAvatar maxAvatars={5} {...args}>
        <Avatar imgUrl="assets/images/default-avatar.svg" />
        <Avatar imgUrl="assets/images/default-avatar.svg" />
        <Avatar imgUrl="assets/images/default-avatar.svg" />
        <Avatar imgUrl="assets/images/default-avatar.svg" />
        <Avatar imgUrl="assets/images/default-avatar.svg" />
      </StackedAvatar>
    );
  },
};
