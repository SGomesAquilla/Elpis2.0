<script setup>
  import logo from '@/assets/img/images.js';
  import { ref } from 'vue';

  const isMenuOpen = ref(false);

  //everytime hamburger-menu class item is clicked its states changes through true and false, and this affects the css with the .click event I set
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
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
      <button class="hamburger-menu" @click="toggleMenu" :class="{ 'click': isMenuOpen }">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </button>
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
    cursor: pointer;
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

  .hamburger-menu { /* sets hamburger menu toggle button dimensions and properties */
    width: 55px;
    height: 35px;
    right: 20px;
    position: relative;
    border: 0;
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;
  }

  .bar {
    margin: 6px 7px; /* centered inside the button */
    width: 41px; /*adjust hamburger size*/
    height: 2px;
    background-color: black;
    position: relative;
    transition: 250ms ease-in-out;
  }

  @media (max-width: 768px) {
    .navButton {
      margin: 0 10px; /* Reduce spacing on smaller screens */
    }
  }

  .hamburger-menu.click .bar:nth-child(2) {
    opacity: 0;
    transform: translate(-10px);
  }

  .hamburger-menu.click .bar:nth-child(1) {
    transform: rotate(45deg) translate(1px, 10px);
  }

  .hamburger-menu.click .bar:nth-child(3) {
    transform: rotate(-45deg) translate(1px, -10px);
  }
</style>