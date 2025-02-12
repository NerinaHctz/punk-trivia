import React, { useEffect, useState } from 'react'
import './Result.scss'

export const getFinalMessage = (score, total) => {
    let message

    if (score < 5) {
        message = 'Parece que estás empezando en esto. ¡Es hora de profundizar más en la movida!'
    } else if (score < 10) {
        message = 'Has atinado alguna, pero aún te queda mucho por aprender. ¡Dale caña y sigue indagando!'
    } else if (score < 15) {
        message = '¡No está mal! Conoces algo sobre la historia del punk, pero aún hay mucho por explorar.'
    } else if (score < 20) {
        message = '¡Debuti! Conoces cosillas sobre el punk, pero aún queda mucho por descubrir.'
    } else if (score < 25) {
        message = '¡Parece que controlas del tema! Pero siempre hay tiempo para descubrir más movidas.'
    } else if (score < 30) {
        message = '¡Fetén! Parece que sabes de lo que hablas, pero escucharte algún disquito más no te vendría mal...'
    } else if (score < 35) {
        message = '¡Casi pero no! Aun así, muy guay, controlas bastante sobre el tema.'
    } else if (score < 40) {
        message = '¡Vamos! Se nota que entiendes del asunto, pero aún te queda alguna cosilla por pulir.'
    } else if (score < 45) {
        message = '¡Cojonudo! Eres una enciclopedia punk con patas, pero alguna cosilla se te escapa...'
    } else if (score === total) {
        message = '¡Pero cómo eres tan friki! ¡Dónde vas acertándolas todas, máquina! Espero que sepas de otras cosas tanto como de este tema.'
    }
    return message
}


function Result({ score, total, onRestart }) {
    const [message, setMessage] = useState("")

    useEffect(() => {
        if (score === total) {
            createConfetti()
        }
        setMessage(getFinalMessage(score))
    }, [score, total])


    const createConfetti = () => {
        const confettiContainer = document.createElement('div')
        confettiContainer.className = 'confetti-container'
        document.body.appendChild(confettiContainer)

        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div')
            confetti.classList.add('confetti')
            const xPos = Math.random() * 100
            const delay = Math.random() * 2
            const duration = 2 + Math.random() * 3
            confetti.style.left = `${xPos}%`
            confetti.style.animationDelay = `${delay}s`
            confetti.style.animationDuration = `${duration}s`
            confettiContainer.appendChild(confetti)
        }

        setTimeout(() => {
            confettiContainer.remove()
        }, 8000)
    }

    return <div className='result-container'>
        <header>
            <h1 className='title'>
                <span className='punk'>Punk</span> <span className='trivia'>Trivia</span>
            </h1>
        </header>
        <h1 className='subtitle'>¡Juego Terminado!</h1>
        <p className='result-score'>Tu puntuación es: <b>{score}</b> de <b>{total}</b></p>
        <p className='result-message'>{message}</p>
        <button className='result-button' onClick={onRestart}>Volver a jugar</button>
    </div>
}

export default Result