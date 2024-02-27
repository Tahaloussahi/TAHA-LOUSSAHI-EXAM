import React from "react"
import { Routes,Route } from "react-router-dom"
import acceuil from "./acceuil"


function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<acceuil/>}></Route>
          <Route path='/' element={<contact/>}></Route>
        </Routes>
    </>
  )
}

export default App
