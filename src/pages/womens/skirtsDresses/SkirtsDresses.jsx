
import { useSelector } from "react-redux"
import WomensMenu from "../../../components/womensMenu/womensMenuHome"
import Cards from "../../../components/cards/Cards"

const SkirtsDresses = () => {

   const skDt =  useSelector( st => st.SkirtsDresses )

  return (
   <>
      <div>
        <div>
          <WomensMenu/>
        </div>
        <div>
          <h3 style={{padding: '20px 0 0 450px', fontSize: 70}}>Skirts & Dresses</h3>
        </div>
      </div>
      <div className="controlCart">
        {skDt.map(el => (
          <Cards key={el.id} productsId={el.id} items={el} />
        ))}
      </div>
    </>
  )
}

export default SkirtsDresses