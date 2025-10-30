<template>
  <div class="p-5 max-w-6xl mx-auto">
    <h1 class="text-center text-gray-800 mb-8 text-3xl font-bold">Student Information</h1>
    <div v-if="loading" class="text-center text-gray-500 p-10 text-lg">
      Loading students...
    </div>
    <div v-else-if="error" class="text-center text-red-600 p-10 text-lg bg-red-50 rounded-lg my-5">
      {{ error }}
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center">
      <StudentCard 
        v-for="student in students" 
        :key="student.id" 
        :student="student" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import type { Student } from '@/types'
import { ref, onMounted } from 'vue'
import StudentService from '@/services/StudentService'

const students = ref<Student[]>([])
const loading = ref(true)
const error = ref('')

onMounted(() => {
  StudentService.getStudents()
    .then((response) => {
      // The API returns data in a different format, we need to extract the value array
      students.value = response.data.value || response.data
      loading.value = false
    })
    .catch((err) => {
      console.error('Error fetching students:', err)
      error.value = 'Failed to load student information'
      loading.value = false
    })
})
</script>

<style scoped>
/* All styles now use Tailwind CSS classes */
</style>