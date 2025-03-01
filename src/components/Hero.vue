<script setup>
    import { defineProps } from 'vue';

    defineProps({
        title: {
            type: String,
            default: "Renew your mind with your daily dose of hope"
        },
        subtitle: {
            type: String,
            default: ' "be able to test and approve what God’s will is—his good, pleasing and perfect will." - Romans 12:2 '
        }
    })
</script>

<template>
    <div class="titleHeader">
      <h1>{{ title }}</h1>
      <h2> {{ subtitle }} </h2>
    </div>
</template>

<style scoped>
    .titleHeader {
        margin-top: 15%;
        margin-inline: 10%;
        padding-bottom: 3%;
        width: 80%;
        background-image: url(../assets/img/background2.png);
        border: solid black;
        border-width: 3px;
        border-radius: 1%;
        align-items: center;
        text-align: center;
        margin-bottom: 15%;
    }

    .titleHeader h1 {
        letter-spacing: 0.1em;
        text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5),
                2px 2px 2px rgba(255, 255, 255, 0.3),
                3px 3px 3px rgba(255, 255, 255, 0.2),
                4px 4px 4px rgba(255, 255, 255, 0.1);
        font-size: 2.5em;
        margin-top: 20px;
        font-family: "Chakra Petch", 'Times New Roman', Times, serif;
    }

    .titleHeader h2 {
        margin-top: 5%;
        font-style: italic;
    }

</style>