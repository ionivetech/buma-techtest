import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import Pagination from '@/components/Pagination.vue'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    totalData: { type: 'number' },
    maxVisiblePage: { type: 'number' },
    dataPerPage: { type: 'number' }
  },
  args: {
    totalData: 120
  },
  render(args: any) {
    return {
      components: { Pagination },
      setup() {
        const page = ref<number>(1)
        return { args, page }
      },
      template: `<Pagination v-bind="args" v-model="page" />`
    }
  }
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
        <Pagination
          v-model="page"
          :total-data="76"
        />
        `
      }
    }
  }
}
