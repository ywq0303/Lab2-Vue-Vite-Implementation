<template>
  <div class="bg-white rounded-xl shadow-md p-5 m-3 max-w-[300px] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
    <div class="text-center mb-4">
      <img :src="student.image" :alt="`${student.name} ${student.surname}`" class="w-20 h-20 rounded-full object-cover border-3 border-gray-200" />
    </div>
    <div class="text-center">
      <h3 class="text-xl font-bold text-gray-800 mb-2">{{ student.name }} {{ student.surname }}</h3>
      <p class="text-sm text-gray-600 mb-3">ID: {{ student.studentId }}</p>
      <div class="flex justify-center items-center gap-2 mb-3">
        <span class="font-bold text-gray-700">GPA:</span>
        <span class="font-bold text-lg px-2 py-1 rounded" :class="getGpaClass(student.gpa)">{{ student.gpa }}</span>
      </div>
      <p class="text-sm text-gray-600 italic leading-relaxed">{{ student.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Student } from '@/types'

defineProps<{
  student: Student
}>()

const getGpaClass = (gpa: number) => {
  if (gpa >= 3.5) return 'bg-green-100 text-green-800'
  if (gpa >= 3.0) return 'bg-blue-100 text-blue-800'
  if (gpa >= 2.5) return 'bg-yellow-100 text-yellow-800'
  return 'bg-red-100 text-red-800'
}
</script>

<style scoped>
/* All styles now use Tailwind CSS classes */
</style>