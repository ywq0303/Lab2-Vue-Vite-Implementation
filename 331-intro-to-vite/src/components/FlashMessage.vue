<script setup lang="ts">
import { computed } from 'vue'
import { useMessageStore } from '@/stores/message'

const messageStore = useMessageStore()
const message = computed(() => messageStore.message)
</script>

<template>
  <div v-if="message" class="fixed top-5 right-5 p-4 bg-green-500 text-white rounded-md shadow-md z-50 animate-fadeIn">
    {{ message }}
  </div>
</template>

<style scoped>
/* All styles now use Tailwind CSS classes */

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>