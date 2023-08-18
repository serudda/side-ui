import { useState } from 'react';
import { Meta, type StoryObj } from '@storybook/react';
import {
  Button,
  ButtonSize,
  ButtonVariant,
  IconCatalog,
  SlideOver,
  SlideOverProps,
  SlideOverWidth,
} from '@/components';

const meta = {
  title: 'UI Components/SlideOver/SlideOver',
  component: SlideOver,
  tags: ['autodocs'],
  args: {
    className: '',
    isOpen: true,
    isRightAligned: false,
    isTitleRightAligned: false,
    title: 'side-bar',
    width: SlideOverWidth.base,
    children: <></>,
  },
} satisfies Meta<typeof SlideOver>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <SlideOver {...args}>
        <div className="mt-10 h-20 rounded bg-slate-800 p-4">This is a content</div>
      </SlideOver>
    );
  },
};

const OverflowScrollExample = (args: SlideOverProps) => {
  return (
    <SlideOver {...args}>
      <div
        className="h-full overflow-scroll text-white"
        style={{ scrollbarColor: 'transparent transparent' }}
      >
        <div className="mt-10 h-20 rounded bg-slate-800 p-4">This is a content</div>
        <div className="mt-10 h-20 rounded bg-slate-800 p-4">This is a content</div>
        <div className="mt-10 h-20 rounded bg-slate-800 p-4">This is a content</div>
        <div className="mt-10 h-20 rounded bg-slate-800 p-4">This is a content</div>
        <div className="mt-10 h-20 rounded bg-slate-800 p-4">This is a content</div>
        <div className="mt-10 h-20 rounded bg-slate-800 p-4">This is a content</div>
        <div className="mt-10 h-20 rounded bg-slate-800 p-4">This is a content</div>
        <div className="mt-10 h-20 rounded bg-slate-800 p-4">This is a content</div>
        <div className="mt-10 h-20 rounded bg-slate-800 p-4">This is a content</div>
        <div className="mt-10 h-20 rounded bg-slate-800 p-4">This is a content</div>
        <div className="mt-10 h-20 rounded bg-slate-800 p-4">This is a content</div>
        <div className="mt-10 h-20 rounded bg-slate-800 p-4">This is a content</div>
        <div className="mt-10 h-20 rounded bg-slate-800 p-4">This is a content</div>
        <div className="mt-10 h-20 rounded bg-slate-800 p-4">This is a content</div>
        <div className="mt-10 h-20 rounded bg-slate-800 p-4">This is a content</div>
        <div className="mt-10 h-20 rounded bg-slate-800 p-4">This is a content</div>
      </div>
    </SlideOver>
  );
};

export const ExampleWithOversflowScroll: Story = {
  render: (args) => <OverflowScrollExample {...args} />,
};

const ButtonExample = (args: SlideOverProps) => {
  const [SlideOverOpen, setSlideOverOpen] = useState(false);

  const toggleSlideOver = () => {
    setSlideOverOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <Button
        startIcon={IconCatalog.squareHalf}
        size={ButtonSize.xs}
        variant={ButtonVariant.tertiary}
        onClick={toggleSlideOver}
      />
      <SlideOver {...args} isOpen={SlideOverOpen} onClick={toggleSlideOver}>
        <div className="h-full overflow-scroll text-white">
          <div className="mt-10 h-20 rounded bg-slate-800 p-4">This is a content</div>
        </div>
      </SlideOver>
    </>
  );
};

export const ExampleWithButton: Story = {
  render: (args) => <ButtonExample {...args} />,
};
