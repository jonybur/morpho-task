import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Type something...',
  },
};

export const WithText: Story = {
  args: {
    value: 'Hello World',
  },
};

export const Error: Story = {
  args: {
    error: true,
    value: 'Invalid input',
  },
};

export const Success: Story = {
  args: {
    success: true,
    value: 'Valid input',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    value: 'Loading...',
  },
};
