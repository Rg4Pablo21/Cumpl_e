document.addEventListener('DOMContentLoaded', () => {

    function playMusic() {
        const music = document.getElementById("music");
        if (music && music.paused) {
            music.play();
        }
    }

    window.showMessage = function() {
        const message = '🌟 ¡Feliz cumpleaños, Emily! 🌟\n\nHoy celebramos tus 18 años, una etapa hermosa llena de nuevos sueños, caminos por recorrer y experiencias por vivir. 🎂🎉\n\nSiempre has sido una persona especial, llena de luz y alegría, y no hay palabras suficientes para agradecer el tenerte cerca. Que nunca pierdas esa chispa única que te hace ser tú. ✨\n\nDisfrutá este día como nunca y recuerda que siempre habrá alguien que te desea lo mejor desde el corazón (Yo). 💖\n\n¡Te quiero muchísimo, Emily! 🎈';

        const messageContainer = document.getElementById('message');
        const button = document.querySelector('.yes');

        if (messageContainer.style.display === 'block') return;

        messageContainer.style.display = 'block';
        button.disabled = true;
        button.style.opacity = '0.6';
        button.style.cursor = 'not-allowed';
        button.textContent = "💖 Con cariño, para ti 💖";

        messageContainer.innerHTML = '';
        let index = 0;

        function typeMessage() {
            if (index < message.length) {
                messageContainer.innerHTML += message.charAt(index);
                index++;
                setTimeout(typeMessage, 45);
            }
        }

        typeMessage();
    };

    window.toggleMusic = function() {
        const music = document.getElementById("music");
        if (!music) {
            console.warn("Elemento <audio id='music'> no encontrado.");
            return;
        }

        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    };

    function createHeart() {
        const heartContainer = document.querySelector('.heart-container');
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '💖';

        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heartContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }

    setInterval(createHeart, 150);

});
