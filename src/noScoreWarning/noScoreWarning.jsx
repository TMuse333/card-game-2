import { useGameContext } from "../components/context"
import './noScoreWarning.css'


const NoScoreWarning = () => {

    const {setGameStarted, setPlayWithoutScore,
    setCountDownInit, setTotalScore, setGameCompleted } = useGameContext()

    const handleStartGame = () => {
        setCountDownInit(true)
       
        setTotalScore(0)
        setGameCompleted(false)
        setPlayWithoutScore(false)
    }

    return (
        <section className="no-score-container">
            <h1>Be Aware.</h1>
            <p>You have not logged in yet, 
                if you play now without signing in,
                your score will not be saved, do you wish to continue?

            </p>
            <div>
                <button>
                    Sign in
                </button>

                <button onClick={handleStartGame}>Play anyways</button>
            </div>

        </section>
    )
}

export default NoScoreWarning