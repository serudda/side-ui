import { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonVariant, Textarea } from '~/components';
import { parseIconOptions } from '~/storybook/utils';
import { CopyButton, CopyButtonProps } from './CopyButton';

const meta = {
  title: 'UI Components/Buttons/Copy Button',
  component: CopyButton,
  argTypes: {
    startIcon: {
      table: {
        type: {
          summary: 'angle, arrowDown, arrowExternal, etc.',
        },
      },
      options: parseIconOptions(),
    },
    endIcon: {
      table: {
        type: {
          summary: 'angle, arrowDown, arrowExternal, etc.',
        },
      },
      options: parseIconOptions(),
    },
  },
  args: {
    target: '',
    isToolTipActive: true,
    isTextActive: true,
    variant: ButtonVariant.primary,
  },
} satisfies Meta<typeof CopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    target: 'Change this text and test it',
  },
};

const CopyButtonExample = (args: CopyButtonProps) => {
  const targetRef = useRef(null);
  const [value, setValue] = useState('This is an example text inside a Textarea');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="relative flex flex-col items-start gap-8">
      <Textarea ref={targetRef} value={value} onChange={handleChange} />
      <CopyButton {...args} target={targetRef} />
    </div>
  );
};

export const ExampleWithRef: Story = {
  render: (args) => <CopyButtonExample {...args} />,
};
