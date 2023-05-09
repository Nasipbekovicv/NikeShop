
import './AddToCard.css'
import { actions } from '../../redux/cardShop/CardShopSlice'

import { useDispatch, useSelector } from "react-redux"

const AddToCard = () => {
  const toComeCard = useSelector(st => st.addToCard.CardItems)

  const dispatch = useDispatch()

  const minCut = () => {
    {toComeCard.map(e => {
      if (e.count) {
         e.count !== e.countMin

      }
    })}
  }

  return (
    <div style={{ margin: '50px 0' }}>
      <div>
        {toComeCard.map(e => {
          return (
            <div key={e.id}>
              <div className='controlBlockAndUshetchik'>
              <div>
                <div className='controlBlockComeCart'>
                  <div>
                    <img className='imgCardCome' src={e.img} alt="" />
                  </div>
                  <div className='controlTextCome'>
                    <h5 className='nameTextCome'>{e.name}</h5>
                    <p>{e.title}</p>
                  <p>${e.price * e.count}</p>
                  </div>
                </div>
              </div>
              <div className='controlUshootchik'>
                <button>+</button>
                <p>{e.count}</p>
                <button onClick={e.countMin}>-</button>
              </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AddToCard
