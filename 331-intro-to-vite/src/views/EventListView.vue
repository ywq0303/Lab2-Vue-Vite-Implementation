<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import EventSummary from '@/components/EventSummary.vue'
import { type Event } from '@/types'
import { ref, onMounted, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'

const events = ref<Event[] | null>(null)
const totalEvents = ref(0)
const loading = ref(false)
const error = ref<string | null>(null)
const router = useRouter()

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    required: true
  }
})

const page = computed(() => props.page)
const pageSize = computed(() => props.pageSize)

const hasNexPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / pageSize.value)
  return page.value < totalPages
})

const changePageSize = (event: Event) => {
  const target = event.target as HTMLSelectElement
  const newPageSize = parseInt(target.value)
  router.push({
    name: 'event-list-view',
    query: { page: 1, pageSize: newPageSize }
  })
}

onMounted(() => {
  // Get total count once when component mounts
  EventService.getEvents(100, 1) // Get all events to count total
    .then((allEventsResponse) => {
      totalEvents.value = allEventsResponse.data.length
    })
    .catch((err) => {
      console.error('Error getting total count:', err)
    })

  watchEffect(() => {
    loading.value = true
    error.value = null
    
    // Get the specific page data
    EventService.getEvents(pageSize.value, page.value)
      .then((response) => {
        events.value = response.data
        loading.value = false
      })
      .catch(() => {
        router.push({ name: 'network-error-view' })
      })
  })
})
</script>

<template>
  <h1 class="text-4xl mb-8">Events For Good</h1>
  
  <!-- Page Size Selector -->
  <div class="page-size-selector text-center my-5">
    <label for="pageSize" class="mr-3 font-bold text-gray-800">Events per page: </label>
    <select 
      id="pageSize" 
      :value="pageSize" 
      @change="changePageSize($event)"
      class="px-3 py-2 border border-gray-300 rounded bg-white text-gray-800 text-sm"
    >
      <option value="2">2 events</option>
      <option value="4">4 events</option>
      <option value="6">6 events</option>
      <option value="10">10 events</option>
    </select>
  </div>
  
  <!-- Loading and Error States -->
  <div v-if="loading" class="text-center py-10 text-lg text-gray-600">Loading events...</div>
  <div v-else-if="error" class="text-center py-10 text-base text-red-700 bg-red-50 border border-red-200 rounded mx-5 my-5">
    {{ error }}
  </div>
  
  <!-- Events Display -->
  <div v-else class="flex flex-col items-center">
    <div v-if="events && events.length === 0" class="text-center py-10 text-base text-gray-600">
      No events found.
    </div>
    <template v-else-if="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
      <EventSummary v-for="event in events" :key="`summary-${event.id}`" :event="event" />
    </template>
  </div>
  
  <!-- Pagination - Always show when not loading and no error -->
  <div v-if="!loading && !error && totalEvents > 0" class="pagination flex justify-between items-center w-full max-w-[400px] mx-auto my-5 px-5">
    <RouterLink 
      id="page-prev"
      :to="{ name: 'event-list-view', query: { page: page - 1, pageSize: pageSize } }" 
      rel="prev" 
      v-if="page > 1"
      class="inline-block px-5 py-2.5 text-gray-800 bg-gray-100 border border-gray-200 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors mr-auto"
      >&lt; Prev Page</RouterLink
    >

    <RouterLink 
      id="page-next"
      :to="{ name: 'event-list-view', query: { page: page + 1, pageSize: pageSize } }" 
      rel="next" 
      v-if="hasNexPage"
      class="inline-block px-5 py-2.5 text-gray-800 bg-gray-100 border border-gray-200 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors ml-auto"
      >Next Page &gt;</RouterLink
    >
  </div>
</template>

<style scoped>
/* 所有样式现在使用 Tailwind CSS 类实现 */
</style>
