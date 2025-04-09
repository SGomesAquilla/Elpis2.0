<script setup></script>

<template>
    <section class="scrollbar-container">
        <div class="category-wrap">
            <iframe width="500" height="315" src="https://www.youtube.com/embed/HsdDF1PgHgA?si=aDvaPIVaI35TxkSR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="500" height="315" src="https://www.youtube.com/embed/s7jXASBWwwI?si=LB4Wwl5gsMf_m5Dz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="500" height="315" src="https://www.youtube.com/embed/U2RyXrfKM0g?si=taLw_phvarubQv4R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="500" height="315" src="https://www.youtube.com/embed/q5m09rqOoxE?si=GWNYz-yrxVAI8aeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="500" height="315" src="https://www.youtube.com/embed/EbMYye-2Yt8?si=eMRxoCZWdVvYRAxH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </section>
</template>

<style scoped>
    .scrollbar-container {
        border: solid pink;
        margin-top: 100px;
        width: auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        padding-bottom: 60px;
    }

    .category-wrap {
        border: solid black;
        padding-left: 3%;
        padding-right: 4%;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        position: relative;
        width: auto;
    }

    iframe {
        border-radius: 10%;
        filter: brightness(75%);
        order: revert;
        animation-fill-mode: backwards;
        transition: all .2s ease-in-out;
        width: 22%;
        min-width: 320px;
        z-index: 1;
        height: 315px;
        margin: 15px;
        background: linear-gradient(to bottom, rgb(53,53,53));
        padding-top: 10px;
    }

    iframe:hover {
        transform: scale(1.1);
        filter: brightness(100%);
        transition-duration: 500ms;
        box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.245);
    }
</style>