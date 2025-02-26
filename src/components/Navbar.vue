<script setup>
  import logo from '@/assets/img/images.js';
</script>

<template>
  <header>
    <div class="menu">
      <a href=""><img :src="logo.elpis" class="elpisL" alt="Home"></a>
      <nav class="nav-buttons">
        <button class="navButton">
          <img :src="logo.reading" class="navIconR" alt="Reading"> Reading
        </button>
        <button class="navButton">
          <img :src="logo.song" class="navIconS" alt="Songs"> Songs
        </button>
        <button class="navButton">
          <img :src="logo.community" class="navIconC" alt="Community"> Community
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  .menu {
    background-color: rgba(189, 42, 42, 0.962);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }

  .nav-buttons {
    display: flex;
    gap: 50px;
  }

  .elpisL {
    width: 80px; /* Make the Elpis logo larger */
  }

  .navButton {
    display: flex; /* Use flexbox to center the image and text */
    flex-direction: column; /* Stack image and text vertically */
    align-items: center; /* Center horizontally */
    text-align: center; /* Center text */
    background: none; /* remove default button background */
    border: none; /* remove default button border */
    border-radius: 20px;
    cursor: pointer; /* make cursor a pointer on hover */
    padding: 10px; /* add some padding to the button */
  }

  .navButton:hover {
    filter: brightness(110%);
    transition-duration: 500ms;
    background-color: #cac9c939;
  }

  .navButton img {
    width: 30px; /* Adjust image size in buttons */
    margin-bottom: 5px; /* Add space between image and text */
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .nav-buttons {
      gap: 20px;
    }
  }
</style>