
import { useSelector } from "react-redux"
import Cards from "../../../components/cards/Cards"
import KidsMenu from '../../../components/kids-menu/KidsMenu'

const ShoesKids = () => {

   const shoes = useSelector(st => st.shoesKids)

  return (
   <>
   <div>
     <div>
       <KidsMenu/>
     </div>
     <div>
       <h3 style={{padding: '20px 0 0 550px', fontSize: 110}}>Shoes</h3>
     </div>
   </div>
   <div className="controlCart">
     {shoes.map(el => (
       <Cards key={el.id} productsId={el.id} items={el} />
     ))}
   </div>
 </>
   )
}

export default ShoesKids