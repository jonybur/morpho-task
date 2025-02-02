import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownItem } from '../Dropdown';
import { Select, SelectProps } from './Select';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

const mockSearch = async (searchTerm: string): Promise<DropdownItem[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (searchTerm.toLowerCase().includes('steakhouse')) {
    return [
      { id: '1', name: 'Vault Name One' },
      { id: '2', name: 'Vault Name Two' },
      { id: '3', name: 'Vault Name Three' },
      { id: '4', name: 'Vault Name Four' },
    ];
  }

  return [];
};

const SelectWithHooks = (args: Partial<SelectProps>) => {
  const [value, setValue] = useState('');

  return <Select {...args} value={value} onChange={setValue} onSearch={mockSearch} />;
};

export const Default: Story = {
  render: (args) => <SelectWithHooks {...args} />,
  args: {
    placeholder: 'Enter Vault Address or Name...',
  },
};

export const WithError: Story = {
  render: (args) => <SelectWithHooks {...args} />,
  args: {
    placeholder: 'Enter search term...',
    isError: true,
    errorMessage: 'Failed to fetch results',
  },
};

export const WithCustomErrorMessage: Story = {
  render: (args) => <SelectWithHooks {...args} />,
  args: {
    placeholder: 'Enter search term...',
    isError: true,
    errorMessage: 'Please check your input and try again',
  },
};

export const EmptyResults: Story = {
  render: (args) => {
    const SelectWithEmptyResults = (props: Partial<SelectProps>) => {
      const [value, setValue] = useState('no results');
      return <Select {...props} value={value} onChange={setValue} onSearch={async () => []} />;
    };
    return <SelectWithEmptyResults {...args} />;
  },
  args: {
    placeholder: 'Type to search...',
  },
};

export const WithPreselectedValue: Story = {
  render: (args) => {
    const SelectWithPreselectedValue = (props: Partial<SelectProps>) => {
      const [value, setValue] = useState('Vault Name One');
      return <Select {...props} value={value} onChange={setValue} onSearch={mockSearch} />;
    };
    return <SelectWithPreselectedValue {...args} />;
  },
  args: {
    placeholder: 'Enter Vault Address or Name...',
  },
};
