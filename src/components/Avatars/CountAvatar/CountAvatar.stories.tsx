import { CountAvatar } from './CountAvatar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI Components/Avatars/CountAvatar',
  component: CountAvatar,
  tags: ['autodocs'],
} satisfies Meta<typeof CountAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgUrl: 'assets/images/default-avatar.svg',
    count: 3,
  },
};
