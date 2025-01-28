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

export const Example: Story = {
  args: {
    children: (
      <>
        <div
          style={{
            margin: '50px',
            color: 'rgba(67, 76, 83, 0.7)',
          }}
        >
          <h6>Example Box</h6>
        </div>
      </>
    ),
  },
};
