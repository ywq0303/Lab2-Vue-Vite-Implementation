<script setup lang="ts">
import { toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { type Event } from '@/types'
import { useMessageStore } from '@/stores/message'

const props = defineProps<{
  event: Event
  id: String
}>()
const { event } = toRefs(props)
const router = useRouter()
const messageStore = useMessageStore()

const editEvent = () => {
  messageStore.updateMessage('data has been updated')
  setTimeout(() => {
    messageStore.resetMessage()
  }, 3000)
  router.push({ name: 'event-detail-view', params: { id: props.event.id } })
}
</script>
<template>
  <div class="p-5">
    <p class="mb-4 text-gray-700">Edit event here</p>
    <button @click="editEvent" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Edit</button>
  </div>
</template>