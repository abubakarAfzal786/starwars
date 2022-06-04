<script setup>
const props = defineProps({
  internalClass: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div class="flex justify-center w-full">
    <div
      class="block  grow shadow-lg bg-white max-w-sm"
      :class="props.internalClass"
    >
      <slot></slot>
    </div>
  </div>
</template>
