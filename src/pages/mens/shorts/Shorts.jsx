
import MensMenu from "../../../components/mensMenu/MensMenu";
import { useSelector } from "react-redux"
import Cards from '../../../components/cards/Cards'

const Shorts = () => {

   const shortsData = useSelector(st => st.shorts)

  return (
   <>
   <div>
     <div>
       <MensMenu/>
     </div>
     {/* <Reclams/> */}
     <div>
       <h3 style={{padding: '20px 0 0 500px', fontSize: 110}}>Shorts</h3>
     </div>
   </div>
   <div className="controlCart">
     {shortsData.map(el => (
       <Cards key={el.id} productsId={el.id} items={el} />
     ))}
   </div>
 </>
  )
}

export default Shorts
