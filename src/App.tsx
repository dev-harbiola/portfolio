import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Portfolio from './pages/Portfolio'
import './App.scss'

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Portfolio />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
