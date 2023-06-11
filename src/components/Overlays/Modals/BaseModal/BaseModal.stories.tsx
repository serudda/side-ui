import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonVariant } from '~/components';
import { useModal } from '~/hooks';
import { BaseModal, type BaseModalProps } from './BaseModal';

const ModalBodyLongSample = () => {
  return (
    <div className="font-regular text-left text-neutral-50">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Sem viverra aliquet eget sit amet tellus cras adipiscing enim.
      Etiam sit amet nisl purus in. Amet mauris commodo quis imperdiet massa tincidunt nunc
      pulvinar. Adipiscing enim eu turpis egestas. Ipsum suspendisse ultrices gravida dictum fusce
      ut placerat orci nulla. Sed felis eget velit aliquet sagittis. Tellus integer feugiat
      scelerisque varius morbi enim nunc faucibus a. Netus et malesuada fames ac. Proin nibh nisl
      condimentum id venenatis a. Dignissim diam quis enim lobortis scelerisque. Egestas egestas
      fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Viverra aliquet
      eget sit amet. Donec et odio pellentesque diam volutpat commodo. Ac tortor vitae purus
      faucibus ornare suspendisse sed nisi. Sapien et ligula ullamcorper malesuada proin libero.
      Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Vulputate eu scelerisque
      felis imperdiet proin fermentum.
    </div>
  );
};

const meta = {
  title: 'UI Components/Overlays/Modals/BaseModal',
  component: BaseModal,
  tags: ['autodocs'],
  args: {
    header: {
      title: '¿Deseas cancelar?',
      hasCloseBtn: true,
    },
    body: <ModalBodyLongSample />,
    footer: (
      <div className="flex w-full items-center justify-end space-x-4">
        <Button variant={ButtonVariant.tertiary} size={ButtonSize.sm} invert>
          Cancelar
        </Button>
        <Button variant={ButtonVariant.primary} size={ButtonSize.sm}>
          Aplicar filtros
        </Button>
      </div>
    ),
    onClose: () => console.log('close modal'),
  },
} satisfies Meta<typeof BaseModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const TemplateImperativeExample = (args: BaseModalProps) => {
  const { modalNode, openModal } = useModal();

  const handleClick = async () => {
    await openModal<boolean>((close) => (
      <BaseModal
        className="text-base-white"
        body={args.body}
        header={args.header}
        footer={args.footer}
        onClose={() => close(true)}
      />
    ));
  };

  return (
    <>
      <Button size={ButtonSize.xs} onClick={handleClick} invert>
        Open Modal
      </Button>
      {modalNode}
    </>
  );
};

export const Default: Story = {
  render: (args) => <TemplateImperativeExample {...args} />,
};
