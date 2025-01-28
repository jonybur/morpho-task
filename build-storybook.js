const fs = require('fs-extra');
const path = require('path');

async function moveStorybookStatic() {
  try {
    // Copy storybook-static to .next/storybook-static
    await fs.copy(
      path.join(process.cwd(), 'storybook-static'),
      path.join(process.cwd(), '.next', 'storybook-static')
    );
    console.log('Successfully moved Storybook static files');
  } catch (err) {
    console.error('Error moving Storybook static files:', err);
    process.exit(1);
  }
}

moveStorybookStatic();
