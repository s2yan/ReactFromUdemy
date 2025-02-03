//import {useState} from 'react';
import {useReducer} from 'react';
import Button from '../components/Button';

const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
const ADD_VALUE_TO_COUNTER = 'ADD_VALUE_TO_COUNTER'
const SET_VALUE_TO_ADD = 'SET_VALUE_TO_ADD'

const reducer = (state, action) =>{
    switch (action.type){
    case INCREMENT_COUNTER:
        return {
            ...state,
            count: state.count + 1
        }
    
    case DECREMENT_COUNTER:
        return {
            ...state,
            count: state.count - 1
        }

    case SET_VALUE_TO_ADD:
        return {
            ...state,
            valueToAdd: action.payload
        }
    
    case ADD_VALUE_TO_COUNTER:
        return {
            ...state,
            count: state.count + state.valueToAdd,
            valueToAdd: 0
        }
    
    default:
        throw new Error('Action type not found: ' + action.type)
    }
}
export default function CounterPage(){
    
    //const [count, setCount] = useState(0)
    // const [valueToAdd, setValueToAdd] = useState(0)
    const [ state, dispatch ] = useReducer(reducer, {
        count: 0,
        valueToAdd: 0
    })
    //console.log(state)

    const handleIncrement = () =>{
        dispatch({
            type: INCREMENT_COUNTER
        })
    }
    const handleDecrement = () =>{
        if(state.count !== 0 ){
            dispatch({
                type: DECREMENT_COUNTER
            })
        }
    }

    const handleChange = (e) =>{
        const value = parseInt(e.target.value) || 0
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch({
            type: ADD_VALUE_TO_COUNTER
        })
    }
    return (
        <div>
            <h1>Counter {state.count}</h1>
            <Button onClick={handleIncrement}>Increment</Button>
            <Button onClick={handleDecrement}>Decrement</Button>

            <form onSubmit={handleSubmit}>
                <input 
                    type="number"
                    value={state.valueToAdd || ''}
                    onChange = {handleChange}   
                />
                <Button>Add it</Button>
            </form>
        </div>

    )
}