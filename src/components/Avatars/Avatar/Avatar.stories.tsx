import { Avatar } from './Avatar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI Components/Avatars/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgUrl: 'assets/images/default-avatar.svg',
  },
};
