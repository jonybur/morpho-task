import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
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

export const Hover: Story = {
  args: {
    placeholder: 'Hover over me',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focused: Story = {
  args: {
    placeholder: 'Click me to focus',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Click me to focus');
    await userEvent.click(input);
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

export const WithHelperText: Story = {
  args: {
    helperText: 'This is a helper text',
    value: 'Input with helper text',
  },
};

export const ErrorWithHelperText: Story = {
  args: {
    error: true,
    helperText: 'This field is required',
    value: 'Invalid input',
  },
};

export const SuccessWithHelperText: Story = {
  args: {
    success: true,
    helperText: 'Looks good!',
    value: 'Valid input',
  },
};
