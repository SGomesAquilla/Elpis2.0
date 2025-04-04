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
      <Card text="2 Corinthians 4:16-18 - So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen. For the things that are seen are transient, but the things that are unseen are eternal." background="3" />
      <Card />
      <Card text="Philippias 4:6-7 - Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." background="6" />
    </main>
  </body>
  <Foot />
</template>

<style scoped>
</style>
