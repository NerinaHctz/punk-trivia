import { useEffect } from 'react'
import './Timer.scss'

const Timer = ({ time, setTime, handleTimeUp, isFinished, isPaused }) => {
    useEffect(() => {
        if (isFinished || isPaused) {
            return
        }

        const timer = setInterval(() => {
            setTime(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer)
                    handleTimeUp()
                    return 0
                }
                return prevTime - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [setTime, handleTimeUp, isFinished, isPaused])

    return <div>
        <p className='timer'>{time}</p>
    </div>
}

export default Timer