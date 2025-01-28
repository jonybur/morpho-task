import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('Navbar', () => {
  it('renders the Morpho logo and title', () => {
    render(<Navbar />);
    expect(screen.getByText('Morpho Test')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'morpho icon' })).toBeInTheDocument();
  });

  it('renders the GitHub link with correct attributes', () => {
    render(<Navbar />);
    const githubLink = screen.getByRole('link', { name: /go to github repo/i });

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/jonybur/morpho-task');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the up-right arrow icon in the GitHub link', () => {
    render(<Navbar />);
    expect(screen.getByRole('img', { name: 'upRightArrow icon' })).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Navbar className="custom-nav" />);
    const nav = screen.getByRole('navigation');
    expect(nav.className).toContain('custom-nav');
  });

  it('renders home link correctly', () => {
    render(<Navbar />);
    const homeLink = screen.getByRole('link', { name: /morpho test/i });
    expect(homeLink).toHaveAttribute('href', '/');
  });
});
