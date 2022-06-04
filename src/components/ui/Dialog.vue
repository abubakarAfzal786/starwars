<script setup>
import TheTransition from './TheTransition.vue'
const emit = defineEmits(['update:show', 'confirm'])
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
const close = () => {
  emit('update:show')
}
</script>
<template>
  <div>
    <TheTransition
      :fromClass="'opacity-0 -translate-y-72'"
      :toClass="'translate-y-0'"
    >
      <template #content>
        <div
          v-if="show"
          class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
        >
          <div class="relative my-6 mx-auto max-w-2xl w-full">
            <!--content-->
            <div
              class="border-0 rounded-lg shadow-lg relative flex flex-col w-full p-3 bg-white outline-none focus:outline-none"
            >
              <!--header-->
              <div class="flex items-start p-3">
                <div class="flex w-full">
                  <div>
                    <slot name="dialogIcon"></slot>
                  </div>
                  <div class="grow">
                    <slot name="dialogContent"> </slot>
                  </div>
                </div>

                <button
                  class="absolute right-5 text-gray-400"
                  v-on:click="close()"
                >
                  <x-icon></x-icon>
                </button>
              </div>
              <slot name="dialogFooter"> </slot>
            </div>
          </div>
        </div>
      </template>
    </TheTransition>
    <div v-if="show" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>
