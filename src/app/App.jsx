import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'

import './App.css'
import Home from '../pages/home/Home'
import Mens from '../pages/mens/Mens'
import ShoesMans from '../pages/mens/shoes/ShoesMans'
import JacketVests from '../pages/mens/JacketVests/JacketVests'
import MiniCards from '../components/cards/miniCards/MiniCards'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={ <Home/> }/>
          <Route path='/mens' element={<Mens/>}/>
          <Route path='/shoes-mens' element={<ShoesMans/>} />
          <Route path='/jacket-vest' element={ <JacketVests/> }/>
          <Route path="/mini-cards/:id" element={ <MiniCards/> }/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
