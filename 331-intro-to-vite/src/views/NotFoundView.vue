<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
const props = withDefaults(
  defineProps<{
    resource: string
  }>(),
  {
    resource: 'page'
  }
)
</script>
<template>
  <div class="flex flex-col items-center justify-center py-16 px-4 text-center">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
    <h3 class="text-xl text-gray-600 mb-8">The {{ resource }} you're looking for is not here.</h3>
    <router-link class="px-5 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors" :to="{ name: 'event-list-view' }">Back to the home page</router-link>
  </div>
</template>