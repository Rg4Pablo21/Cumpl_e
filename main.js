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
    button.style.opacity = '0.6';  // Efecto visual de botón deshabilitado
    button.style.cursor = 'not-allowed';

    // Limpiar el contenido previo antes de escribir el nuevo mensaje
    messageContainer.innerHTML = '';  
    let index = 0;

    // Función para escribir el mensaje letra por letra
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
