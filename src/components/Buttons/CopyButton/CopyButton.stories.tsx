import { useRef, useState } from 'react';
import { Button, Icon, IconCatalog, IconStyle, Textarea } from '@components';
import { CopyButton, CopyButtonProps } from './CopyButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI Components/Buttons/Copy Button',
  component: CopyButton,
  tags: ['autodocs'],
  args: {
    target: 'This is the text',
    withTooltip: true,
  },
} satisfies Meta<typeof CopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="mt-32 flex items-center justify-center">
        <CopyButton {...args}>
          <div>Click here</div>
        </CopyButton>
      </div>
    );
  },
};

export const ButtonExample: Story = {
  render: (args) => {
    return (
      <div className="mt-32 flex items-center justify-center">
        <CopyButton {...args}>
          <span>
            <Button isOnlyIcon>
              <Icon
                className="h-8 w-8"
                icon={IconCatalog.square2Stack}
                iconStyle={IconStyle.regular}
              />
            </Button>
          </span>
        </CopyButton>
      </div>
    );
  },
};

const CopyButtonExample = (args: CopyButtonProps) => {
  const targetRef = useRef(null);
  const [value, setValue] = useState('This is an example text inside a Textarea');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => console.log('Clicked');

  return (
    <div className="relative flex flex-col items-start gap-8">
      <Textarea ref={targetRef} value={value} onChange={handleChange} />
      <CopyButton {...args} target={targetRef} onClick={handleClick}>
        <div>Click here</div>
      </CopyButton>
    </div>
  );
};

export const ExampleWithRef: Story = {
  render: (args) => <CopyButtonExample {...args} />,
};
