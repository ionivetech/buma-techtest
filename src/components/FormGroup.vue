<script lang="ts" setup>
interface Props {
  labelText?: string
  validationText?: string
  required?: boolean
  isError?: boolean
}

withDefaults(defineProps<Props>(), {
  labelText: 'Field Name',
  validationText: 'Validation Text',
  required: false,
  isError: false
})
</script>

<template>
  <div class="form-group">
    <label class="form-group__label">
      {{ labelText }}

      <span
        v-if="required"
        class="form-group__label__required"
      >
        *
      </span>
    </label>

    <slot />

    <span
      class="form-group__validation-text"
      :class="isError && 'form-group__validation-text--error'"
    >
      {{ validationText }}
    </span>
  </div>
</template>
