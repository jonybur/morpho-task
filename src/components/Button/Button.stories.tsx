import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Button text content (mutually exclusive with icon)',
    },
    icon: {
      control: 'select',
      options: ['alert', 'borrow'],
      description: 'Icon name (mutually exclusive with text)',
    },
    error: {
      control: 'boolean',
      description: 'Error state (visually identical to disabled)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state (visually identical to error)',
    },
    progress: {
      control: 'boolean',
      description: 'Progress state (loading)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: 'Button',
  },
};

export const IconOnly: Story = {
  args: {
    icon: 'borrow',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Button',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    text: 'Error Button',
    error: true,
  },
};

export const Progress: Story = {
  args: {
    text: 'Progress Button',
    progress: true,
  },
};

export const Hover: Story = {
  args: {
    text: 'Hover me',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus: Story = {
  args: {
    text: 'Focus me',
  },
  parameters: {
    pseudo: { focus: true },
  },
};
