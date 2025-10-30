<script setup lang="ts">
import { toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { type Event } from '@/types'
import { useMessageStore } from '@/stores/message'

const props = defineProps<{
  event: Event
  id: String
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)
const router = useRouter()
const store = useMessageStore()

const register = () => {
  store.updateMessage('You are successfully registered for ' + props.event.title)
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'event-detail-view', params: { id: props.event.id } })
}
</script>
<template>
  <div class="p-5">
    <p class="mb-4 text-gray-700">Register event here</p>
    <button @click="register" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">Register</button>
  </div>
</template>