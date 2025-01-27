import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';

const meta = {
  title: 'Components/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>Content inside the box</div>,
  },
};

export const WithMultipleChildren: Story = {
  args: {
    children: (
      <>
        <h2>Welcome</h2>
        <p>This is a sample content inside the box</p>
        <button>Click me</button>
      </>
    ),
  },
};
