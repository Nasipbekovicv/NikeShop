import { useSelector } from 'react-redux'
import './ShowProducts.css'
import CardShopSearch from './cardShop/CardShopSearch'

const getItems = (st) => st.filterMansShoes.item2

  const ShowProducts = () => {

  const item2Arr = useSelector(getItems)


  return (
    <div className='container'>
      <div className='controlShowSearch'>
        <div className='ControlShowBlock'>
          <div className='controlShopCartSearch' >
            {item2Arr?.map(el => {
              return <CardShopSearch productsId={el.id} key={el.id} items={el} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowProducts
