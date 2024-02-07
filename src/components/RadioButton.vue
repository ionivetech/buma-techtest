<script lang="ts" setup>
import FormGroup from '@/components/FormGroup.vue'

export interface IOptions {
  id: string | number
  name: string
}
interface Props {
  options: IOptions[]
  size?: 'sm' | 'lg'
  labelText?: string
  validationText?: string
  required?: boolean
}

withDefaults(defineProps<Props>(), {
  size: 'sm',
  labelText: 'Pilihan',
  validationText: 'Validation Text',
  required: false
})

const modelValue = defineModel<IOptions>()
</script>

<template>
  <FormGroup
    :label-text="labelText"
    :validation-text="validationText"
    :required="required"
  >
    <div :class="`radio-button radio-button--${size}`">
      <div
        v-for="opt in options"
        :key="opt.id"
        class="radio-button__list"
        :class="{ 'radio-button__list--checked': opt.id === modelValue?.id }"
        @click="modelValue = opt"
      >
        <div class="radio-button__list__check" />
        <div class="radio-button__list__text">{{ opt.name }}</div>
      </div>
    </div>
  </FormGroup>
</template>
