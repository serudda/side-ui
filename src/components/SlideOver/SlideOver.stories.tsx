import { useState } from 'react';
import { Meta, type StoryObj } from '@storybook/react';
import {
  Button,
  ButtonSize,
  ButtonVariant,
  Icon,
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
        <SlideOver {...args}></SlideOver>
      </div>
    );
  },
};

const OverflowScrollExample = (args: SlideOverProps) => {
  return (
    <div className="h-screen">
      <SlideOver {...args} className="">
        <div
          className="flex h-full flex-col gap-6 overflow-scroll text-lg text-white "
          style={{ scrollbarColor: 'transparent transparent' }}
        >
          <div className="flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div>Sergio Ruiz</div>
          </div>
          <div className=" flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div>Samuel Llibre Santos</div>
          </div>
          <div className=" flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div>Sergio Ruiz</div>
          </div>
          <div className=" flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div>Samuel Llibre Santos</div>
          </div>
          <div className=" flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div>Sergio Ruiz</div>
          </div>
          <div className=" flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div>Samuel Llibre Santos</div>
          </div>
          <div className=" flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div>Sergio Ruiz</div>
          </div>
          <div className=" flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div>Samuel Llibre Santos</div>
          </div>
          <div className=" flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div>Sergio Ruiz</div>
          </div>
          <div className=" flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div>Samuel Llibre Santos</div>
          </div>
          <div className=" flex h-20 gap-4 rounded bg-slate-800 p-4">
            <div className="h-10 w-10 rounded-full border border-solid border-slate-500 bg-slate-950"></div>
            <div>Sergio Ruiz</div>
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
        isOnlyIcon
        size={ButtonSize.xs}
        variant={ButtonVariant.tertiary}
        onClick={toggleSlideOver}
      >
        <Icon icon={IconCatalog.squareHalf} className="w-6" />
      </Button>
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
