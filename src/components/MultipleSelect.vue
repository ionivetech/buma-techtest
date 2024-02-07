<script lang="ts" setup generic="T">
import { ref, computed } from 'vue'
import FormGroup from '@/components/FormGroup.vue'
import { onClickOutside } from '@vueuse/core'
// Icons
import { XCircle, ChevronDown } from 'lucide-vue-next'
import { XCircleIcon as XCircleIconSolid } from '@heroicons/vue/24/solid'

interface Props {
  options: T[]
  uniqueKey: string
  labelKey: string
  labelText?: string
  placeholder?: string
  validationText?: string
  showDeleteAll?: boolean
  required?: boolean
  isError?: boolean
  isDisabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  labelText: 'Field Name',
  placeholder: 'Select...',
  validationText: 'Validation Text',
  showDeleteAll: false,
  required: false,
  isError: false,
  isDisabled: false
})

const modelValue = defineModel<T[]>()

const multiselectRef = ref()
const showDropdown = ref<boolean>(false)

const optionLists = computed((): T[] => {
  if (props.options.length > 0 && modelValue.value && modelValue.value.length > 0) {
    const selected: T[] = modelValue.value
    const newData = props.options.map((opt) => {
      const findIndex = selected.findIndex(
        (s) => s[props.uniqueKey as keyof T] === opt[props.uniqueKey as keyof T]
      )
      return { ...opt, selected: findIndex > -1 }
    })
    return newData
  }
  return props.options
})

// Show dropdown
const toggleDropdownList = () => {
  if (!props.isDisabled) {
    if (showDropdown.value) showDropdown.value = false
    else showDropdown.value = true
  }
}

// Updated selected item
const toggleItem = (data: T) => {
  const findIndex = modelValue.value!.findIndex(
    (s) => s[props.uniqueKey as keyof T] === data[props.uniqueKey as keyof T]
  )
  if (findIndex > -1) modelValue.value!.splice(findIndex, 1)
  else modelValue.value!.push(data)
}

// Remove item selected
const removeItem = (index: number) => modelValue.value!.splice(index, 1)

// Clear all selected list
const clearAllSelected = () => {
  modelValue.value = []
}

// Click outside
onClickOutside(multiselectRef, () => {
  showDropdown.value = false
})
</script>

<template>
  <FormGroup
    :label-text="labelText"
    :validation-text="validationText"
    :required="required"
    :is-error="isError"
  >
    <div
      ref="multiselectRef"
      class="multiple-select"
      :class="{
        'multiple-select--active': showDropdown,
        'multiple-select--error': isError,
        'multiple-select--disabled': isDisabled
      }"
    >
      <div class="multiple-select__wrapper">
        <!-- Placeholder -->
        <div
          v-if="modelValue && modelValue.length === 0"
          class="multiple-select__placeholder"
          @click="toggleDropdownList"
        >
          {{ placeholder }}
        </div>

        <!-- Selected data -->
        <div
          v-else-if="modelValue && modelValue.length > 0"
          class="multiple-select__selected"
          @click="toggleDropdownList"
        >
          <div
            v-for="(data, index) in modelValue"
            :key="`selected-${index}`"
            class="multiple-select__selected__list"
          >
            {{ data[labelKey as keyof T] }}
            <XCircleIconSolid
              v-if="showDeleteAll && !isError && !isDisabled"
              @click.stop="removeItem(index)"
            />
          </div>
        </div>

        <div class="multiple-select__right-action">
          <!-- Delete All -->
          <div
            v-if="showDeleteAll && !isDisabled"
            class="multiple-select__clear-all"
          >
            <div class="multiple-select__clear-all__divider" />
            <XCircle @click="clearAllSelected" />
          </div>

          <!-- Dropdown toggle -->
          <div
            class="multiple-select__dropdown-toggle"
            @click="toggleDropdownList"
          >
            <ChevronDown />
          </div>
        </div>
      </div>

      <!-- Dropdown list -->
      <div
        v-if="showDropdown"
        class="multiple-select__dropdown"
      >
        <div
          v-for="(data, index) in optionLists"
          :key="`list-${index}`"
          class="multiple-select__dropdown__list"
          :class="{ 'multiple-select__dropdown__list--selected': data['selected' as keyof T] }"
          @click="toggleItem(data)"
        >
          {{ data[labelKey as keyof T] }}
        </div>
      </div>
    </div>
  </FormGroup>
</template>
