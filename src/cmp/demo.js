import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux';

const Demo = () => {
    const numOfClothes = useSelector(state => state.numOfClothes)
    const dispatch = useDispatch()
    return (

        <div>
            <h1> NUMBER OF CLOTHES = {numOfClothes}</h1>
            <button onClick={() => dispatch(increment())}>Buy Clothes</button>
            <button onClick={() => dispatch(decrement())}>Buy Clothes</button>
        </div>
    )
}

export default Demo;

