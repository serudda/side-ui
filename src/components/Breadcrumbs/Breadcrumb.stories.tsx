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
    className: '',
    collapseMode: CollapseMode.spread,
    itemsAfterCollapse: 1,
    itemsBeforeCollapse: 2,
    hasBorder: false,
    hasCollapse: false,
    spacing: BreadcrumbSpacing.normal,
    separator: '/',
    size: BreadcrumbSize.base,
    variant: BreadcrumbVariant.primary,
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
              <p>Custom Separators: {separators}</p>
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

export const CollapseDropdown: Story = {
  args: {
    hasCollapse: true,
    collapseMode: CollapseMode.dropdown,
  },
};

export const CollapsedSpread: Story = {
  args: { hasCollapse: true, collapseMode: CollapseMode.spread },
};

export const MoreItemsBeforeCollapse: Story = {
  args: {
    hasCollapse: true,
    itemsBeforeCollapse: 3,
    itemsAfterCollapse: 1,
  },
};

export const MoreItemsAfterCollapse: Story = {
  args: {
    hasCollapse: true,
    itemsBeforeCollapse: 1,
    itemsAfterCollapse: 3,
  },
};

export const LotOfItems: Story = {
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
