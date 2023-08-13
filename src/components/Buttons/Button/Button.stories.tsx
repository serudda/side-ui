import { type Meta, type StoryObj } from '@storybook/react';
import { Icon, IconCatalog, IconStyle } from '@/components';
import { parseIconOptions } from '@/storybook/utils';
import { Button, ButtonSize, ButtonVariant, HtmlType } from './Button';

const meta = {
  title: 'UI Components/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
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
    size: ButtonSize.xs,
    variant: ButtonVariant.primary,
    htmlType: HtmlType.button,
    iconStyle: IconStyle.regular,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="inline-flex content-end items-end space-x-3">
        <Button {...args}>Clean Board</Button>
        <Button size={ButtonSize.xs} invert onClick={() => {}}>
          <div className="flex items-center gap-2">
            <Icon className="h-5 w-5" icon={IconCatalog.broom} iconStyle={IconStyle.solid} />
            Clean Board
          </div>
        </Button>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: (args) => {
    return (
      <div className="inline-flex content-end items-end space-x-3">
        <Button {...args} size={ButtonSize.xs}>
          Clean Board
        </Button>
        <Button {...args} size={ButtonSize.sm}>
          Clean Board
        </Button>
        <Button {...args} size={ButtonSize.base}>
          Clean Board
        </Button>
      </div>
    );
  },
};

export const Variants: Story = {
  render: (args) => {
    return (
      <div className="inline-flex content-end items-end space-x-3">
        <Button {...args} size={ButtonSize.sm} variant={ButtonVariant.primary}>
          Clean Board
        </Button>
        <Button {...args} size={ButtonSize.sm} variant={ButtonVariant.secondary}>
          Clean Board
        </Button>
        <Button {...args} size={ButtonSize.sm} variant={ButtonVariant.tertiary}>
          Clean Board
        </Button>
        <Button {...args} size={ButtonSize.sm} variant={ButtonVariant.ghost}>
          Clean Board
        </Button>
        <Button {...args} size={ButtonSize.sm} variant={ButtonVariant.destructive}>
          Clean Board
        </Button>
        <Button {...args} size={ButtonSize.sm} variant={ButtonVariant.discord}>
          Clean Board
        </Button>
        <Button {...args} size={ButtonSize.sm} variant={ButtonVariant.twitter}>
          Clean Board
        </Button>
      </div>
    );
  },
};

export const InvertVariants: Story = {
  render: (args) => {
    return (
      <div className="inline-flex content-end items-end space-x-3">
        <Button {...args} size={ButtonSize.sm} variant={ButtonVariant.primary} invert>
          Clean Board
        </Button>
        <Button {...args} size={ButtonSize.sm} variant={ButtonVariant.secondary} invert>
          Clean Board
        </Button>
        <Button {...args} size={ButtonSize.sm} variant={ButtonVariant.tertiary} invert>
          Clean Board
        </Button>
        <Button {...args} size={ButtonSize.sm} variant={ButtonVariant.ghost} invert>
          Clean Board
        </Button>
        <Button {...args} size={ButtonSize.sm} variant={ButtonVariant.destructive} invert>
          Clean Board
        </Button>
        <Button {...args} size={ButtonSize.sm} variant={ButtonVariant.discord} invert>
          Clean Board
        </Button>
        <Button {...args} size={ButtonSize.sm} variant={ButtonVariant.twitter} invert>
          Clean Board
        </Button>
      </div>
    );
  },
};

export const StartIcon: Story = {
  render: (args) => {
    return (
      <div className="inline-flex content-end items-end space-x-3">
        <Button
          {...args}
          size={ButtonSize.xs}
          variant={ButtonVariant.primary}
          startIcon={IconCatalog.bars3}
          invert
        >
          Clean Board
        </Button>
        <Button
          {...args}
          size={ButtonSize.sm}
          variant={ButtonVariant.secondary}
          startIcon={IconCatalog.bars3}
          invert
        >
          Clean Board
        </Button>
        <Button
          {...args}
          size={ButtonSize.base}
          variant={ButtonVariant.tertiary}
          startIcon={IconCatalog.bars3}
          invert
        >
          Clean Board
        </Button>
      </div>
    );
  },
};

export const EndIcon: Story = {
  render: (args) => {
    return (
      <div className="inline-flex content-end items-end space-x-3">
        <Button
          {...args}
          size={ButtonSize.xs}
          variant={ButtonVariant.primary}
          endIcon={IconCatalog.bars3}
          invert
        >
          Clean Board
        </Button>
        <Button
          {...args}
          size={ButtonSize.sm}
          variant={ButtonVariant.secondary}
          endIcon={IconCatalog.bars3}
          invert
        >
          Clean Board
        </Button>
        <Button
          {...args}
          size={ButtonSize.base}
          variant={ButtonVariant.tertiary}
          endIcon={IconCatalog.bars3}
          invert
        >
          Clean Board
        </Button>
      </div>
    );
  },
};

export const OnlyIcon: Story = {
  render: (args) => {
    return (
      <div className="inline-flex content-end items-end space-x-3">
        <Button
          {...args}
          size={ButtonSize.xs}
          variant={ButtonVariant.primary}
          endIcon={IconCatalog.square2Stack}
          invert
        />
        <Button
          {...args}
          size={ButtonSize.sm}
          variant={ButtonVariant.secondary}
          endIcon={IconCatalog.square2Stack}
          invert
        />
        <Button
          {...args}
          size={ButtonSize.base}
          variant={ButtonVariant.tertiary}
          endIcon={IconCatalog.square2Stack}
          iconStyle={IconStyle.thin}
          invert
        />
      </div>
    );
  },
};

export const Twitter: Story = {
  args: {
    children: 'Log in with Twitter',
    size: ButtonSize.sm,
    variant: ButtonVariant.twitter,
    startIcon: IconCatalog.twitter,
  },
};
