
import { useSelector } from "react-redux"
import WomensMenu from "../../../components/womensMenu/womensMenuHome"
import Cards from "../../../components/cards/Cards"

const ShoesWomen = () => {

   const dt_shs_Wmes =  useSelector( st => st.womensShoes )

  return (
   <>
      <div>
        <div>
          <WomensMenu/>
        </div>
        <div>
          <h3 style={{padding: '20px 0 0 450px', fontSize: 70}}>Womens Shoes</h3>
        </div>
      </div>
      <div className="controlCart">
        {dt_shs_Wmes.map(el => (
          <Cards key={el.id} productsId={el.id} items={el} />
        ))}
      </div>
    </>
  )
}

export default ShoesWomen
