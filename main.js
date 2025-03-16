function showMessage() {
    const message = '¡Feliz Cumpleaños Eileen!!!!! 🎂🎉 Eileen, aunque el tiempo pase y las estaciones cambien, quiero que sepas que sigues siendo la misma niña tierna, cariñosa y llena de luz que siempre tú has sido. Tu esencia no ha cambiado, y tu dulzura sigue iluminando todo a tu alrededor. Que este día sea tan especial y tan hermoso como tú." 💖';
    
    const messageContainer = document.getElementById('message');
    const button = document.querySelector('.yes');

    // Si ya se mostró el mensaje, no hacer nada
    if (messageContainer.style.display === 'block') {
        return;
    }

    // Mostrar el mensaje y deshabilitar el botón
    messageContainer.style.display = 'block';
    button.disabled = true;
    button.style.opacity = '0.6';
    button.style.cursor = 'not-allowed';

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

// Función para reproducir y pausar la música
function toggleMusic() {
    var music = document.getElementById("music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Generar corazones cayendo
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

// Crear un corazón cada 100ms
setInterval(createHeart, 100);
