<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import { type Event } from '@/types'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'

const props = defineProps<{
  event: Event
  id: String
}>()
const { event } = toRefs(props)
const messageStore = useMessageStore()
const { message } = storeToRefs(messageStore)
</script>
<template>
  <div v-if="message" class="p-3 bg-green-500 text-white mb-5 rounded-md">
    <h4>{{ message }}</h4>
  </div>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>

<style scoped>
/* All styles now use Tailwind CSS classes */
</style>