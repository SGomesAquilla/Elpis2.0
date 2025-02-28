<script setup>
    import logo from '@/assets/img/images.js'
</script>

<template>
    <section class="maintext">
      <div class="merchandise">
        <ul>
            <li>
                <img onclick="readingPage()" :src="logo.readingCard" alt="reading"> <p>The Bible, as a sacred text for many Christians, offers a profound source of spiritual nourishment, guidance, and inspiration. Engaging in daily Bible reading can have a transformative impact on one's life, fostering a deeper connection with God and providing practical wisdom for everyday living.</p>
            </li>
            <li>
                <img onclick="songPage()" :src="logo.songCard" alt="song"> <p>Christian worship songs serve as powerful tools for spiritual expression, uplifting the soul, and fostering a deeper connection with God. These songs, filled with lyrics that praise, adore, and seek guidance from the divine, offer a unique avenue for worship and personal devotion.</p>
            </li>
            <li>
                <img onclick="communityPage()" :src="logo.communityCard" alt="community"> <p>Christianity is inherently a communal faith, emphasizing the importance of fellowship, support, and shared experiences among believers. The Church, as the body of Christ, is a vital component of the Christian experience, providing a sense of belonging, encouragement, and spiritual growth.</p>
            </li>
        </ul>
      </div>
    </section>
</template>

<style scoped>
    .maintext {
    display: flex;
    justify-content: center;
    margin-inline: 20%;
    margin-top: 5%;
    margin-bottom: 5%;
    background-color:rgba(248, 238, 224, 0.927);
    border-radius: 5%;
    border: solid black 2px;
    padding: 3%;
    font-size: 17px;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.753);
    margin-bottom:30% ;

  }

  .maintext p {
    padding: 15px;
  }

  .maintext h2 {
    border: solid rgba(0, 0, 0, 0.259) 1px;
    border-radius: 1px;
    margin-bottom: 10px;
    padding-inline: 1%;
    box-shadow: 1px 1px 1px black;
    background-image: url(../assets/img/background2.png);
  }

  .maintext li{
    list-style: none;
    padding: 2px;
  }

  .merchandise {
    padding-inline: 20%;
}

.merchandise p{
    text-align:left;
    position: relative;
    left: 40%;
    bottom: 60px;
}

.merchandise img{
    cursor: pointer;
    position: relative;
    right: 20%;
    top: 100px;
    width: 50%;
    border-radius: 20px;
    transition-duration: 450ms;
}

.merchandise img:hover {
    filter: brightness(120%);
    transition-duration: 500ms;
    box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.23);
}
</style>