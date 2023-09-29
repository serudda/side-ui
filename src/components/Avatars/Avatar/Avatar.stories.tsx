import { Avatar, AvatarBorder } from './Avatar';
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
    imgUrl: 'https://pbs.twimg.com/profile_images/1645933911514681345/zrDbFWCT_400x400.jpg',
    border: AvatarBorder.primary,
  },
};
