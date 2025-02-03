import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import Timer from './Timer'
import './Question.scss'

const Question = ({
    question,
    options = [],
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

    const handleAnswer = (selectedOption) => {
        setAnswered(true)
        setSelectedOption(selectedOption)
        if (selectedOption === answer) {
            setCorrectAnswer(true)
            setScore(score + 1)
        } else {
            setCorrectAnswer(false)
        }

        setTimeout(() => {
            setAnswered(false)
            setSelectedOption(null)
            if (currentQuestionIndex < totalQuestions - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1)
                setTime(15)
            } else {
                finishGame()
            }
        }, 500)
    }

    return <>
        <header>
            <div className='question-title'>
                <span className='punk'>Punk</span> <span className='trivia'>Trivia</span>
            </div>
        </header>
        <ProgressBar currentQuestionIndex={currentQuestionIndex} totalQuestions={totalQuestions} />
        {!isFinished && <Timer time={time} setTime={setTime} handleTimeUp={handleTimeUp} isFinished={isFinished} />}
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
        </div>
        <div className='space'></div>
    </>
}

export default Question