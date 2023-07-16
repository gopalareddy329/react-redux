import { useDispatch } from "react-redux";
import {increase,decrease,increasebyvalue} from '../redux/countReducer'
import { useState } from "react";
import DisplayCounter from './displaycounter'


const Counter = () =>{
    const [value,changeValue]=useState(0)
    
    const dispatch = useDispatch()
    const handelSubmit = (e) =>{
        e.preventDefault()
        dispatch(increasebyvalue(value))
    }
    return (
    <div>
            <h1 style={{marginLeft:'50px'}}><DisplayCounter/></h1>
            <div style={{display:'flex'}}>
                <button onClick={()=>{dispatch(increase())}}>Increase</button>
                <button onClick={()=>{dispatch(decrease())}}>Decrease</button>
            </div><br/>
            <form onSubmit={handelSubmit}>
                <input type="number" onChange={(e)=>{changeValue(e.target.value)}}></input>
                <button type="submit">add</button>
            </form>
    </div>
    )
}

export default Counter;