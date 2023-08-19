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
  title: 'UI Components/SlideOver',
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
      <div className="h-screen">
        <SlideOver {...args}>
          <div className="flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div className="font-bold ">Sergio Ruiz</div>
          </div>
        </SlideOver>
      </div>
    );
  },
};

const OverflowScrollExample = (args: SlideOverProps) => {
  return (
    <div className="h-screen">
      <SlideOver {...args}>
        <div
          className="h-full overflow-scroll text-white"
          style={{ scrollbarColor: 'transparent transparent' }}
        >
          <div className="flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div className="font-bold ">Sergio Ruiz</div>
          </div>
          <div className="mt-10 flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div className="font-bold ">Samuel Llibre Santos</div>
          </div>
          <div className="mt-10 flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div className="font-bold ">Sergio Ruiz</div>
          </div>{' '}
          <div className="mt-10 flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div className="font-bold ">Samuel Llibre Santos</div>
          </div>{' '}
          <div className="mt-10 flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div className="font-bold ">Sergio Ruiz</div>
          </div>{' '}
          <div className="mt-10 flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div className="font-bold ">Samuel Llibre Santos</div>
          </div>{' '}
          <div className="mt-10 flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div className="font-bold ">Sergio Ruiz</div>
          </div>{' '}
          <div className="mt-10 flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div className="font-bold ">Samuel Llibre Santos</div>
          </div>{' '}
          <div className="mt-10 flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div className="font-bold ">Sergio Ruiz</div>
          </div>{' '}
          <div className="mt-10 flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div className="font-bold ">Samuel Llibre Santos</div>
          </div>{' '}
          <div className="mt-10 flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div className="font-bold ">Sergio Ruiz</div>
          </div>
        </div>
      </SlideOver>
    </div>
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
    <div className="h-screen">
      <Button
        startIcon={IconCatalog.squareHalf}
        size={ButtonSize.xs}
        variant={ButtonVariant.tertiary}
        onClick={toggleSlideOver}
      />
      <SlideOver {...args} isOpen={SlideOverOpen} onClick={toggleSlideOver}>
        <div className="flex h-20 gap-4 rounded bg-slate-800 p-4">
          <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
          <div className="font-bold ">Sergio Ruiz</div>
        </div>
      </SlideOver>
    </div>
  );
};

export const ExampleWithButton: Story = {
  render: (args) => <ButtonExample {...args} />,
};
