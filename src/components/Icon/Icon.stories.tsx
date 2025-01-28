import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import styles from './Icon.stories.module.scss';

const ICON_NAMES = [
  'alert',
  'arrow',
  'borrow',
  'check',
  'info',
  'loading',
  'morpho',
  'upRightArrow',
] as const;

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Icon Grid
${ICON_NAMES.map((name) => `- ${name}`).join('\n')}
        `,
      },
    },
  },
  argTypes: {
    name: {
      control: 'select',
      options: ICON_NAMES,
      description: 'Icon name',
    },
    width: {
      control: 'number',
      description: 'Icon width in pixels',
    },
    height: {
      control: 'number',
      description: 'Icon height in pixels',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
  decorators: [
    (Story, context) => {
      const needsDarkBackground = context.args.name === 'borrow';
      return (
        <div className={needsDarkBackground ? styles.darkBackground : undefined}>
          <Story />
        </div>
      );
    },
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Alert: Story = {
  args: {
    name: 'alert',
  },
};

export const Arrow: Story = {
  args: {
    name: 'arrow',
  },
};

export const Borrow: Story = {
  args: {
    name: 'borrow',
  },
};

export const Check: Story = {
  args: {
    name: 'check',
  },
};

export const Info: Story = {
  args: {
    name: 'info',
  },
};

export const Loading: Story = {
  args: {
    name: 'loading',
  },
};

export const Morpho: Story = {
  args: {
    name: 'morpho',
  },
};

export const UpRightArrow: Story = {
  args: {
    name: 'upRightArrow',
  },
};

export const CustomSize: Story = {
  args: {
    name: 'borrow',
    width: 32,
    height: 32,
  },
};

export const AllIcons: Story = {
  render: () => (
    <div className={styles.grid}>
      {ICON_NAMES.map((name) => (
        <div key={name} className={styles.gridItem}>
          <div className={name === 'borrow' ? styles.darkBackground : undefined}>
            <Icon name={name} />
          </div>
          <span className={styles.iconName}>{name}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
