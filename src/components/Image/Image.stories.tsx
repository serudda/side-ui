import { Image } from './Image';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI Components/Image',
  component: Image,
  tags: ['autodocs'],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'assets/images/default-avatar.svg',
  },
};

export const WithFallback: Story = {
  args: {
    src: 'BROKEN/default-avatar.svg',
    fallbackImage: 'assets/images/alt-avatar.svg',
    alt: 'Fallback Avatar',
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates using a fallback image when the primary image source fails.',
      },
    },
  },
};

export const CustomErrorState: Story = {
  render: (args) => (
    <Image
      src="BROKEN/default-avatar.svg"
      alt="Broken Image"
      noImg={<div style={{ color: 'red', fontSize: '20px' }}>Image not available</div>}
      {...args}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows a custom JSX element when both the primary and fallback images fail to load.',
      },
    },
  },
};
