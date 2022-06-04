<script setup>
import { computed } from 'vue'
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
const emits = defineEmits(['nextFunctionCall'])
const props = defineProps({
  open: {
    type: Boolean
  },
  showCloseIcon: {
    type: Boolean,
    default: false
  },
  persistent: {
    type: Boolean,
    default: false
  }
})
const showDrawer = computed({
  get: () => {
    return props.open
  },
  set: value => {
    emits('update:open', value)
  }
})
</script>

<template>
  <TransitionRoot as="template" :show="showDrawer">
    <Dialog
      as="div"
      class="fixed inset-0 overflow-hidden z-10 "
      @close="showDrawer = false"
    >
      <div class="absolute inset-0 overflow-hidden">
        <DialogOverlay class="absolute inset-0" />

        <div
          class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full my-5  pl-10"
        >
          <TransitionChild
            as="template"
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <div class="pointer-events-auto w-screen max-w-md">
              <div
                class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl rounded-xl"
              >
                <div class="flex min-h-0 flex-1 flex-col overflow-y-auto py-6">
                  <div class="px-4 sm:px-4">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-medium text-gray-900">
                        <slot name="drawerTitle"></slot>
                      </DialogTitle>
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="rounded-md bg-gray-100 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                          @click="showDrawer = false"
                        >
                          <span class="sr-only">Close panel</span>
                          <x-icon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="relative flex flex-col mt-6 flex-1 px-4 sm:px-4">
                    <!-- Replace with your content -->
                    <slot name="drawerContent"></slot>
                    <!-- /End replace -->
                  </div>
                </div>
                <slot name="drawerFooter"> </slot>
                <!-- -->
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
