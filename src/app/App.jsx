import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'

import './App.css'
import Home from '../pages/home/Home'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={ <Home/> }/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
