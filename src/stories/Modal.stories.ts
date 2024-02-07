import { h } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import Modal from '@/components/Modal.vue'
import Button from '@/components/Button.vue'
import Illustration from '@/assets/illustrations/Illustration.svg'

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
    hasRightButton: true
  },
  render(args: any) {
    return {
      components: { Modal, Button },
      setup() {
        const illustrationImage = {
          src: Illustration,
          alt: 'illustration modal',
          width: '140',
          height: '140'
        }

        return { args, illustrationImage }
      },
      template: `
      <Modal v-bind="args">
        <template #trigger="{ openModal }">
          <Button
            label="click me"
            @click="openModal"
          />
        </template>

        <template #above-title>
          <img v-bind="illustrationImage" />
        </template>
      </Modal>
      `
    }
  }
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'sm'
  },
  parameters: {
    docs: {
      source: {
        code: `
          <script setup>
            const illustrationImage = {
              src: Illustration,
              alt: 'illustration modal',
              width: '140',
              height: '140'
            }
          </script>

          <template>
            <Modal
              title="Woohooo",
              bodyText: "... is successfully ...",
              hasCloseIcon
              hasLeftButton
              hasRightButton
            >
              <template #trigger="{ openModal }">
                <Button
                  label="click me"
                  @click="openModal"
                />
              </template>
      
              <template #above-title>
                <img v-bind="illustrationImage" />
              </template>
            </Modal>
          </template>
        `
      }
    }
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
