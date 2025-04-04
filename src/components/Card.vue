<script setup>
    import { ref, computed } from 'vue';
    import cardBackgrounds from '@/assets/card_backgrounds/cardBackgrounds.js'

    //props
    const props = defineProps({
        text: {
            type: String,
            default: ' "Jeremiah 29:11 - For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope." ',
        },
        wordLimit: {
            type: Number,
            default: 45
        },
        background: {
            type: Number,
            default: 1,
            validator: (value) => Object.keys(cardBackgrounds).includes(String(value)),
        },
    });

    //Computed property to get the background URL
    const backgroundImage = computed(() => {
        return cardBackgrounds[props.background] || cardBackgrounds[1];
    });

    //truncate text functionality
    const truncatedText = computed(() => {
        const words = props.text.split(' ');
        if (words.length > props.wordLimit) {
            return words.slice(0, props.wordLimit).join(' ') + '...';
        }
        return props.text;
    });

    //like button functionlaity
    const isHeartToggled = ref(false);

    //everytime hamburger-menu class item is clicked its states changes through true and false, and this affects the css with the .click event I set
    const likeButton = () => {
        isHeartToggled.value = !isHeartToggled.value;
    };

    //so I dont need to write this conditional every time on several buttons
    const toggledHeart = computed(() => {
        return {
            'pi': true, // Always apply the pi class
            'pi-heart-fill': isHeartToggled.value, // Apply pi-heart-fill when toggled
            'pi-heart': !isHeartToggled.value, // Apply pi-heart when not toggled
        };
    });

    const heartStyle = computed(() => {
        return {
            'color': isHeartToggled.value ? 'red' : 'inherit'
        };
    });
</script>

<template>
    <section>
        <div class="container" :style="{'background-image': `url(${backgroundImage})`}">
            <div class="card-text">
                <a href="http://" target="_blank" rel="noopener noreferrer">{{ truncatedText }}</a>
            </div>
            <nav>
                <button @click="likeButton" :class="{ 'click': isHeartToggled }"><i :class="toggledHeart" :style="heartStyle" style="font-weight: 500;"></i></button>
                <button><i class="pi pi-share-alt" style="font-weight: 500;"></i></button>
                <button><i class="pi pi-ellipsis-h" style="font-weight: 500;"></i></button>
            </nav>
        </div>
    </section>
</template>

<style scoped>
    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 48%;
        height: 38vh;
        gap: 25px;
        border-radius: 23px;
        background-size: cover;
        margin: 0 87px;
        margin-top: 2rem;
        margin-bottom: 8rem;
        padding-bottom: 55px;
    }

    .card-text {
        flex-grow: 1;
        width: 80%;
        display: flex;
        flex-direction: column;
        text-align: center;
        box-sizing: border-box;
        align-self: center;
        justify-content: center;
        border: solid rgba(255, 255, 255, 0);
        background-color: rgba(225, 202, 202, 0);
        border-radius: 10px;
        font-family: Garamond, Playfair Display, or EB Garamond for a timeless, refined look;
        font-size: 120%;
        font-weight: bold;
        color: rgb(0, 0, 0);
        backdrop-filter: blur(2px);
    }

    nav {
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
        gap: 50px;
        width: 100%;
        border-bottom-left-radius: 23px;
        border-bottom-right-radius: 23px;
        background-color: rgba(107, 107, 107, 0.408);
    }

    section button {
        padding: 0.8rem 1.2rem; 
        border: none; 
        border-radius: 8px; 
        background-color: rgba(255, 255, 255, 0);
        font-size: 1rem; 
        cursor: pointer;
        transition-duration: 500ms;
    }

    button:hover {
        color: white;
    }
    
    a {
        text-decoration: none;
        color: black;
    }
</style>