import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Counter from './components/counter'

const App = () =>{
  
  return(
    <div style={{margin:'0 40%'}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<Counter/>}/>
            </Routes>
        
        </BrowserRouter>
    </div>
    
  )
}


export default App;