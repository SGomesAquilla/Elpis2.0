<script setup>
  import Hero from '@/components/Hero.vue';
  import Card from '@/components/Card.vue';
</script>

<template>
    <Hero title="Welcome to Elpis, your daily dose of hope" subtitle="Focus on renewing your mind in the word of God. Preachings, Worship and online Bible. " />
    <div class="main-title">Reading</div>
    <hr>
    <Card routeTo="/reading" background="3" text="2 Corinthians 4:16-18 - So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen. For the things that are seen are transient, but the things that are unseen are eternal." />
    <div class="main-title">Songs</div>
    <hr>
    <Card routeTo="/songs" />
    <div class="main-title">Community</div>
    <hr>
    <Card routeTo="/community" background="6" text="Philippias 4:6-7 - Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." />
</template>

<style scoped>
    hr {
        margin-left: 10px;
        margin-right: 58%;
        height: 2px;
        background-color: rgba(156, 156, 156, 0.236);
        border-radius: 500px;
    }

    .main-title {
        font-family: "Chakra Petch", 'Times New Roman', Times, serif;
        font-size: 26px;
        font-style: oblique;
        font-weight: bold;
        color: rgba(84, 67, 67, 0.753);
        margin-left: 25px;
    }
</style>