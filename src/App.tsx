import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Portfolio from './pages/Portfolio'
import { Box } from '@mui/material'

function App() {
  return (
    <Box className={''}>
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
