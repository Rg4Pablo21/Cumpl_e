// JavaScript (main.js)

function playMusic() {
    const music = document.getElementById("music");
    if (music.paused) {
        music.play();
    }
}

function showMessage() {
    const message = '¡Feliz Cumpleaños Eileen!!!!! 🎂🎉 Eileen, aunque el tiempo pase y las estaciones cambien, quiero que sepas que sigues siendo la misma niña tierna, cariñosa y llena de luz que siempre tú has sido. Tu esencia no ha cambiado, y tu dulzura sigue iluminando todo a tu alrededor. Que este día sea tan especial y tan hermoso como tú." 💖\n\nEl destino nos separó por un tiempo, pero nos volvió a reunir cuando menos lo esperábamos. No sabes cuánto significa para mí haberte encontrado de nuevo. Es como si el tiempo hubiera decidido darnos otra oportunidad para seguir compartiendo momentos especiales juntos. Gracias por estar aquí, Eileen. Feliz Cumpleaños 💕';

    const messageContainer = document.getElementById('message');
    const button = document.querySelector('.yes');

    if (messageContainer.style.display === 'block') {
        return;
    }

    messageContainer.style.display = 'block';
    button.disabled = true;
    button.style.opacity = '0.6';
    button.style.cursor = 'not-allowed';
    button.textContent = "💖 ¡Te quiero mucho, Eileen! 💖"; // Cambia el texto del botón

    messageContainer.innerHTML = '';  
    let index = 0;

    function typeMessage() {
        if (index < message.length) {
            messageContainer.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeMessage, 50);
        }
    }

    typeMessage();
}


function toggleMusic() {
    const music = document.getElementById("music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function createHeart() {
    const heartContainer = document.querySelector('.heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';

    const startPositionX = Math.random() * window.innerWidth;
    heart.style.left = `${startPositionX}px`;

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

setInterval(createHeart, 100);