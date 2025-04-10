<script setup>
  import Navbar from '@/components/Navbar.vue';
  import Foot from '@/components/Foot.vue';
  import { RouterView } from 'vue-router';
  console.log(import.meta.env.VITE_GOOGLE_API_KEY);
</script>

<template>
  <main id="page" class="container">
    <Navbar />
    <RouterView />
    <Foot />
  </main>
</template>

<style scoped>
</style>
