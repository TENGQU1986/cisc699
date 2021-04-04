import React, {useState} from 'react'
import Child from './Child'
import './App.css'
// import Perf from 'react-addons-perf'

// window.Perf = Perf

const App = () => {
    const [counter, setCounter] = useState(0)
    const [input, setInput] = useState('')
    const list = [1, 2, 3]

    const handleCounterClick = () => {
        setCounter(counter + 1)
    }

    const onInputChange = (e) => {
        const value = e.target.value
        setInput(value)
    }

    return (
        // <div className="App">
        //     <h1>Hello from Parent: {counter}</h1>
        //     <button onClick={handleCounterClick}>+1</button>
        //     <input type="text" onChange={onInputChange}/>
        //     <Child counter={counter} list={list}/>
        // </div>
        <h1>Hello World from FL!!</h1>
    )
}

export default App
