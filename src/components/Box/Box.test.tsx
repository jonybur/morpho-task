import { render, screen } from '@testing-library/react';
import { Box } from './Box';

describe('Box', () => {
  it('renders children', () => {
    render(<Box>Content</Box>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders with multiple children', () => {
    render(
      <Box>
        <div>Child 1</div>
        <div>Child 2</div>
      </Box>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('renders with nested components', () => {
    render(
      <Box>
        <div>Parent box</div>
        <Box>
          <div>Nested box</div>
        </Box>
      </Box>
    );
    expect(screen.getByText('Parent box')).toBeInTheDocument();
    expect(screen.getByText('Nested box')).toBeInTheDocument();
  });
});
