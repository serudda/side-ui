import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSpacing,
  CollapseMode,
  Icon,
  IconCatalog,
} from '@components';
import { type Meta, type StoryObj } from '@storybook/react';

const meta: Meta<typeof Breadcrumb> = {
  title: 'UI Components/Breadcrumb',
  component: Breadcrumb,
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
      <Breadcrumb {...args}>
        <BreadcrumbItem href="javascript:void(0)">Home</BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0)">Components</BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0)">Pricing</BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0)">Product</BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0)">Calendar</BreadcrumbItem>
      </Breadcrumb>
    );
  },
};

export const AllSpacing: Story = {
  render: (args) => {
    const spacing = Object.values(BreadcrumbSpacing);

    return (
      <div>
        <div className="grid gap-4">
          {spacing.map((spacing) => (
            <div key={spacing}>
              <p>Spacing: {spacing}</p>
              <Breadcrumb {...args} spacing={spacing}>
                <BreadcrumbItem href="javascript:void(0)">
                  <Icon icon={IconCatalog.home} className="h-4 w-4" />
                </BreadcrumbItem>
                <BreadcrumbItem href="javascript:void(0)">Components</BreadcrumbItem>
                <BreadcrumbItem href="javascript:void(0">Pricing</BreadcrumbItem>
                <BreadcrumbItem href="javascript:void(0)">Product</BreadcrumbItem>
                <BreadcrumbItem href="javascript:void(0)">Calendar</BreadcrumbItem>
              </Breadcrumb>
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
              <Breadcrumb {...arg} separator={separators}>
                <BreadcrumbItem href="javascript:void(0)">
                  <Icon icon={IconCatalog.home} className="h-4 w-4" />
                </BreadcrumbItem>
                <BreadcrumbItem href="javascript:void(0)">Components</BreadcrumbItem>
                <BreadcrumbItem href="javascript:void(0">Pricing</BreadcrumbItem>
                <BreadcrumbItem href="javascript:void(0)">Product</BreadcrumbItem>
                <BreadcrumbItem href="javascript:void(0)">Calendar</BreadcrumbItem>
              </Breadcrumb>
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
      <Breadcrumb {...args} isCollapse collapseMode={CollapseMode.dropdown}>
        <BreadcrumbItem href="javascript:void(0)">
          <Icon icon={IconCatalog.home} className="h-4 w-4" />
        </BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0)">Components</BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0">Pricing</BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0)">Product</BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0)">Calendar</BreadcrumbItem>
      </Breadcrumb>
    );
  },
};

export const CollapsedSpread: Story = {
  render: (args) => {
    return (
      <Breadcrumb {...args} isCollapse collapseMode={CollapseMode.spread}>
        <BreadcrumbItem href="javascript:void(0)">
          <Icon icon={IconCatalog.home} className="h-4 w-4" />
        </BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0)">Components</BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0">Pricing</BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0)">Product</BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0)">Calendar</BreadcrumbItem>
      </Breadcrumb>
    );
  },
};

export const MoreItemsBeforeCollapse: Story = {
  render: (args) => {
    return (
      <Breadcrumb {...args} isCollapse itemsBeforeCollapse={2} itemsAfterCollapse={1}>
        <BreadcrumbItem href="javascript:void(0)">
          <Icon icon={IconCatalog.home} className="h-4 w-4" />
        </BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0)">Components</BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0">Pricing</BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0)">Product</BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0)">Calendar</BreadcrumbItem>
      </Breadcrumb>
    );
  },
};

export const MoreItemsAfterCollapse: Story = {
  render: (args) => {
    return (
      <Breadcrumb {...args} isCollapse itemsBeforeCollapse={1} itemsAfterCollapse={2}>
        <BreadcrumbItem href="javascript:void(0)">
          <Icon icon={IconCatalog.home} className="h-4 w-4" />
        </BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0)">Components</BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0">Pricing</BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0)">Product</BreadcrumbItem>
        <BreadcrumbItem href="javascript:void(0)">Calendar</BreadcrumbItem>
      </Breadcrumb>
    );
  },
};

export const LotOfItems: Story = {
  render: (args) => {
    return (
      <div>
        <Breadcrumb {...args}>
          <BreadcrumbItem href="javascript:void(0)">Home</BreadcrumbItem>
          <BreadcrumbItem href="javascript:void(0)">Dashboard</BreadcrumbItem>
          <BreadcrumbItem href="javascript:void(0)">Analytics</BreadcrumbItem>
          <BreadcrumbItem href="javascript:void(0)">Export</BreadcrumbItem>
          <BreadcrumbItem href="javascript:void(0)">Settings</BreadcrumbItem>
          <BreadcrumbItem href="javascript:void(0)">Profile</BreadcrumbItem>
          <BreadcrumbItem href="javascript:void(0)">Help</BreadcrumbItem>
          <BreadcrumbItem href="javascript:void(0)">Export</BreadcrumbItem>
          <BreadcrumbItem href="javascript:void(0)">Analytics</BreadcrumbItem>
          <BreadcrumbItem href="javascript:void(0)">Settings</BreadcrumbItem>
        </Breadcrumb>
      </div>
    );
  },
};
