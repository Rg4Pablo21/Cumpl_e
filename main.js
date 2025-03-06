function showMessage() {
    document.getElementById('message').style.display = 'block';
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
