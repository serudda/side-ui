import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSize,
  BreadcrumbSpacing,
  BreadcrumbVariant,
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
    body: [
      <BreadcrumbItem href="javascript:void(0)">
        <Icon icon={IconCatalog.home} className="h-4 w-4" />
      </BreadcrumbItem>,
      <BreadcrumbItem href="javascript:void(0)">Components</BreadcrumbItem>,
      <BreadcrumbItem href="javascript:void(0)">Pricing</BreadcrumbItem>,
      <BreadcrumbItem href="javascript:void(0)">Product</BreadcrumbItem>,
      <BreadcrumbItem href="javascript:void(0)">Calendar</BreadcrumbItem>,
    ],
    itemsBeforeCollapse: 2,
    itemsAfterCollapse: 1,
    separator: '/',
    collapseMode: CollapseMode.spread,
    size: BreadcrumbSize.base,
    variant: BreadcrumbVariant.primary,
    className: '',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const BreadcrumbSizesDemo: Story = {
  render: (arg) => {
    const sizes = Object.values(BreadcrumbSize);
    return (
      <div>
        <div className="grid gap-4">
          {sizes.map((size) => (
            <div key={size}>
              <p>Size {size}</p>
              <Breadcrumb size={size} body={arg.body} />
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const AllVariantsDemo: Story = {
  render: (arg) => {
    const variants = Object.values(BreadcrumbVariant);

    return (
      <div>
        <div className="grid gap-4">
          {variants.map((variant) => (
            <div key={variant}>
              <p>Variant: {variant}</p>
              <Breadcrumb
                variant={variant}
                body={arg.body}
                separator="/"
                itemsBeforeCollapse={1}
                itemsAfterCollapse={2}
              />
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const AllSpacing: Story = {
  render: (arg) => {
    const spacing = Object.values(BreadcrumbSpacing);

    return (
      <div>
        <div className="grid gap-4">
          {spacing.map((spacing) => (
            <div key={spacing}>
              <p>Spacing: {spacing}</p>
              <Breadcrumb
                spacing={spacing}
                body={arg.body}
                separator="/"
                itemsBeforeCollapse={1}
                itemsAfterCollapse={2}
              />
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const AllVariantsWithBorder: Story = {
  render: (arg) => {
    const variants = Object.values(BreadcrumbVariant);

    return (
      <div>
        <div className="grid gap-4">
          {variants.map((variant) => (
            <div key={variant}>
              <p>Variant: {variant}</p>
              <Breadcrumb
                variant={variant}
                body={arg.body}
                separator="/"
                hasBorder={true}
                itemsBeforeCollapse={1}
                itemsAfterCollapse={2}
              />
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
              <p>Variant: {separators}</p>
              <Breadcrumb
                body={arg.body}
                separator={separators}
                itemsBeforeCollapse={1}
                itemsAfterCollapse={2}
              />
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const DropdownCollapse: Story = {
  args: {
    collapseMode: CollapseMode.dropdown,
  },
};

export const SpreadCollapse: Story = {
  args: {
    collapseMode: CollapseMode.spread,
  },
};

export const MoreItemsBefore: Story = {
  args: {
    itemsBeforeCollapse: 3,
    itemsAfterCollapse: 1,
  },
};

export const MoreItemsAfter: Story = {
  args: {
    itemsBeforeCollapse: 1,
    itemsAfterCollapse: 3,
  },
};

export const MoreItems: Story = {
  args: {
    body: [
      <BreadcrumbItem href="javascript:void(0)">Home</BreadcrumbItem>,
      <BreadcrumbItem href="javascript:void(0)">Dashboard</BreadcrumbItem>,
      <BreadcrumbItem href="javascript:void(0)">Analytics</BreadcrumbItem>,
      <BreadcrumbItem href="javascript:void(0)">Export</BreadcrumbItem>,
      <BreadcrumbItem href="javascript:void(0)">Settings</BreadcrumbItem>,
      <BreadcrumbItem href="javascript:void(0)">Profile</BreadcrumbItem>,
      <BreadcrumbItem href="javascript:void(0)">Help</BreadcrumbItem>,
      <BreadcrumbItem href="javascript:void(0)">Export</BreadcrumbItem>,
      <BreadcrumbItem href="javascript:void(0)">Analytics</BreadcrumbItem>,
      <BreadcrumbItem href="javascript:void(0)">Settings</BreadcrumbItem>,
    ],
  },
};
