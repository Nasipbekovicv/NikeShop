import { useSelector } from 'react-redux'
import { Route, Routes, } from 'react-router-dom'
import MiniCards from '../components/cards/miniCards/MiniCards'
import Layout from '../components/layout/Layout'
import ShowProducts from '../components/show-product/ShowProducts'
import Home from '../pages/home/Home'
import Kids from '../pages/kids/Kids'
import ShoesKids from '../pages/kids/shoes/ShoesKids'
import HoodiesSweatshirts from '../pages/mens/HoodiesSweatshirts/HoodiesSweatshirts'
import JacketVests from '../pages/mens/JacketVests/JacketVests'
import Mens from '../pages/mens/Mens'
import ShoesMans from '../pages/mens/shoes/ShoesMans'
import Shorts from '../pages/mens/shorts/Shorts'
import Socks from '../pages/mens/socks/Socks'
import AddToCard from '../pages/toCardAdd/AddToCard'
import Womens from '../pages/womens/Womens'
import Leggings from '../pages/womens/leggings/Leggings'
import ShoesWomen from '../pages/womens/shoesWomen/ShoesWomen'
import SkirtsDresses from '../pages/womens/skirtsDresses/SkirtsDresses'
import WomenSocks from '../pages/womens/socks/WomenSocks'
import './App.css'

const getItems = (st) => st.filterMansShoes.item2  // [1,2]


const App = () => {
  const item2Arr = useSelector(getItems)

  return (
    <div>
       
      {item2Arr?.length > 0 ?   <ShowProducts />  : null}

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/addCome' element={<AddToCard/>} /> 

          <Route path='/mens' element={<Mens />}/>
          <Route path='/shoes-mens' element={<ShoesMans />} />
          <Route path='/jacket-vest' element={<JacketVests />} />
          <Route path="/mini-cards/:id" element={<MiniCards id={1235}/>} />
          <Route path='/hoodies-sweatshirts' element={<HoodiesSweatshirts />} />
          <Route path='/short-men' element={<Shorts />} />
          <Route path='/socks' element={<Socks/>} />

          <Route path='/womens' element={<Womens/>}/>
           <Route path='/shoes-womens' element={<ShoesWomen/>}/> 
           <Route path='/leggings'  element={<Leggings/>} />
           <Route path='/skirts-dresses' element={<SkirtsDresses/>} />
           <Route path='/women-socks' element={<WomenSocks/>} />

           <Route path='/kids' element={<Kids/>} />
           <Route path='/shoesKids' element={<ShoesKids/>}  />
        </Route>
      </Routes>
    </div>
  )
}

export default App
