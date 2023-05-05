import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { HomePage } from "./pages/HomePage/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
