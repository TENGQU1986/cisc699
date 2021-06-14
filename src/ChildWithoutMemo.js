import React, {useState, useEffect, memo, useRef} from 'react'
import {isEqual} from 'lodash'

const ChildWithoutMemo = (props) => {
    const {counter, list} = props
    const [childRenderTime, setChildRenderTime] = useState(0);
    const childRef = useRef(0)
    useEffect(() => {
        console.log('Child component rendered!')
        childRef.current = childRef.current + 1
    })
    return (
        <div className="Child">
            <h1>Child without Memoization - {counter}</h1>
        </div>
    )
}

export default ChildWithoutMemo
