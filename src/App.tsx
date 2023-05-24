import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Portfolio from './pages/Portfolio'
import './App.scss'
import { Box } from '@mui/material'
import useApp from './hooks/useApp'

function App() {
const {dark} = useApp()
  return (
    <Box className={dark ? 'dark': 'light'}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Portfolio />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
