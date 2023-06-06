import type { StoryObj, Meta } from '@storybook/react';
import { CopyBtn } from './CopyBtn';
import { ButtonVariant } from '~/components';
import { parseIconOptions } from '~/storybook/utils';
import { useRef, useState } from 'react';

const meta = {
  title: 'UI Components/Buttons/Copy Button',
  component: CopyBtn,
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
    target: 'Change this text and test it',
    isToolTipActive: true,
    isTextActive: true,
    variant: ButtonVariant.primary,
  },
} satisfies Meta<typeof CopyBtn>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const ExampleWithRef: Story = {
  args: {
    target: "Is not functional, write in the textarea area."
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const targetRef = useRef(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [text, setText] = useState('This is an example text inside a Textarea');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
    };

    args.target = targetRef; // Assign target prop directly

    return (
      <div className="flex flex-col gap-8 items-start ">
        <CopyBtn {...args} />
        <textarea
          ref={targetRef}
          name="example"
          id="textarea-example"
          cols={30}
          rows={10}
          className="bg-black border-[0.5px] border-white border-solid"
          value={text}
          onChange={handleChange}
        />
      </div>
    );
  },
};
