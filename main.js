function showMessage() {
    const message = '¡Feliz Cumpleaños Eileen!!!!! 🎂🎉 Eileen, aunque el tiempo pase y las estaciones cambien, quiero que sepas que sigues siendo la misma niña tierna, cariñosa y llena de luz que siempre tú has sido. Tu esencia no ha cambiado, y tu dulzura sigue iluminando todo a tu alrededor. Que este día sea tan especial y tan hermoso como tú." 💖';
    
    const messageContainer = document.getElementById('message');
    messageContainer.style.display = 'block';
    
    let index = 0;
    messageContainer.innerHTML = '';  // Limpiar mensaje previo, si existe

    function typeMessage() {
        if (index < message.length) {
            messageContainer.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeMessage, 50);  // Intervalo entre cada letra
        }
    }

    typeMessage();  // Iniciar la animación de escritura
}

// Generar corazones cayendo
function createHeart() {
    const heartContainer = document.querySelector('.heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    
    const startPositionX = Math.random() * window.innerWidth;  // Posición aleatoria en el eje X
    heart.style.left = `${startPositionX}px`;
    
    heartContainer.appendChild(heart);

    // Eliminar el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Crear un corazón cada 100ms
setInterval(createHeart, 100);
