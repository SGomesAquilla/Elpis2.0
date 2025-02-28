<script setup>
  import Navbar from '@/components/Navbar.vue';
  import Hero from '@/components/Hero.vue';
  import ElpisDescription from '@/components/Elpis-Description.vue';
  import Foot from '@/components/Foot.vue';
</script>

<template>
  <body>
    <Navbar />
    <main id="page" class="container">
      <Hero />
      <ElpisDescription />
    </main>
  </body>
  <Foot />
</template>

<style scoped>
</style>
