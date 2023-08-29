import { type Meta, type StoryObj } from '@storybook/react';
import { Icon, IconCatalog, IconStyle, Spinner, SpinnerSize, SpinnerVariant } from '@/components';
import { Button, ButtonSize, ButtonVariant, HtmlType } from './Button';

const meta = {
  title: 'UI Components/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    size: ButtonSize.xs,
    variant: ButtonVariant.primary,
    htmlType: HtmlType.button,
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
          <Icon className="mr-2 h-4 w-4" icon={IconCatalog.broom} iconStyle={IconStyle.solid} />
          Clean Board
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
        <Button {...args} size={ButtonSize.xs} variant={ButtonVariant.primary} invert>
          <Icon
            className="mr-2 h-5 w-5"
            icon={IconCatalog.plusSmall}
            iconStyle={IconStyle.regular}
          />
          Clean Board
        </Button>
        <Button {...args} size={ButtonSize.sm} variant={ButtonVariant.secondary} invert>
          <Icon className="mr-2 h-5 w-5" icon={IconCatalog.broom} iconStyle={IconStyle.solid} />
          Clean Board
        </Button>
        <Button {...args} size={ButtonSize.base} variant={ButtonVariant.tertiary} invert>
          <Icon className="mr-2 h-6 w-6" icon={IconCatalog.broom} iconStyle={IconStyle.solid} />
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
        <Button {...args} size={ButtonSize.xs} variant={ButtonVariant.primary} invert>
          Clean Board
          <Icon className="ml-2 h-5 w-5" icon={IconCatalog.broom} iconStyle={IconStyle.solid} />
        </Button>
        <Button {...args} size={ButtonSize.sm} variant={ButtonVariant.secondary} invert>
          Clean Board
          <Icon className="ml-2 h-6 w-6" icon={IconCatalog.broom} iconStyle={IconStyle.solid} />
        </Button>
        <Button {...args} size={ButtonSize.base} variant={ButtonVariant.tertiary} invert>
          Clean Board
          <Icon className="ml-2 h-7 w-7" icon={IconCatalog.broom} iconStyle={IconStyle.solid} />
        </Button>
      </div>
    );
  },
};

export const OnlyIcon: Story = {
  render: (args) => {
    return (
      <div className="inline-flex content-end items-end space-x-3">
        <Button {...args} size={ButtonSize.xs} variant={ButtonVariant.primary} invert isOnlyIcon>
          <Icon className="h-4 w-4" icon={IconCatalog.beaker} iconStyle={IconStyle.solid} />
        </Button>
        <Button {...args} size={ButtonSize.sm} variant={ButtonVariant.secondary} invert isOnlyIcon>
          <Icon className="h-6 w-6" icon={IconCatalog.square2Stack} iconStyle={IconStyle.regular} />
        </Button>
        <Button {...args} size={ButtonSize.base} variant={ButtonVariant.tertiary} invert isOnlyIcon>
          <Icon className="h-7 w-7" icon={IconCatalog.bolt} iconStyle={IconStyle.solid} />
        </Button>
      </div>
    );
  },
};

export const IsLoading: Story = {
  render: (args) => {
    return (
      <div className="inline-flex content-end items-end space-x-3">
        <Button {...args} size={ButtonSize.xs} variant={ButtonVariant.secondary} isDisabled>
          <Spinner className="mr-3" variant={SpinnerVariant.neutral} size={SpinnerSize.xs} />
          Loading...
        </Button>
        <Button {...args} size={ButtonSize.sm} variant={ButtonVariant.secondary} isDisabled>
          <Spinner className="mr-3" variant={SpinnerVariant.neutral} size={SpinnerSize.sm} />
          Loading...
        </Button>
        <Button {...args} size={ButtonSize.base} variant={ButtonVariant.secondary} isDisabled>
          <Spinner className="mr-3" variant={SpinnerVariant.neutral} size={SpinnerSize.base} />
          Loading...
        </Button>
      </div>
    );
  },
};

export const Twitter: Story = {
  render: (args) => {
    return (
      <div className="inline-flex content-end items-end space-x-3">
        <Button {...args} size={ButtonSize.base} variant={ButtonVariant.twitter}>
          <Icon className="mr-2 h-4 w-4" icon={IconCatalog.twitter} iconStyle={IconStyle.solid} />
          Log in with Twitter
        </Button>
      </div>
    );
  },
};

export const AsChild: Story = {
  render: (args) => {
    return (
      <div className="inline-flex content-end items-end space-x-3">
        <Button {...args} variant={ButtonVariant.twitter} size={ButtonSize.xs} asChild>
          <a href="https://twon.app" target="_blank">
            <Icon
              className="mr-2 h-5 w-5"
              icon={IconCatalog.plusSmall}
              iconStyle={IconStyle.bold}
            />
            Log in with Twitter
          </a>
        </Button>
      </div>
    );
  },
};
