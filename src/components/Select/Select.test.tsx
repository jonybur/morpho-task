import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { DropdownItem } from '../Dropdown';
import { Select } from './Select';

const mockItems: DropdownItem[] = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
];

describe('Select', () => {
  const mockOnChange = jest.fn();
  const mockOnSearch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockOnSearch.mockResolvedValue(mockItems);
  });

  it('renders with placeholder', () => {
    render(
      <Select value="" onChange={mockOnChange} onSearch={mockOnSearch} placeholder="Search items" />
    );
    expect(screen.getByPlaceholderText('Search items')).toBeInTheDocument();
  });

  it('handles input change', async () => {
    render(
      <Select value="" onChange={mockOnChange} onSearch={mockOnSearch} placeholder="Search items" />
    );

    const input = screen.getByRole('textbox');
    await userEvent.type(input, 't');

    expect(mockOnChange).toHaveBeenCalledWith('t');
  });
});
