<script lang="ts" setup>
// Icons
import * as Icons from '@heroicons/vue/24/solid'

interface Props {
  label?: string
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'textline'
  icon?: 'PencilIcon' | 'TrashIcon' | 'CheckIcon'
  iconPosition?: 'left' | 'right'
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  iconPosition: 'left'
})
</script>

<template>
  <button :class="[`btn btn--${variant}`, { 'btn--icon-right': iconPosition === 'right' }]">
    <div
      v-if="icon"
      class="btn__icon"
      :class="!!iconPosition && label && `btn__icon--${iconPosition}`"
    >
      <component :is="Icons[icon]" />
    </div>
    <span class="btn__text">{{ label }}</span>
  </button>
</template>
