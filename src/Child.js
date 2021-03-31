import React, {useEffect, memo} from 'react'
import {isEqual} from 'lodash'

const Child = memo((props) => {
    const {counter, list} = props
    useEffect(() => {
        console.log('Child component rendered!')
    })
    return (
        <div className="Child">
            <h1>Child - {counter} - {list.length}</h1>
        </div>
    )
}, isEqual)

export default Child
