import type { Meta, StoryObj } from '@storybook/react';
import { Field } from './Field';

const meta = {
  title: 'Components/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Total Supply (USD)',
    value: '$52.25M',
  },
};

export const LongValue: Story = {
  args: {
    title: 'Owner Address',
    value: '0x123abcdf...789xyz',
  },
};

export const ShortValue: Story = {
  args: {
    title: 'APY',
    value: '10.22%',
  },
};
