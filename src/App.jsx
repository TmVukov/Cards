import './App.scss'
import { useState } from 'react'
import Screen1 from './pages/Screen1'
import Screen2 from './pages/Screen2'
import Spinner from './components/spinner/Spinner'

function App() {
    const [loading, setLoading] = useState(false)
    const [showMore, setShowMore] = useState(false)

    const loadNewScreen = () => {
        setLoading(true)

        setTimeout(() => {
            setShowMore(true)
            setLoading(false)
        }, 1000)
    }

    if (loading) {
        return <Spinner />
    }

    return (
        <main>
            {!showMore ? (
                <>
                    <Screen1 loadNewScreen={loadNewScreen} />
                    <button onClick={loadNewScreen}>Show more</button>
                </>
            ) : (
                <Screen2 />
            )}
        </main>
    )
}

export default App
