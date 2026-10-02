<script setup lang="ts">
withDefaults(
  defineProps<{
    text?: string
    buttonClass?: string
    variant?: 'primary' | 'secondary' | 'ghost' | 'light'
    type?: 'button' | 'submit' | 'reset'
  }>(),
  { text: '', buttonClass: '', variant: 'primary', type: 'button' },
)

defineEmits<{
  click: []
}>()
</script>

<template>
  <button :type="type" class="btn" :class="[`btn-${variant}`, buttonClass]" @click="$emit('click')">
    <slot>{{ text }}</slot>
  </button>
</template>
