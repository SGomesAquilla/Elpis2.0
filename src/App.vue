<script setup>
  import Navbar from '@/components/Navbar.vue';
  import Hero from '@/components/Hero.vue';
  import ElpisDescription from '@/components/Elpis-Description.vue';
  import HomeCards from './components/HomeCards.vue';
  import Card from './components/Card.vue';
  import Foot from '@/components/Foot.vue';
</script>

<template>
  <body>
    <Navbar />
    <main id="page" class="container">
      <Hero title="Welcome to Elpis, your daily dose of hope" subtitle="Focus on renwing your mind in the word of God. Preachings, Worship and online Bible. " />
      <Card background="3" />
    </main>
  </body>
  <Foot />
</template>

<style scoped>
</style>
