
import './AddToCard.css'
import { actions } from '../../redux/cardShop/CardShopSlice'
import { useDispatch, useSelector } from "react-redux"

import Buttons from '../../components/button/Buttons'

const AddToCard = () => {
  const toComeCard = useSelector(st => st.addToCard.CardItems)
  const allPrice = toComeCard.reduce((e, i) => e += i.price * i.count, 0)
  const allCount = toComeCard.reduce((e, i) => e += i.count , 0)

  const buyCart = () => {
    return(
      <div>
        <div className='cartBuyCard'>
          <div>
            <div>
              <p>Your Bag</p>
            </div>
            <div>
              <div>
              PIECES OF PRODUCTS: {allCount || 0}
              </div>
            </div>
            <div className='pay'>
            <p>Paiments</p>
            <div className='controlBlockImgPay'>
              <div className='bgImgPay'><img className='ControlImgPay' src="https://img.alicdn.com/imgextra/i3/O1CN01gIhCHf1Ug7BSoThE4_!!6000000002546-2-tps-372-120.png" alt="" /></div>
              <div className='bgImgPay'><img style={{width: 17.5, }} className='ControlImgPay' src="https://img.alicdn.com/imgextra/i3/O1CN01ngzoEK1uLfVr2OAxm_!!6000000006021-2-tps-154-96.png" alt="" /></div>
              <div className='bgImgPay'><img style={{width: 44, }} className='ControlImgPay' src="https://img.alicdn.com/imgextra/i1/O1CN01Nr3Xc71ujU6UtujbY_!!6000000006073-2-tps-494-120.png" alt="" /></div>
              <div className='bgImgPay'><img style={{width: 27.5, }} className='ControlImgPay' src="https://img.alicdn.com/imgextra/i4/O1CN01toATBI20qFeWJCLn9_!!6000000006900-2-tps-292-120.png" alt="" /></div>
              <div className='bgImgPay'><img style={{width: 29, }} className='ControlImgPay' src="https://img.alicdn.com/imgextra/i2/O1CN01BC5iks1QvuNYEIsZK_!!6000000002039-2-tps-302-120.png" alt="" /></div>
            </div>
            </div>
          </div>
          <div>
          <div className='totalPrice'><p>Total:</p><p> ${allPrice || 0}</p></div>
          </div>
          <div>
          <Buttons title="buy"/>
          </div>
        </div>
      </div>
    )
  }

  const dispatch = useDispatch()

  return (
    <div style={{ margin: '50px 0', display: 'flex' }}>
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
                  <button className='btnCount' onClick={() => dispatch(actions.decrement(e.id))}>+</button>
                  <p style={{fontWeight: 600, padding: '3px 0'}}>{e.count}</p>
                  <button className='btnCount' onClick={() => dispatch(actions.increment(e.id))}>-</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div>
        <div>
          {toComeCard?.length > 0 ?  buyCart() : 
          <div>
            <p>Cupite</p>
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default AddToCard
