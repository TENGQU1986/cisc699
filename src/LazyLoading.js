import React, { useState, useEffect, } from 'react'
import './App.css';

const LazyLoading = () => {
    const [data, setData] = useState('')
    const [todos, setTodos] = useState([])
    const [page, setPage] = useState(5)
    const [filteredTodos, setFilteredTodos] = useState([])
    const fetchTodos = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        setTodos(data)
        console.log(data)
    }
    useEffect(() => {
        // const getData = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve('This is fetched data.')
        //     }, 5000)
        // })

        // getData.then(result => {
        //     setData(result)
        // })

       
        fetchTodos()
    }, [])
    const handlePageChange = () => {
        setPage(page + 5)
        setFilteredTodos(todos.slice(todos.length - page))
    }
    return (
        <div className="lazyLoading">
            <h1 className="lazyLoading-title">LazyLoading Demo</h1>
            {/* <h2>{data}</h2> */}
            {/* <h2>{todos.length}</h2>
            <h3>{filteredTodos.length}</h3> */}
            {filteredTodos.map((todo, index) => (
                <div className="lazy_container">
                    <h3>{index + 1}</h3>
                    <div><h3>Title: </h3>{todo.title}</div>
                    <div><h3>Completed: </h3>{!todo.completed ? 'false' : 'true'}</div>
                </div>
            ))}
            <button className="button" onClick={handlePageChange}>click for 5 more</button>
        </div>
    )
}

export default LazyLoading
