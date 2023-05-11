import { useSelector } from 'react-redux'
import { Route, Routes, } from 'react-router-dom'
import MiniCards from '../components/cards/miniCards/MiniCards'
import Layout from '../components/layout/Layout'
import ShowProducts from '../components/show-product/ShowProducts'
import Home from '../pages/home/Home'
import HoodiesSweatshirts from '../pages/mens/HoodiesSweatshirts/HoodiesSweatshirts'
import JacketVests from '../pages/mens/JacketVests/JacketVests'
import Mens from '../pages/mens/Mens'
import ShoesMans from '../pages/mens/shoes/ShoesMans'
import './App.css'
import AddToCard from '../pages/toCardAdd/AddToCard'
import Shorts from '../pages/mens/shorts/Shorts'

const getItems = (st) => st.filterMansShoes.item2 // [1,2]


const App = () => {
  const item2Arr = useSelector(getItems)

  console.log(item2Arr,'-----');

  return (
    <div>
       
      {item2Arr?.length > 0 ?   <ShowProducts />  : null}

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/addCome' element={<AddToCard/>} /> 

          <Route path='/mens' element={<Mens />}></Route>
          <Route path='/shoes-mens' element={<ShoesMans />} />
          <Route path='/jacket-vest' element={<JacketVests />} />
          <Route path="/mini-cards/:id" element={<MiniCards />} />
          <Route path='/hoodies-sweatshirts' element={<HoodiesSweatshirts />} />
          <Route path='/short-men' element={<Shorts />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
