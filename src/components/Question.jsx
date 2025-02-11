import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import Timer from './Timer'
import './Question.scss'

const Question = ({
    question,
    explanation,
    options = [],
    image,
    answer,
    setScore,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    finishGame,
    score,
    setTime,
    totalQuestions,
    time,
    handleTimeUp,
    isFinished
}) => {
    const [answered, setAnswered] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)
    const [showExplanation, setShowExplanation] = useState(false)
    const [isPaused, setIsPaused] = useState(false)

    const handleAnswer = (selectedOption) => {
        setAnswered(true)
        setSelectedOption(selectedOption)
        setIsPaused(true)
        setTimeout(() => {
            setShowExplanation(true)
        }, 1000)

        if (selectedOption === answer) {
            setCorrectAnswer(true)
            setScore(score + 1)
        } else {
            setCorrectAnswer(false)
        }
    }

    const handleContinue = () => {
        setShowExplanation(false)
        setIsPaused(false)
        setAnswered(false)
        setSelectedOption(null)
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
            setTime(15)
        } else {
            finishGame()
        }
    }

    return <>
        <header>
            <div className='question-title'>
                <span className='punk'>Punk</span> <span className='trivia'>Trivia</span>
            </div>
        </header>
        <ProgressBar currentQuestionIndex={currentQuestionIndex} totalQuestions={totalQuestions} />
        {!isFinished && <Timer time={time} setTime={setTime} handleTimeUp={handleTimeUp} isFinished={isFinished} isPaused={isPaused} />}
        <div className='question-container'>
            <h2 className='questions'>{question}</h2>
            <div className='button-container'>
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        className={
                            answered
                                ? option === answer
                                    ? selectedOption !== answer
                                        ? 'correct-transparent'
                                        : 'correct'
                                    : option === selectedOption
                                        ? 'incorrect'
                                        : ''
                                : ''
                        }
                    >
                        {option}
                    </button>
                ))}
            </div>
            {showExplanation && (
                <div className='modal'>
                    <div className='modal-content'>
                        {image && <img src={image} alt="Explicación visual" className="explanation-image" />}
                        <p>Respuesta correcta: <b>{answer}</b></p>
                        <p>{explanation}</p>
                        <button onClick={handleContinue}>Continuar</button>
                    </div>
                </div>
            )}
        </div>
        <div className='space'></div>
    </>
}

export default Question