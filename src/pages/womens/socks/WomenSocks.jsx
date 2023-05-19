
import { useSelector } from "react-redux"
import Cards from '../../../components/cards/Cards'
import WomensMenu from '../../../components/womensMenu/womensMenuHome'

const WomenSocks = () => {

   const socksData = useSelector(st => st.socks)

  return (
   <>
   <div>
     <div>
       <WomensMenu/>
     </div>
     <div>
       <h3 style={{padding: '20px 0 0 600px', fontSize: 70}}>Socks</h3>
     </div>
   </div>
   <div className="controlCart">
     {socksData.map(el => (
       <Cards key={el.id} productsId={el.id} items={el} />
     ))}
   </div>
 </>
  )
}

export default WomenSocks
