const personajes = [
    { nombre: "Julieta", casa: "Hufflepuff", escudo: "hufflepuff.png", audio: "hufflepuff.mp3" },
    { nombre: "Martina", casa: "Gryffindor", escudo: "gryffindor.png", audio: "gryffindor.mp3" },
    { nombre: "Valentina", casa: "Ravenclaw", escudo: "ravenclaw.png", audio: "ravenclaw.mp3" },
    { nombre: "Sergio", casa: "Ravenclaw", escudo: "ravenclaw.png", audio: "ravenclaw.mp3" },
    { nombre: "Nicolas L", casa: "Ravenclaw", escudo: "ravenclaw.png", audio: "ravenclaw.mp3" },
    { nombre: "Stella", casa: "Slytherin", escudo: "slytherin.png", audio: "slytherin.mp3" },
    { nombre: "Angel", casa: "Ravenclaw", escudo: "ravenclaw.png", audio: "ravenclaw.mp3" },
    { nombre: "Claudio", casa: "Slytherin", escudo: "slytherin.png", audio: "slytherin.mp3" },
    { nombre: "Marian", casa: "Slytherin", escudo: "slytherin.png", audio: "slytherin.mp3" },
    { nombre: "Pia", casa: "Hufflepuff", escudo: "hufflepuff.png", audio: "hufflepuff.mp3" },
    { nombre: "Martin", casa: "Gryffindor", escudo: "gryffindor.png", audio: "gryffindor.mp3" },
    { nombre: "Estefania", casa: "Ravenclaw", escudo: "ravenclaw.png", audio: "ravenclaw.mp3" },
    { nombre: "Lucia M", casa: "Slytherin", escudo: "slytherin.png", audio: "slytherin.mp3" },
    { nombre: "Gabriela", casa: "Gryffindor", escudo: "gryffindor.png", audio: "gryffindor.mp3" },
    { nombre: "Diego", casa: "Gryffindor", escudo: "gryffindor.png", audio: "gryffindor.mp3" },
    { nombre: "Lara", casa: "Hufflepuff", escudo: "hufflepuff.png", audio: "hufflepuff.mp3" },
    { nombre: "Rocio", casa: "Ravenclaw", escudo: "ravenclaw.png", audio: "ravenclaw.mp3" },
    { nombre: "Gerardo", casa: "Slytherin", escudo: "slytherin.png", audio: "slytherin.mp3" },
    { nombre: "Liliana", casa: "Slytherin", escudo: "slytherin.png", audio: "slytherin.mp3" },
    { nombre: "Miriam", casa: "Hufflepuff", escudo: "hufflepuff.png", audio: "hufflepuff.mp3" },
    { nombre: "Osvaldo", casa: "Hufflepuff", escudo: "hufflepuff.png", audio: "hufflepuff.mp3" },
    { nombre: "Paula", casa: "Slytherin", escudo: "slytherin.png", audio: "slytherin.mp3" },
    { nombre: "Ivana", casa: "Gryffindor", escudo: "gryffindor.png", audio: "gryffindor.mp3" },
    { nombre: "Eugenia", casa: "Slytherin", escudo: "slytherin.png", audio: "slytherin.mp3" },
    { nombre: "David", casa: "Ravenclaw", escudo: "ravenclaw.png", audio: "ravenclaw.mp3" },
    { nombre: "Rodolfo", casa: "Hufflepuff", escudo: "hufflepuff.png", audio: "hufflepuff.mp3" },
    { nombre: "Lucia", casa: "Gryffindor", escudo: "gryffindor.png", audio: "gryffindor.mp3" },
    { nombre: "Sofia", casa: "Gryffindor", escudo: "gryffindor.png", audio: "gryffindor.mp3" },
    { nombre: "Maxi", casa: "Slytherin", escudo: "slytherin.png", audio: "slytherin.mp3" },
    { nombre: "Nicolas", casa: "Hufflepuff", escudo: "hufflepuff.png", audio: "hufflepuff.mp3" },
    { nombre: "Gerardo M", casa: "Ravenclaw", escudo: "ravenclaw.png", audio: "ravenclaw.mp3" },
    { nombre: "Bautista", casa: "Hufflepuff", escudo: "hufflepuff.png", audio: "hufflepuff.mp3" },
    { nombre: "Guille", casa: "Slytherin", escudo: "slytherin.png", audio: "slytherin.mp3" },
    { nombre: "Ana", casa: "Gryffindor", escudo: "gryffindor.png", audio: "gryffindor.mp3" },
    { nombre: "Alejandra", casa: "Hufflepuff", escudo: "hufflepuff.png", audio: "hufflepuff.mp3" }
];

let audio = new Audio('/src/Audios/Sombrero Seleccionador Theme.mp3');
audio.loop = true;

function playAudio() {
    audio.play();
    document.getElementById('playAudioButton').style.display = 'none';
    document.getElementById('pauseAudioButton').style.display = 'inline-block';
}

function pauseAudio() {
    audio.pause();
    document.getElementById('playAudioButton').style.display = 'inline-block';
    document.getElementById('pauseAudioButton').style.display = 'none';
}

function decreaseVolume() {
    audio.volume -= 0.1;
}

const personajesTabla = document.getElementById('personajesTabla').getElementsByTagName('tbody')[0];

function eliminarPersonaje(nombre) {
    const fila = document.querySelector(`tr[data-nombre="${nombre}"]`);
    if (fila) {
        personajesTabla.removeChild(fila);
        const index = personajes.findIndex(personaje => personaje.nombre === nombre);
        if (index !== -1) {
            
            if (index < wheel.segments.length) {
                wheel.deleteSegment(index + 1);
                wheel.draw();
            }
            personajes.splice(index, 1);
        }
    }
}

function actualizarTabla() {
    personajesTabla.innerHTML = '';
    personajes.forEach(personaje => {
        if (personaje.nombre !== '') {
            const fila = document.createElement('tr');
            fila.dataset.nombre = personaje.nombre;
            fila.innerHTML = `
            <td>${personaje.nombre}</td>
            <td><button onclick="eliminarPersonaje('${personaje.nombre}')">Eliminar</button></td>
            `;
            personajesTabla.appendChild(fila);
        }
    });
}

actualizarTabla();

const colores = ["#740001", "#222f5b", "#f0c75e", "#2a623d"];

let wheel = new Winwheel({
    'numSegments': personajes.length,
    'outerRadius': 300,
    'textFontSize': 16,
    'segments': personajes.map((personaje, index) => ({
        'text': personaje.nombre,
        'fillStyle': colores[index % colores.length],
        'textFontFamily': 'Arial',
        'textFontSize': 20,
        'textFillStyle': '#ffffff',
        'textStrokeStyle': '#000000',
    })),
    'animation': { 'type': 'spinToStop', 'duration': 12, 'spins': 5.33 }
});

function spin() {
    wheel.stopAnimation(false);
    wheel.rotationAngle = 0;
    const stopAt = wheel.getRandomForSegment(wheel.getIndicatedSegment());
    wheel.animation.stopAngle = stopAt;

    const spins = Math.random() * (20 - 5) + 5;

    const stopAngle = wheel.getRandomForSegment(wheel.getIndicatedSegment());
    
    wheel.animation.spins = spins;
    wheel.startAnimation();
    
    setTimeout(function () {
        const winningSegment = wheel.getIndicatedSegment();
        const ganador = personajes.find(personaje => personaje.nombre === winningSegment.text);
        
        const url = `ganador.html?nombre=${ganador.nombre}&casa=${ganador.casa}`;
        
        window.open(url, '_blank');
    }, 12000); // Esperar 12 segundos (la duración del giro de la ruleta)
}


