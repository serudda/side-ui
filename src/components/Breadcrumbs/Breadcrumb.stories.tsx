import {
  Breadcrumb,
  BreadcrumbSpacing,
  Breadcrumbs,
  CollapseMode,
  Icon,
  IconCatalog,
} from '@components';
import { type Meta, type StoryObj } from '@storybook/react';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'UI Components/Breadcrumb',
  component: Breadcrumbs,
  tags: ['autodocs'],
  args: {
    className: '',
    collapseMode: CollapseMode.spread,
    itemsAfterCollapse: 1,
    itemsBeforeCollapse: 2,
    isCollapse: false,
    spacing: BreadcrumbSpacing.normal,
    separator: '/',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Breadcrumbs {...args}>
        <Breadcrumb href="javascript:void(0)">Home</Breadcrumb>
        <Breadcrumb href="javascript:void(0)">Components</Breadcrumb>
        <Breadcrumb href="javascript:void(0)">Pricing</Breadcrumb>
        <Breadcrumb href="javascript:void(0)">Product</Breadcrumb>
        <Breadcrumb href="javascript:void(0)">Calendar</Breadcrumb>
      </Breadcrumbs>
    );
  },
};

export const SpacingExamples: Story = {
  render: (args) => {
    const spacing = Object.values(BreadcrumbSpacing);

    return (
      <div>
        <div className="grid gap-4">
          {spacing.map((spacing) => (
            <div key={spacing}>
              <p>Spacing: {spacing}</p>
              <Breadcrumbs {...args} spacing={spacing}>
                <Breadcrumb href="javascript:void(0)">
                  <Icon icon={IconCatalog.home} className="h-4 w-4" />
                </Breadcrumb>
                <Breadcrumb href="javascript:void(0)">Components</Breadcrumb>
                <Breadcrumb href="javascript:void(0">Pricing</Breadcrumb>
                <Breadcrumb href="javascript:void(0)">Product</Breadcrumb>
                <Breadcrumb href="javascript:void(0)">Calendar</Breadcrumb>
              </Breadcrumbs>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const CustomSeparators: Story = {
  render: (arg) => {
    const separators = ['/', '>', '|', '-', '→', '•', '~', '\\', '⇒'];

    return (
      <div>
        <div className="grid gap-4">
          {separators.map((separators) => (
            <div key={separators}>
              <p>Custom Separators: {separators}</p>
              <Breadcrumbs {...arg} separator={separators}>
                <Breadcrumb href="javascript:void(0)">
                  <Icon icon={IconCatalog.home} className="h-4 w-4" />
                </Breadcrumb>
                <Breadcrumb href="javascript:void(0)">Components</Breadcrumb>
                <Breadcrumb href="javascript:void(0">Pricing</Breadcrumb>
                <Breadcrumb href="javascript:void(0)">Product</Breadcrumb>
                <Breadcrumb href="javascript:void(0)">Calendar</Breadcrumb>
              </Breadcrumbs>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const CollapseDropdown: Story = {
  render: (args) => {
    return (
      <Breadcrumbs {...args} isCollapse collapseMode={CollapseMode.dropdown}>
        <Breadcrumb href="javascript:void(0)">
          <Icon icon={IconCatalog.home} className="h-4 w-4" />
        </Breadcrumb>
        <Breadcrumb href="javascript:void(0)">Components</Breadcrumb>
        <Breadcrumb href="javascript:void(0">Pricing</Breadcrumb>
        <Breadcrumb href="javascript:void(0)">Product</Breadcrumb>
        <Breadcrumb href="javascript:void(0)">Calendar</Breadcrumb>
      </Breadcrumbs>
    );
  },
};

export const CollapsedSpread: Story = {
  render: (args) => {
    return (
      <Breadcrumbs {...args} isCollapse collapseMode={CollapseMode.spread}>
        <Breadcrumb href="javascript:void(0)">
          <Icon icon={IconCatalog.home} className="h-4 w-4" />
        </Breadcrumb>
        <Breadcrumb href="javascript:void(0)">Components</Breadcrumb>
        <Breadcrumb href="javascript:void(0">Pricing</Breadcrumb>
        <Breadcrumb href="javascript:void(0)">Product</Breadcrumb>
        <Breadcrumb href="javascript:void(0)">Calendar</Breadcrumb>
      </Breadcrumbs>
    );
  },
};

export const MoreItemsBeforeCollapse: Story = {
  render: (args) => {
    return (
      <Breadcrumbs {...args} isCollapse itemsBeforeCollapse={2} itemsAfterCollapse={1}>
        <Breadcrumb href="javascript:void(0)">
          <Icon icon={IconCatalog.home} className="h-4 w-4" />
        </Breadcrumb>
        <Breadcrumb href="javascript:void(0)">Components</Breadcrumb>
        <Breadcrumb href="javascript:void(0">Pricing</Breadcrumb>
        <Breadcrumb href="javascript:void(0)">Product</Breadcrumb>
        <Breadcrumb href="javascript:void(0)">Calendar</Breadcrumb>
      </Breadcrumbs>
    );
  },
};

export const MoreItemsAfterCollapse: Story = {
  render: (args) => {
    return (
      <Breadcrumbs {...args} isCollapse itemsBeforeCollapse={1} itemsAfterCollapse={2}>
        <Breadcrumb href="javascript:void(0)">
          <Icon icon={IconCatalog.home} className="h-4 w-4" />
        </Breadcrumb>
        <Breadcrumb href="javascript:void(0)">Components</Breadcrumb>
        <Breadcrumb href="javascript:void(0">Pricing</Breadcrumb>
        <Breadcrumb href="javascript:void(0)">Product</Breadcrumb>
        <Breadcrumb href="javascript:void(0)">Calendar</Breadcrumb>
      </Breadcrumbs>
    );
  },
};

export const LotOfItems: Story = {
  render: (args) => {
    return (
      <div>
        <Breadcrumbs {...args}>
          <Breadcrumb href="javascript:void(0)">Home</Breadcrumb>
          <Breadcrumb href="javascript:void(0)">Dashboard</Breadcrumb>
          <Breadcrumb href="javascript:void(0)">Analytics</Breadcrumb>
          <Breadcrumb href="javascript:void(0)">Export</Breadcrumb>
          <Breadcrumb href="javascript:void(0)">Settings</Breadcrumb>
          <Breadcrumb href="javascript:void(0)">Profile</Breadcrumb>
          <Breadcrumb href="javascript:void(0)">Help</Breadcrumb>
          <Breadcrumb href="javascript:void(0)">Export</Breadcrumb>
          <Breadcrumb href="javascript:void(0)">Analytics</Breadcrumb>
          <Breadcrumb href="javascript:void(0)">Settings</Breadcrumb>
        </Breadcrumbs>
      </div>
    );
  },
};
