import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

const Demo = () => {
    const numOfClothes = useSelector(state => state.numOfClothes)
    const dispatch = useDispatch()
    return (

        <div>
            <h1>demo</h1>
        </div>
    )
}

export default Demo;

