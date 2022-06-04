<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from '@/components/ui/header.vue'
import Tabs from '@/components/tabs.vue'
import { useMainStore } from '@/store/index.js'
const store = useMainStore()
</script>

<template>
  <div class="bg-gray-50 h-screen flex flex-col">
    <div class="container mx-auto grow flex flex-col">
      <Header />
      <Tabs />
    </div>
  </div>
</template>
