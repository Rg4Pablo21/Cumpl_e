document.addEventListener('DOMContentLoaded', () => {

    function playMusic() {
        const music = document.getElementById("music");
        if (music && music.paused) {
            music.play();
        }
    }

    window.showMessage = function() {
        const message = '🌟 Te deseo un feliz Día del Cariño 💕 Que este día esté lleno de momentos especiales, sonrisas sinceras y abrazos que reconforten el alma. Que el amor y la amistad iluminen tu vida hoy y siempre, recordándote lo valiosa y especial que eres.';

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
