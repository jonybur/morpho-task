import { cleanup, render, screen } from '@testing-library/react';
import { Icon } from './Icon';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    width,
    height,
    className,
  }: {
    src: string | { src: string; height: number; width: number };
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
  }) => {
    const imgSrc = typeof src === 'object' && 'src' in src ? src.src : src;
    return <img src={imgSrc} alt={alt} width={width} height={height} className={className} />;
  },
}));

describe('Icon', () => {
  it('renders with default size', () => {
    render(<Icon name="alert" />);
    const icon = screen.getByRole('img', { name: 'alert icon' });
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('width', '24');
    expect(icon).toHaveAttribute('height', '24');
  });

  it('renders with custom size', () => {
    render(<Icon name="borrow" width={32} height={32} />);
    const icon = screen.getByRole('img', { name: 'borrow icon' });
    expect(icon).toHaveAttribute('width', '32');
    expect(icon).toHaveAttribute('height', '32');
  });

  it('applies custom className', () => {
    render(<Icon name="morpho" className="custom-class" />);
    const icon = screen.getByRole('img', { name: 'morpho icon' });
    expect(icon).toHaveClass('custom-class');
  });

  it('renders all icon types correctly', () => {
    const iconNames = [
      'alert',
      'borrow',
      'morpho',
      'arrow',
      'upRightArrow',
      'loading',
      'check',
      'info',
    ] as const;

    iconNames.forEach((name) => {
      render(<Icon name={name} />);
      const icon = screen.getByRole('img', { name: `${name} icon` });
      expect(icon).toBeInTheDocument();
      expect(icon.getAttribute('src')).toBeTruthy();
      cleanup();
    });
  });

  it('renders with different width and height', () => {
    render(<Icon name="info" width={16} height={32} />);
    const icon = screen.getByRole('img', { name: 'info icon' });
    expect(icon).toHaveAttribute('width', '16');
    expect(icon).toHaveAttribute('height', '32');
  });
});
