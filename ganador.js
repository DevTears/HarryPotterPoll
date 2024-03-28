document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const nombreGanador = params.get('nombre');
    const casaGanador = params.get('casa');

    document.getElementById('nombreGanador').textContent = nombreGanador;
    
    document.getElementById('imagenGanador').src = `/src/Nombres/${nombreGanador}.png`;

    const randomAudioIndex = Math.floor(Math.random() * 4) + 1;
    
    const audio = document.getElementById('audio' + randomAudioIndex);

    audio.play();
    
    function conocerCasa() {
        
        document.getElementById('escudoCasa').src = `/src/Casas/${casaGanador}.png`;

        const audioCasa = document.getElementById('audioCasa');
        audioCasa.src = `/src/Audios/${casaGanador}.mp3`;
        audioCasa.play();

        document.getElementById('mensajeFelicidades').textContent = `Felicidades ${nombreGanador}! Ahora perteneces a ${casaGanador}.`;

        document.getElementById('ventanaEmergente').style.display = 'block';
    }
    
    function cerrarVentana() {
        const audioCasa = document.getElementById('audioCasa');
        audioCasa.pause();
        audioCasa.currentTime = 0; 
        document.getElementById('ventanaEmergente').style.display = 'none';
        window.close();
    }
    
    document.querySelector('button').addEventListener('click', conocerCasa);

    document.querySelector('.cerrar').addEventListener('click', cerrarVentana);
});

document.addEventListener('DOMContentLoaded', function() {
    const randomAudioIndex = Math.floor(Math.random() * 4) + 1;
    
    const audio = document.getElementById('audio' + randomAudioIndex);

    audio.play();
});

