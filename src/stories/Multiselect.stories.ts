import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import MultipleSelect from '@/components/MultipleSelect.vue'

interface IDummyData {
  id: number
  city: string
}

const dummyData: IDummyData[] = [
  {
    id: 1,
    city: 'Jakarta'
  },
  {
    id: 2,
    city: 'Bekasi'
  },
  {
    id: 3,
    city: 'Bandung'
  },
  {
    id: 4,
    city: 'Medan'
  }
]

const meta = {
  title: 'Components/Multiselect',
  component: MultipleSelect as unknown as Record<string, unknown>,
  tags: ['autodocs'],
  argTypes: {
    uniqueKey: { type: 'string' },
    labelKey: { type: 'string' },
    labelText: { type: 'string' },
    placeholder: { type: 'string' },
    validationText: { type: 'string' },
    showDeleteAll: { control: 'boolean' },
    required: { control: 'boolean' },
    isError: { control: 'boolean' },
    isDisabled: { control: 'boolean' }
  },
  args: {
    options: dummyData,
    uniqueKey: 'id',
    labelKey: 'city',
    labelText: 'Select City',
    validationText: 'Can select more than one',
    showDeleteAll: false,
    required: true,
    isError: false,
    isDisabled: false
  },
  render(args: any) {
    return {
      components: { MultipleSelect },
      setup() {
        const selected = ref<IDummyData[]>([
          {
            id: 1,
            city: 'Jakarta'
          },
          {
            id: 2,
            city: 'Bekasi'
          }
        ])
        return { args, selected }
      },
      template: `<MultipleSelect v-bind="args" v-model="selected" />`
    }
  }
} satisfies Meta<typeof MultipleSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export const ShowDeleteAll: Story = {
  args: {
    showDeleteAll: true
  }
}

export const Error: Story = {
  args: {
    isError: true
  }
}

export const Disabled: Story = {
  args: {
    isDisabled: true
  }
}
