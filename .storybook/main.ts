import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': '/src',
      };
    }
    return {
      ...config,
      assetsInclude: ['**/*.svg'],
      optimizeDeps: {
        ...config.optimizeDeps,
        exclude: [
          '@storybook/addon-interactions/preview',
          '@storybook/addon-interactions',
          '@storybook/addon-essentials',
          '@storybook/addon-links'
        ]
      }
    };
  },
};

export default config;
