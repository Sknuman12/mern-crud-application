import {Routes,Route} from "react-router-dom"
import './App.css'
import Home from "./component/Home"
import Readuser from "./component/Readuser"
import Updateuser from "./component/Updateuser"



function App() {


  return (
    <>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/readuser/:id" element= {<Readuser/>}/>
      <Route path="/updateuser/:id" element= {<Updateuser/>}/>
    </Routes>
    </>
  )
}

export default App
