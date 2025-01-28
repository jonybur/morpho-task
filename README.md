# Morpho Task

This project implements a modern web application based on a provided Figma design. The application is built with React and TypeScript, featuring a comprehensive component library.

## Live Demo

The application is deployed and accessible at: https://morpho-task.vercel.app/

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/jonybur/morpho-task.git

# Navigate to the project directory
cd morpho-task

# Install dependencies
npm install
```

### Running the Application

```bash
# Start the development server
npm run dev
```

The application will be available at http://localhost:3000

### Running Storybook

```bash
# Start Storybook
npm run storybook
```

Storybook will be available at http://localhost:6006

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Component Library

A Storybook instance has been created to showcase and document the component library built for this project. This serves as a living documentation of all UI components and their variations.

## Deployment

The project includes automated workflows for continuous deployment, ensuring that changes are automatically deployed to production when merged to the main branch.

## Design Implementation Notes

### Figma Design Adaptations

While implementing the Figma design, several inconsistencies were addressed:

1. Input Error States: The Figma design showed two different versions of input fields in error states, with different icons being displayed. A consistent approach was chosen for the final implementation.
2. Missing navbar for the "Input - Nil State" page
3. Incorrect title shown in the Search box for the "Input - Nil State" page
4. Inconsistent error state for the Input component

### Typography Note

The Grotesk font is currently implemented using a trial version. As a result, certain characters (specifically the "$" symbol) may not display in the correct font type.

## Development

This project uses modern web development tools and practices:

- React with TypeScript for type-safe development
- Component-based architecture
- Storybook for component documentation and testing
- Automated deployment workflows
