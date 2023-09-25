import { withThemeByClassName } from '@storybook/addon-styling';
import type { Preview } from '@storybook/react';

import '../src/index.css';

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: { disable: true },
  },
};

export default preview;
