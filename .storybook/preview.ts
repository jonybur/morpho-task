import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/index.css';
import './preview.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => React.createElement('div', { className: 'inter' }, React.createElement(Story)),
  ],
};

export default preview;
