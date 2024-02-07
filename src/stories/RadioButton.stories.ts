import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import RadioButton from '@/components/RadioButton.vue'
import type { IOptions } from '@/components/RadioButton.vue'

const dummyOptions: IOptions[] = [
  { id: 'pilihan 1', name: 'Pilihan 1' },
  { id: 'pilihan 2', name: 'Pilihan 2' },
  { id: 'pilihan 3', name: 'Pilihan 3' },
  { id: 'pilihan 4', name: 'Pilihan 4' },
  { id: 'pilihan 5', name: 'Pilihan 5' },
  { id: 'pilihan 6', name: 'Pilihan 6' },
  { id: 'pilihan 7', name: 'Pilihan 7' }
]

const meta = {
  title: 'Components/Radio Button',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'lg']
    },
    labelText: { type: 'string' },
    validationText: { type: 'string' },
    required: { control: 'boolean' }
  },
  args: {
    options: dummyOptions,
    required: false
  },
  render(args: any) {
    return {
      components: { RadioButton },
      setup() {
        const selected = ref<IOptions>({
          id: 'pilihan 5',
          name: 'Pilihan 5'
        })
        return { args, selected }
      },
      template: `<RadioButton v-bind="args" v-model="selected" />`
    }
  }
} satisfies Meta<typeof RadioButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
          <script setup>
            const selected = ref()

            const dummyOptions: IOptions[] = [
              { id: 'pilihan 1', name: 'Pilihan 1' },
              { id: 'pilihan 2', name: 'Pilihan 2' },
              { id: 'pilihan 3', name: 'Pilihan 3' },
              { id: 'pilihan 4', name: 'Pilihan 4' },
              { id: 'pilihan 5', name: 'Pilihan 5' },
              { id: 'pilihan 6', name: 'Pilihan 6' },
              { id: 'pilihan 7', name: 'Pilihan 7' }
            ]
          </script>

          <template>
            <RadioButton v-model="selected" :options="dummyOptions" />
          </template>
        `
      }
    }
  }
}

export const Small: Story = {
  args: {
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    size: 'lg'
  }
}
