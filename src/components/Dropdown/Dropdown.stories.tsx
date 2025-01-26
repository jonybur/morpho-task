import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = [
  { id: '1', name: 'Vault Name One' },
  { id: '2', name: 'Vault Name Two' },
  { id: '3', name: 'Vault Name Three' },
  { id: '4', name: 'Vault Name Four' },
];

export const Default: Story = {
  args: {
    items: mockItems,
    visible: true,
  },
}; 