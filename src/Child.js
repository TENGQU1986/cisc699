import React, {useEffect, memo, useRef} from 'react'
import {isEqual} from 'lodash'

const Child = memo((props) => {
    const {counter, list} = props
    const childRef = useRef(0)
    useEffect(() => {
        console.log('Child component rendered!')
        // childRef.current = childRef.current + 1
    })
    return (
        <div className="Child">
            <h1>Child with Memoization - {counter}</h1>
            
        </div>
    )
}, isEqual)

export default Child
