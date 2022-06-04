<script setup>
import { computed, ref } from "vue";
import Film from "@/components/tabpanes/Film.vue";
import SpaceShip from "@/components/tabpanes/Spaceship.vue";

const tabs = [
  { title: "Films", component: Film },
  {
    title: "Starships",
    component: SpaceShip,
  },
];
const activeTab = ref("Films");
const activeComponent = computed(() => {
  return tabs.find((tab) => tab.title === activeTab.value).component;
});
</script>

<template>
  <ul
    class="mt-5 flex md:flex-row border-b-0 pl-0 mb-4"
    id="tabs-tab"
    role="tablist"
  >
    <li v-for="item in tabs" :key="item.index">
      <div
        @click="activeTab = item.title"
        class="
          nav-link
          block
          font-medium
          text-xs
          uppercase
          px-6
          py-3
          my-2
          cursor-pointer
          hover:bg-gray-100
        "
        :class="{ 'bg-gray-100': activeTab === item.title }"
      >
        {{ item.title }}
      </div>
    </li>
  </ul>
  <div class="tab-content grow">
    <KeepAlive>
      <component :is="activeComponent"></component>
    </KeepAlive>
  </div>
</template>
