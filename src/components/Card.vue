<script setup>
    import { defineProps, ref, computed } from 'vue';

    const props = defineProps({
        text: {
            type: String,
            default: ' "be able to test and approve what God’s will is—his good, pleasing and perfect will." - Romans 12:2 ',
        },
        wordLimit: {
            type: Number,
            default: 25
        }
    });

    const fullText = ref(props.text);
    
    const truncatedText = computed(() => {
        const words = fullText.value.split(' ');
        if (words.length > props.wordLimit) {
            return words.slice(0, props.wordLimit).join(' ...');
        }
        return fullText.value;
    });
</script>

<template>
    <section>
        <div class="container">
            <div class="card-text">
                {{ text }}
            </div>
            <nav>
                <button><i class="pi pi-heart" style="font-weight: 500;"></i></button>
                <button><i class="pi pi-share-alt" style="font-weight: 500;"></i></button>
                <button><i class="pi pi-ellipsis-h" style="font-weight: 500;"></i></button>
            </nav>
        </div>
    </section>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 48%;
        height: 38vh;
        gap: 25px;
        border-radius: 23px;
        background-color: rgba(255, 255, 255, 0.815);
        margin: 0 87px;
    }

    .card-text {
        margin-top: 117px;
        height: auto;
        width: 80%;
        display: flex;
        text-align: center;
        box-sizing: border-box;
        align-self: center;
        justify-content: center;
        border: solid rgba(255, 192, 203, 0);
    }

    nav {
        display: flex;
        justify-content: center;
        gap: 50px;
        width: 100%;
        border-bottom-left-radius: 23px;
        border-bottom-right-radius: 23px;
        background-color: rgba(0, 0, 0, 0.486);
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
</style>