<script setup>
import { computed } from "vue";
import Drawer from "../ui/Drawer.vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  selectedFilm: {
    type: Object,
    default: null,
  },
});
const emits = defineEmits(["update:modelValue", "showModal"]);
const showDrawer = computed({
  get: () => {
    return props.modelValue;
  },
  set: (value) => {
    emits("update:modelValue", value);
  },
});
</script>

<template>
  <Drawer :persistent="true" v-model:open="showDrawer" :showCloseIcon="true">
    <template #drawerTitle>
      <p class="text-2xl font-[1000] body-font font-poppins">
        {{ selectedFilm.name }}
      </p>
      <p class="text-gray-500 text-sm font-normal">
        Nihil inventore sit, voluptatibus nobis quasi ratione quo nisi quos
        atque, libero magnam at eaque veritatis, provident soluta fugit labore
        ad hic. Voluptatibus alias dignissimos consequuntur velit.
      </p>
    </template>
    <template #drawerContent>
      <p class="text-gray-500">Cast</p>
      <p>{{ selectedFilm.length }}</p>
      <div class="flex justify-between">
        <p class="text-gray-500">Characters</p>
        <button
          @click="emits('showModal')"
          type="button"
          class="
            rounded-md
            bg-gray-100
            text-gray-400
            hover:text-gray-500
            focus:outline-none focus:ring-2 focus:ring-teal-500
          "
        >
          <plus-icon class="h-6 w-6"></plus-icon>
        </button>
      </div>
      <div class="list my-2">
        <div class="">
          <div class="grid items-center">
            <p class="text-gray-500 text-sm font-normal">
              title: {{ selectedFilm.title }}
            </p>
            <p class="text-gray-500 text-sm font-normal">
              Episode: {{ selectedFilm.episode_id }}
            </p>
            <p class="text-gray-500 text-sm font-normal">
              Director: {{ selectedFilm.director }}
            </p>
            <p class="text-gray-500 text-sm font-normal">
              Producer: {{ selectedFilm.producer }}
            </p>
            <p class="text-gray-500 text-sm font-normal">
              release_date: {{ selectedFilm.release_date }}
            </p>
            <p class="text-gray-500 text-sm font-normal">
              opening_crawl: {{ selectedFilm.opening_crawl }}
            </p>
          </div>
        </div>
      </div>
    </template>
  </Drawer>
</template>
