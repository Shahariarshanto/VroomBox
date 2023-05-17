
import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './components/Layout/Home'
import Navbar from './components/Shared/NavBar'
import Footer from './components/Shared/Footer'

function App() {


  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
