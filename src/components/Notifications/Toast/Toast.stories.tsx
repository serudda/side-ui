import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components';
import { ToastProvider, useToast } from '@/contexts';
import { Toast, ToastProps, ToastVariant } from './Toast';
import { ToastContainer, ToastPlacement } from './ToastContainer';

const meta = {
  title: 'UI Components/Notifications/Toast',
  component: Toast,
  decorators: [
    (StoryFn) => {
      return (
        <ToastProvider>
          <>
            <StoryFn />
            <ToastContainer placement={ToastPlacement.bottom} />
          </>
        </ToastProvider>
      );
    },
  ],
  tags: ['autodocs'],
  args: {
    title: 'Toast',
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

const CopyButtonExample = (args: ToastProps) => {
  const { addToast } = useToast();

  const handleOpenCustomToast = () => {
    addToast(args);
  };

  const handleOpenNeutralToast = () => {
    addToast({
      variant: ToastVariant.neutral,
      title: 'Sample Neutral Toast',
      description: (
        <span>
          We will redeploy <span className="font-semibold">Twon App</span> when you're done
        </span>
      ),
      onClose: () => console.log('deleted callback'),
      action: {
        label: 'Call to Action',
        onActionClick: () => console.log('call to action click'),
      },
    });
  };

  const handleOpenSuccessToast = () => {
    addToast({
      variant: ToastVariant.success,
      title: 'Sample Success Toast',
      hasCloseBtn: false,
    });
  };
  const handleOpenWarningToast = () => {
    addToast({
      variant: ToastVariant.warning,
      title: 'Sample Warning Toast',
      hasIcon: false,
      dismissInterval: 6000,
    });
  };
  const handleOpenErrorToast = () => {
    addToast({
      variant: ToastVariant.error,
      title: 'Sample Error Toast',
      description:
        'Sample Error Toast Sample Error Toast Sample Error Toast Sample Error Toast Sample Error Toast Sample Error Toast Sample Error Toast Sample Error Toast Sample Error Sample Error Toast',
      hasIcon: true,
      hasCloseBtn: false,
    });
  };

  return (
    <div className="mb-6 flex items-center space-x-5">
      <Button onClick={handleOpenCustomToast}>Open Custom Toast</Button>
      <Button onClick={handleOpenNeutralToast}>Open Neutral Toast</Button>
      <Button onClick={handleOpenSuccessToast}>Open Success Toast</Button>
      <Button onClick={handleOpenWarningToast}>Open Warning Toast</Button>
      <Button onClick={handleOpenErrorToast}>Open Error Toast</Button>
    </div>
  );
};

export const ExampleWithRef: Story = {
  render: (args) => <CopyButtonExample {...args} />,
};
