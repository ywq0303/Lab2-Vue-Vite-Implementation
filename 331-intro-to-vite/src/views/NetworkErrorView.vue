<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 text-center">
    <h1 class="text-4xl font-bold text-red-500 mb-6">Uh-Oh!</h1>
    <h3 class="text-xl text-gray-600 max-w-md mb-8">
      It looks like you're experiencing some network issues, please take a breath and
      <a href="#" @click="$router.go(-1)" class="text-green-500 hover:underline font-medium">click here</a> to try again.
    </h3>
    <RouterLink class="px-5 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors" :to="{ name: 'event-list-view' }">Back to Home</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>