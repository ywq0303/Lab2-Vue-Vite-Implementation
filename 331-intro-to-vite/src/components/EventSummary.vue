<script setup lang="ts">
import type { Event } from '@/types'

defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="text-right my-3">
    <div class="text-base my-2">{{ event.category }}</div>
    <div class="text-base my-2">{{ event.organizer }}</div>
  </div>
</template>

<style scoped>
/* All styles now use Tailwind CSS classes */
</style>