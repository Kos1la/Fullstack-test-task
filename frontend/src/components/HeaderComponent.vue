<template>
  <header class="bg-neutral-100 p-4 rounded-2xl shadow-md">
    <nav class="flex justify-between items-center">
      <RouterLink to="/" class="font-bold text-lg">Login</RouterLink>
      <div class="flex items-center space-x-4">
        <RouterLink to="/clients" class="text-lg">Clients</RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
