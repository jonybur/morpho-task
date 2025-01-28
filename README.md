# Morpho Task

This project implements a modern web application based on a provided Figma design. The application is built with React, TypeScript, and Vite, featuring a comprehensive component library.

## Live Demo

The application is deployed and accessible at: https://morpho-task.vercel.app/

## Component Library

A Storybook instance has been created to showcase and document the component library built for this project. This serves as a living documentation of all UI components and their variations.

## Design Implementation Notes

### Figma Design Adaptations

While implementing the Figma design, several inconsistencies were addressed:

1. Input Error States: The Figma design showed two different versions of input fields in error states, with different icons being displayed. A consistent approach was chosen for the final implementation.

2. Navigation Inconsistencies: There were discrepancies in the Figma design regarding:
   - Missing navbar in some screens
   - Incorrect title shown in the Search box for the "Input - Nil State" page

### Typography Note

The Grotesk font is currently implemented using a trial version. As a result, certain characters (specifically the "$" symbol) may not display in the correct font type.

## Development

This project uses modern web development tools and practices:

- React with TypeScript for type-safe development
- Vite as the build tool
- Component-based architecture
- Storybook for component documentation and testing
