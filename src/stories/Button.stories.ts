import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '@/components/Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { type: 'string' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'outline', 'textline']
    },
    icon: { control: 'select', options: ['PencilIcon', 'TrashIcon', 'CheckIcon'] },
    iconPosition: { control: 'select', options: ['left', 'right'] }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Click Me',
    variant: 'primary'
  }
}
export const Secondary: Story = {
  args: {
    label: 'Click Me',
    variant: 'secondary'
  }
}
export const Tertiary: Story = {
  args: {
    label: 'Click Me',
    variant: 'tertiary'
  }
}
export const Outline: Story = {
  args: {
    label: 'Click Me',
    variant: 'outline'
  }
}
export const Textline: Story = {
  args: {
    label: 'Click Me',
    variant: 'textline'
  }
}
export const IconLeft: Story = {
  name: 'With Left Icon',
  args: {
    label: 'Click Me',
    variant: 'primary',
    icon: 'PencilIcon',
    iconPosition: 'left'
  }
}
export const IconRight: Story = {
  name: 'With Right Icon',
  args: {
    label: 'Click Me',
    variant: 'primary',
    icon: 'PencilIcon',
    iconPosition: 'right'
  }
}
export const IconOnly: Story = {
  args: {
    variant: 'primary',
    icon: 'PencilIcon'
  }
}
