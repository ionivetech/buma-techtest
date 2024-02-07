<script lang="ts" setup>
import { ref } from 'vue'
import Button from './Button.vue'
// Icons
import { X } from 'lucide-vue-next'

interface Props {
  size?: 'pwa' | 'pwa-v2' | 'sm' | 'md' | 'lg'
  title?: string
  bodyText?: string
  hasCloseIcon?: boolean
  hasLeftButton?: boolean
  hasRightButton?: boolean
}

withDefaults(defineProps<Props>(), {
  size: 'sm',
  hasCloseIcon: true,
  hasLeftButton: true,
  hasRightButton: true
})

const showModal = ref<boolean>(false)
const showBackdrop = ref<boolean>(false)

const openModal = () => {
  showBackdrop.value = true
  setTimeout(() => {
    showModal.value = true
  }, 100)
}
const closeModal = () => {
  showModal.value = false
  setTimeout(() => {
    showBackdrop.value = false
  }, 100)
}
</script>

<template>
  <!-- Trigger for open modal -->
  <slot
    name="trigger"
    :openModal="openModal"
  />

  <Teleport to="body">
    <!-- Modal backdrop -->
    <Transition name="fade">
      <div
        v-if="showBackdrop"
        class="modal"
      >
        <Transition name="scale">
          <div
            v-if="showModal"
            :class="`modal__dialog modal__dialog--${size}`"
          >
            <!-- Close icon -->
            <X
              v-if="hasCloseIcon"
              class="modal__dialog__close-icon"
              @click="closeModal"
            />

            <slot name="above-title" />

            <h2
              v-if="title"
              :class="['modal__dialog__title', size.includes('pwa') && 'modal__dialog__title--pwa']"
            >
              {{ title }}
            </h2>

            <p
              v-if="bodyText"
              class="modal__dialog__body-text"
            >
              {{ bodyText }}
            </p>

            <!-- Footer -->
            <div class="modal__dialog__footer">
              <div
                :class="[
                  'modal__dialog__footer__button',
                  size.includes('pwa') && `modal__dialog__footer__button--${size}`
                ]"
              >
                <Button
                  v-if="hasLeftButton"
                  label="Close"
                  :variant="size === 'md' ? 'secondary' : 'primary'"
                  @click="closeModal"
                />
                <Button
                  v-if="hasRightButton"
                  label="Label"
                  :variant="size === 'pwa-v2' ? 'secondary' : 'primary'"
                />
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
