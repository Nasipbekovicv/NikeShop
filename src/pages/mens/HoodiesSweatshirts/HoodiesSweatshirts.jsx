

import { useSelector } from 'react-redux'
import Cards from '../../../components/cards/Cards'



const HoodiesSweatshirts = () => {

   const HoodiesSweatshirtsData = useSelector(state => state.HoodiesSweatshirts)
   console.log(HoodiesSweatshirtsData, '-----------------------------------');
   return (
      <div className='controlCart'>
         {HoodiesSweatshirtsData.map(el => (
            <Cards key={el.id} productsId={el.id} items={el} />

         ))}
      </div>
   )
}

export default HoodiesSweatshirts
