
import { useSelector } from "react-redux"
import Cards from '../../../components/cards/Cards'
import MensMenu from '../../../components/mensMenu/MensMenuHome'

const Socks = () => {
   const socksData = useSelector(st => st.socks)

  return (
   <>
   <div>
     <div>
       <MensMenu/>
     </div>
     <div>
       <h3 style={{padding: '20px 0 0 550px', fontSize: 110}}>Socks</h3>
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

export default Socks
