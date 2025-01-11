import React, { useEffect, useState } from 'react'

export const getFinalMessage = (score) => {
    let message

    if (score < 5) {
        message = 'Estás empezando. ¡Es hora de profundizar más en la escena punk!'
    } else if (score < 10) {
        message = 'Ya te estás familiarizando. ¡Sigue rockeando con las leyendas del punk!'
    } else if (score < 15) {
        message = '¡Buen trabajo! Conoces algo de la historia del punk, pero aún hay mucho por explorar.'
    } else if (score < 20) {
        message = '¡Gran trabajo! Estás familiarizado con los clásicos del punk, pero aún queda mucho punk underground por descubrir.'
    } else if (score < 25) {
        message = '¡Tienes un buen dominio de la historia del punk! Sigue adelante y aprende sobre los héroes olvidados de la escena.'
    } else if (score < 30) {
        message = '¡Impresionante! Ya te has ganado un lugar en el salón de la fama del punk, pero siempre hay espacio para más conocimiento.'
    } else if (score < 35) {
        message = '¡Casi lo logras! Eres un verdadero aficionado al punk, pero algunos hechos poco conocidos aún te escapan.'
    } else if (score < 40) {
        message = '¡Legendario! Ya casi eres una enciclopedia punk viviente, ¡pero siempre hay algo nuevo por descubrir!'
    } else if (score === 40) {
        message = '¡Puntaje perfecto! Eres un verdadero maestro del punk, ¡tu conocimiento de la escena es inigualable!'
    }
    return message
}


function Result({ score, total }) {
    const [message, setMessage] = useState("")

    useEffect(() => {
        if (score === total) {
            createConfetti()
        }
        setMessage(getFinalMessage(score))
    }, [score, total])

    // const createConfetti = () => {
    //     const confettiContainer = document.createElement('div');
    //     confettiContainer.className = 'confetti-container';
    //     document.body.appendChild(confettiContainer);

    //     for (let i = 0; i < 100; i++) {
    //         const confetti = document.createElement('div');
    //         confetti.classList.add('confetti');
    //         const xPos = Math.random() * 100;
    //         const delay = Math.random() * 2;
    //         const duration = 2 + Math.random() * 3;
    //         confetti.style.left = `${xPos}%`;
    //         confetti.style.animationDelay = `${delay}s`;
    //         confetti.style.animationDuration = `${duration}s`;
    //         confettiContainer.appendChild(confetti);
    //     }

    //     setTimeout(() => {
    //         confettiContainer.remove();
    //     }, 5000);
    // };


    return <div className='result-container'>
        <h1>¡Juego Terminado!</h1>
        <p>Tu puntaje final es: {score} de {total}</p>
        <p>{message}</p>
    </div>

}

export default Result