import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState( value )

    const handleAdd = () => {
        //desestructuracion del retorno de la funcin
        setCounter( counter + 1 )
        // setCounter( () => counter + 1 )
    }
    const handleRest = () => {
        // Actualiza el cambio del estado
        setCounter(counter - 1)
    }
    const handleReset = () => {
        setCounter( value )
    }

    return (
        <div className="center">
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <div>
                <button onClick={ handleAdd }>
                    +1
                </button>
                
                <button onClick={ handleRest  }>
                    -1
                </button>
                <button onClick={ handleReset }>
                    Reset
                </button>
            </div>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}