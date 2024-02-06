<script lang="ts" setup>
import { ref } from 'vue'
import MultipleSelect from '@/components/MultipleSelect.vue'

interface IDummyData {
  id: number
  name: string
  address: string
}

const dummyData: IDummyData[] = [
  {
    id: 1,
    name: 'farid',
    address: 'Bekasi'
  },
  {
    id: 2,
    name: 'fardan',
    address: 'Jakarta Utara'
  },
  {
    id: 3,
    name: 'Diana',
    address: 'Bekasi Utara'
  },
  {
    id: 4,
    name: 'Ferdinand',
    address: 'Medan'
  }
]

const selected = ref<IDummyData[]>([
  {
    id: 1,
    name: 'farid',
    address: 'Bekasi'
  },
  {
    id: 2,
    name: 'fardan',
    address: 'Jakarta Utara'
  }
])
</script>

<template>
  <div>
    <MultipleSelect
      v-model="selected"
      :options="dummyData"
      unique-key="id"
      label-key="name"
      label-text="Pilih Siswa"
      :show-delete-all="true"
      :required="true"
      validation-text="Bisa pilih lebih dari 1"
    />
  </div>
</template>
