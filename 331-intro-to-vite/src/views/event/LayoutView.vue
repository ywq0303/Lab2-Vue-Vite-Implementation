<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useEventStore } from '@/stores/event'
import { useRoute } from 'vue-router'

// Get event data from event store
const store = useEventStore()
const { event } = storeToRefs(store)
const route = useRoute()
</script>
<template>
  <div v-if="event" class="p-5">
    <h1 class="text-2xl font-bold text-gray-800 mb-4">{{ event.title }}</h1>
    <nav class="mb-6 flex space-x-4 items-center">
      <RouterLink class="font-medium text-gray-700 hover:text-green-500" :to="{ name: 'event-detail-view', params: { id: route.params.id } }">Details</RouterLink>
      <span class="text-gray-400">|</span>
      <RouterLink class="font-medium text-gray-700 hover:text-green-500" :to="{ name: 'event-register-view', params: { id: route.params.id } }">Register</RouterLink>
      <span class="text-gray-400">|</span>
      <RouterLink class="font-medium text-gray-700 hover:text-green-500" :to="{ name: 'event-edit-view', params: { id: route.params.id } }">Edit</RouterLink>
    </nav>
    <RouterView :event="event" :id="route.params.id" />
  </div>
  <div v-else class="p-5 text-center text-gray-500">
    <p>加载中...</p>
  </div>
</template>