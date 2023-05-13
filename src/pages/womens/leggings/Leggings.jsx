
import { useSelector } from "react-redux"
import WomensMenu from "../../../components/womensMenu/womensMenuHome"
import Cards from "../../../components/cards/Cards"

const Leggings = () => {

   const leggings =  useSelector( st => st.Leggings )

  return (
   <>
      <div>
        <div>
          <WomensMenu/>
        </div>
        <div>
          <h3 style={{padding: '20px 0 0 550px', fontSize: 70}}>Leggings</h3>
        </div>
      </div>
      <div className="controlCart">
        {leggings.map(el => (
          <Cards key={el.id} productsId={el.id} items={el} />
        ))}
      </div>
    </>
  )
}

export default Leggings