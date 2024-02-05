<script lang="ts" setup>
import Button from '@/components/Button.vue'
import Modal from '@/components/Modal.vue'
</script>

<template>
  <div>
    <Modal
      size="sm"
      title="Woohooo"
      body-text="... is successfully ..."
    >
      <template #trigger="{ openModal }">
        <Button
          label="Open Modal"
          @click="openModal"
        />
      </template>
      <template #above-title>
        <img
          src="@/assets/illustrations/illustration.svg"
          alt="illustration modal"
          width="140"
          height="140"
        />
      </template>
    </Modal>
  </div>
</template>
