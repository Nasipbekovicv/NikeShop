

import { useSelector } from 'react-redux'
import Cards from '../../../components/cards/Cards'
import MensMenu from '../../../components/mensMenu/MensMenuHome';



const HoodiesSweatshirts = () => {

   const HoodiesSweatshirtsData = useSelector(state => state.HoodiesSweatshirts)
   return (
      <div>
         <div>
            <MensMenu/>
         </div>
         <div>
       <h3 style={{padding: '20px 0 0 230px', fontSize: 90}}>Hoodies & Sweatshirts</h3>
     </div>
      <div className='controlCart'>
         {HoodiesSweatshirtsData.map(el => (
            <Cards key={el.id} productsId={el.id} items={el} />

         ))}
      </div>
      </div>
   )
}

export default HoodiesSweatshirts
