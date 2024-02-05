<script lang="ts" setup>
interface Props {
  label?: string
  variant?: string
  iconPosition?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'primary'
})
</script>

<template>
  <button :class="[`btn btn--${variant}`, { 'btn--icon-right': iconPosition === 'right' }]">
    <div
      class="btn__icon"
      :class="!!iconPosition && `btn__icon--${iconPosition}`"
    >
      <slot name="icon" />
    </div>
    <span class="btn__text">{{ label }}</span>
  </button>
</template>
