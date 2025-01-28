import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders text button', () => {
    render(<Button text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders icon button', () => {
    render(<Button icon="alert" />);
    expect(screen.getByRole('img', { name: 'alert icon' })).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button text="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    const handleClick = jest.fn();
    render(<Button text="Disabled" disabled onClick={handleClick} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
