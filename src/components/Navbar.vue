<script setup>
  import logo from '@/assets/img/images.js';
</script>

<template>
  <header>
    <div class="menu">
      <a href=""><img :src="logo.elpis" class="elpisL" alt="Home"></a>
      <nav class="nav-buttons">
        <button class="navButton">
          <img :src="logo.reading" class="navIcon" alt="Reading"> Reading
        </button>
        <button class="navButton">
          <img :src="logo.song" class="navIcon" alt="Songs"> Songs
        </button>
        <button class="navButton">
          <img :src="logo.community" class="navIcon" alt="Community"> Community
        </button>
      </nav>
      <div class="hamburger-menu"></div>
    </div>
  </header>
</template>

<style scoped>
  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Distributes items */
    width: 100%; /* Ensure it fills the header */
    background-color: rgba(253, 253, 253, 0.653);
  }

  .nav-buttons {
    display: flex;
    justify-content: center; /* Center the buttons */
    flex-grow: 1; /* Allow to grow and take up space */
    white-space: nowrap; /* Prevent buttons from wrapping */
  }

  .navButton {
    margin: 0 20px; /* Space between buttons */
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: column;
    text-align: center;
    flex-basis: 85px;
    border: 0;
    border-radius: 15%;
    background-color: rgba(255, 255, 255, 0);
  }

  .navButton:hover {
    background-color: #cac9c939;
    filter: brightness(95%);
    transition-duration: 500ms;
  }

  .navIcon {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }

  .navIcon:hover {
    filter: invert(22%);
    transition-duration: 250ms;
  }
  
  .elpisL {
    width: 70px;
    margin-left: 15px;
    transition: 250ms ease-in-out;
  }

  .elpisL:hover {
    filter: brightness(105%);
    rotate: -6deg;
  }

  .hamburger-menu {
    width: 41px; /*adjust hamburger size*/
    height: 2px;
    right: 20px;
    background-color: black;
    position: relative;
  }
  .hamburger-menu::before,
  .hamburger-menu::after{
    content: '';
    position: absolute;
    width: 41px;
    height: 2px;
    background-color: black;
  }
  .hamburger-menu::before{
    top: -8px;
  }
  .hamburger-menu::after{
    top: 8px;
  }

  @media (max-width: 768px) {
    .navButton {
      margin: 0 10px; /* Reduce spacing on smaller screens */
    }
  }
</style>