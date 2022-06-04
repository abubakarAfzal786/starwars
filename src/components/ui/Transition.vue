<script setup>
const props = defineProps({
  toClass: String,
  fromClass: String
})
</script>
<template>
  <transition
    mode="out-in"
    enter-active-class="duration-500 ease-in"
    :enter-from-class="`transform ${props.fromClass}`"
    :enter-to-class="`opacity-100 ${props.toClass}`"
    leave-active-class="duration-300 ease"
    :leave-from-class="`opacity-100 ${props.toClass}`"
    :leave-to-class="`transform ${props.fromClass}`"
  >
    <slot name="content"></slot>
  </transition>
</template>
