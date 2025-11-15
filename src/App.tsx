import './App.css'
import { HeroUIProvider } from '@heroui/react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Layout from './components/Layout'

function App() {
  return (
    <HeroUIProvider disableAnimation={false}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </HeroUIProvider>
  )
}

export default App
