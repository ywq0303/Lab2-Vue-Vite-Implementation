<script setup lang="ts">
import { type Event } from '@/types'
defineProps<{
  event: Event
}>()
// const event = ref({
//   id: 5928101,
//   category: 'animal welfare',
//   title: 'Cat Adoption Day',
//   description: 'Find your new feline friend at this event.',
//   location: 'Meow Town',
//   date: 'January 28, 2022',
//   time: '12:00',
//   petsAllowed: true,
//   organizer: 'Kat Laydee'
// })
</script>

<template>
  <RouterLink class="block text-gray-700 no-underline" :to="{ name: 'event-detail-view', params: { id: event.id } }">
    <div class="cursor-pointer border border-gray-600 p-5 w-[250px] mb-[18px] hover:scale-101 hover:shadow-lg">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
/* All styles now use Tailwind CSS classes */
</style>
