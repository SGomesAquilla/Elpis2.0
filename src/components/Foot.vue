<script setup>
    import logo from '@/assets/img/images.js'
</script>

<template>
    <footer>
        © 2024 | Todos os direitos e imagens são reservados aos seus respectivos donos e empresas | Esse trabalho não possui fins lucrativos | Desenvolvido por Áquilla Siqueira Gomes | Para mais detalhes entre em contato:
        <div class="footer-nav">
            <a target="_blank" href="https://www.linkedin.com/in/sgaquilla/"><img :src="logo.linkedin" alt="linkedin"></a>
            <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfrKnGhGpshJxsHHqvFlsxxDFPJHCXfNrDGpMNxlsQThSHXmgVSZsCBQkjTrLrxXsTQkSV"><img alt="gmail" :src="logo.gmail"></a>
            <a target="_blank" href="https://github.com/SGomesAquilla"><img alt="github" :src="logo.github"></a>
        </div>
    </footer>
</template>

<style scoped>
    footer a {
        font-style: none;
    }

    footer {
        text-align: center;
        margin-top: 40%;
        background-color: #f0f0f0e1;
    }

    footer img {
        margin-inline: 3%;
        width: 60px;
        position: relative;
        left: 30%;
    }

    footer img:hover {
        filter: brightness(120%);
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.244);
        transition-duration: 500ms;
        border-radius: 50%;
    }

    .footer-nav {
        display: flex;
        justify-content: center;
        gap: 7%;
    }
</style>