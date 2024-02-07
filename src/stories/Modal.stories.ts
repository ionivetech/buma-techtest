import { h } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import Modal from '@/components/Modal.vue'
import Button from '@/components/Button.vue'
import Illustration from '@/assets/illustrations/Illustration.svg'

const illustrationImage = {
  src: Illustration,
  alt: 'illustration modal',
  width: '140',
  height: '140'
}

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['pwa', 'pwa-v2', 'sm', 'md', 'lg']
    },
    title: { type: 'string' },
    bodyText: { type: 'string' },
    hasCloseIcon: { control: 'boolean' },
    hasLeftButton: { control: 'boolean' },
    hasRightButton: { control: 'boolean' }
  },
  args: {
    title: 'Woohooo',
    bodyText: '... is successfully ...',
    hasCloseIcon: true,
    hasLeftButton: true,
    hasRightButton: true,
    trigger: ({ openModal }) => h(Button, { label: 'Open Modal', onClick: () => openModal() }),
    'above-title': () => h('img', illustrationImage)
  }
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'sm'
  }
}

export const PwaV2: Story = {
  name: 'PWA V2',
  args: {
    size: 'pwa-v2'
  }
}

export const Pwa: Story = {
  name: 'PWA',
  args: {
    size: 'pwa'
  }
}

export const Small: Story = {
  args: {
    size: 'sm'
  }
}

export const Medium: Story = {
  args: {
    size: 'md'
  }
}

export const Large: Story = {
  args: {
    size: 'lg'
  }
}
