import { useSelector } from "react-redux";


const DisplayCounter = () => {
    const {counter} = useSelector(state => state.counter)
    console.log("loading..")
    return ( 
        <div>
                <h1>{counter}</h1>
        </div>
     );
}
 
export default DisplayCounter;