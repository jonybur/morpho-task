import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { userEvent, within } from '@storybook/testing-library';

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
    helperText: 'This field has an error',
    value: 'Invalid input',
  },
}; 