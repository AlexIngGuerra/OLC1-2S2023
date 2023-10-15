//import './App.css'
import {Home} from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home1' element={<Home titulo={"Home 1"} mostrar={true}/>} />
          <Route path='/home2' element={<Home titulo={"Home 2"} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
