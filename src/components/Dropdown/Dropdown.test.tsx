import { fireEvent, render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

const mockItems = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
];

describe('Dropdown', () => {
  const mockOnClose = jest.fn();
  const mockOnSelect = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders items when visible', () => {
    render(
      <Dropdown items={mockItems} visible={true} onClose={mockOnClose} onSelect={mockOnSelect} />
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('does not render when not visible', () => {
    render(
      <Dropdown items={mockItems} visible={false} onClose={mockOnClose} onSelect={mockOnSelect} />
    );

    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Item 2')).not.toBeInTheDocument();
  });

  it('shows no results message when empty', () => {
    render(<Dropdown items={[]} visible={true} onClose={mockOnClose} onSelect={mockOnSelect} />);
    expect(screen.getByText('No results :(')).toBeInTheDocument();
  });

  it('handles item selection', () => {
    render(
      <Dropdown items={mockItems} visible={true} onClose={mockOnClose} onSelect={mockOnSelect} />
    );

    fireEvent.click(screen.getByText('Item 1'));
    expect(mockOnSelect).toHaveBeenCalledWith(mockItems[0]);
    expect(mockOnClose).toHaveBeenCalled();
  });
});
