import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './';
import { useState, type ChangeEvent } from 'react';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
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
        'Indicates whether the user can interact with the input. A disabled input is unusable and un-clickable.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    id: {
      control: 'text',
      description: 'The ID of the input.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    label: {
      control: 'text',
      description: 'The text to be displayed on the input.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Input' },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Function to be called when the input is clicked.',
      table: {
        type: { summary: '(e: ChangeEvent<HTMLInputElement>) => void' },
        defaultValue: { summary: '(e) => console.log(e);' },
      },
    },

    placeholder: {
      control: 'text',
      description: 'The placeholder to be displayed on the input.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Input' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'If true, the input will have be rendered as a non-interactive element.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    required: {
      control: 'boolean',
      description: 'If true, the input will be marked as a required field.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    rounderCorners: {
      control: 'boolean',
      description: 'If true, the input will have rounded corners.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Defines the size of the input.',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: 'medium' },
      },
    },
    type: {
      control: 'radio',
      options: ['email', 'number', 'password', 'tel', 'text'],
      description: 'Defines the behavior of the input.',
      table: {
        type: { summary: "'email' | 'number' | 'password' | 'tel' | 'text'" },
        defaultValue: { summary: 'input' },
      },
    },

    value: {
      control: 'text',
      description: 'The value of the input.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    ariaDescribedby: '',
    ariaLabel: '',
    ariaLabelledby: '',
    disabled: false,
    id: '',
    label: 'Input',
    onChange: (e: ChangeEvent) => console.log(e),
    placeholder: '',
    readOnly: false,
    required: false,
    rounderCorners: false,
    size: 'medium',
    type: 'text',
    value: '',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...args }) => {
    const [value, setValue] = useState<string>('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <Input
        {...args}
        value={value}
        onChange={onChangeHandler}
      />
    );
  },
  args: {
    label: 'Default input',
  },
};
