<script setup></script>

<template>
    <section class="scrollbar-container">
        <iframe width="500" height="315" src="https://www.youtube.com/embed/s7jXASBWwwI?si=LB4Wwl5gsMf_m5Dz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="500" height="315" src="https://www.youtube.com/embed/U2RyXrfKM0g?si=taLw_phvarubQv4R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="500" height="315" src="https://www.youtube.com/embed/q5m09rqOoxE?si=GWNYz-yrxVAI8aeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </section>
</template>

<style scoped>
    section {
        margin-top: 100px;
    }

    iframe {
        border-radius: 20px;
    }

    .scrollbar-container {
        overflow-x: scroll;
    }
</style>