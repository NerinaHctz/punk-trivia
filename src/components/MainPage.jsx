import React from 'react'
import './MainPage.scss'

const MainPage = ({ onStart, animateTitle }) => {
    return <div className={`main-page ${animateTitle ? 'animate' : ''}`}>
        <h1 className='title'>
            <span className='punk'>Punk</span> <span className='trivia'>Trivia</span>
        </h1>
        <h2 className='subtitle'>Demuestra lo que sabes</h2>
        <p className='instructions'>Responde correctamente a las preguntas antes de que se acabe el tiempo. Tienes 15 segundos por pregunta para elegir entre tres opciones.
            Avanza hasta el final y consigue la máxima puntuación. ¡Demuestra tus conocimientos sobre el punk y reta a tus amigos!</p>
        <button className='start-button' onClick={onStart}>Jugar</button>
    </div>

}

export default MainPage