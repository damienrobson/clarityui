import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ariaDescribedby: {
      control: 'text',
      description: 'Identifies the element (or elements) that describes the object.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Defines a string value that labels the current element.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    ariaLabelledby: {
      control: 'text',
      description: 'Identifies the element (or elements) that labels the current element.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'Indicates whether the user can interact with the button. A disabled button is unusable and un-clickable.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    label: {
      control: 'text',
      description: 'The text to be displayed on the button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Button' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Function to be called when the button is clicked.',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: '() => {}' },
      },
    },
    rounderCorners: {
      control: 'boolean',
      description: 'If true, the button will have rounded corners.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Defines the size of the button.',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: 'medium' },
      },
    },
    type: {
      control: 'radio',
      options: ['button', 'submit', 'reset'],
      description: 'Defines the behavior of the button.',
      table: {
        type: { summary: "'button' | 'submit' | 'reset'" },
        defaultValue: { summary: 'button' },
      },
    },
    validationType: {
      control: 'radio',
      options: ['success', 'warning', 'error', 'default'],
      description: 'Defines the validation state of the button, which can affect its styling.',
      table: {
        type: { summary: "'success' | 'warning' | 'error' | 'default'" },
        defaultValue: { summary: 'default' },
      },
    },
    variant: {
      control: 'radio',
      options: ['primary'],
      description:
        'Defines the visual style of the button, which can affect its color and emphasis.',
      table: {
        type: { summary: "'primary'" },
        defaultValue: { summary: 'primary' },
      },
    },
  },
  args: {
    ariaDescribedby: '',
    ariaLabel: '',
    ariaLabelledby: '',
    disabled: false,
    label: 'Button',
    rounderCorners: false,
    size: 'medium',
    type: 'button',
    validationType: 'default',
    variant: 'primary',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    onClick: () => {
      alert('Button clicked!');
    },
  },
};
