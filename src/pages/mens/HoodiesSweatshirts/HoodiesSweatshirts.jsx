

import { useSelector } from 'react-redux'
import Cards from '../../../components/cards/Cards'
import MensMenu from '../../../components/mensMenu/MensMenu';



const HoodiesSweatshirts = () => {

   const HoodiesSweatshirtsData = useSelector(state => state.HoodiesSweatshirts)
   console.log(HoodiesSweatshirtsData, '-----------------------------------');
   return (
      <div>
         <div>
            <MensMenu/>
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
