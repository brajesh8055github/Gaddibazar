import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Dropdown from './components/Dropdown'
import Navbar from './components/Navbar'
import Details from './components/Details'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Dropdown/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
