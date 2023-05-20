
import { useDispatch, useSelector } from "react-redux"
import Buttons from '../../components/button/Buttons'
import { actions } from '../../redux/cardShop/CardShopSlice'
import './AddToCard.css'

const AddToCard = () => {
  const toComeCard = useSelector(st => st.addToCard.CardItems)
  const allPrice = toComeCard.reduce((e, i) => e += i.price * i.count, 0)
  const allCount = toComeCard.reduce((e, i) => e += i.count , 0)

  const dispatch = useDispatch()

  const buyCart = () => {
    return(
      <div>
        <div className='cartBuyCard'>
          <div>
            <div className='yourBag'>
              <p>Your Bag</p>
            </div>
            <div>
              <div className='countPieces'>
              <p>PIECES OF PRODUCTS:</p> <span>{allCount || 0}</span>
              </div>
            </div>
            <div className='pay'>
            <p style={{padding: '10px 10px 5px 0px'}}>Paiments</p>
            <div className='controlBlockImgPay'>
              <div className='bgImgPay'><img style={{width: 45, }} className='ControlImgPay' src="https://img.alicdn.com/imgextra/i3/O1CN01gIhCHf1Ug7BSoThE4_!!6000000002546-2-tps-372-120.png" alt="" /></div>
              <div className='bgImgPay'><img style={{width: 24.5, }} className='ControlImgPay' src="https://img.alicdn.com/imgextra/i3/O1CN01ngzoEK1uLfVr2OAxm_!!6000000006021-2-tps-154-96.png" alt="" /></div>
              <div className='bgImgPay'><img style={{width: 60, }} className='ControlImgPay' src="https://img.alicdn.com/imgextra/i1/O1CN01Nr3Xc71ujU6UtujbY_!!6000000006073-2-tps-494-120.png" alt="" /></div>
              <div className='bgImgPay'><img style={{width: 36, }} className='ControlImgPay' src="https://img.alicdn.com/imgextra/i4/O1CN01toATBI20qFeWJCLn9_!!6000000006900-2-tps-292-120.png" alt="" /></div>
              <div className='bgImgPay'><img style={{width: 38, }} className='ControlImgPay' src="https://img.alicdn.com/imgextra/i2/O1CN01BC5iks1QvuNYEIsZK_!!6000000002039-2-tps-302-120.png" alt="" /></div>
            </div>
            </div>
          </div>
          <div>
          <div className='totalPrice'><p>Total:</p><p > ${allPrice || 0}</p></div>
          </div>
          <div className='btnBuyCardControl'>
          <Buttons title="buy"/>
          </div>
        </div>
      </div>
    )
  }

 

  return (
    <div style={{ margin: '50px 0', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        {toComeCard.map(e => {
          return (
            <div key={e.id}>
              <div className='controlBlockAndUshetchik'>
                <div>
                  <div style={{borderRadius: '0px 10px 10px 0'}} className='controlBlockComeCart'>
                    <div>
                      <img className='imgCardCome' src={e.img} alt="" />
                    </div>
                    <div className='controlTextCome'>
                      <h5 className='nameTextCome'>{e.name}</h5>
                      <p style={{fontSize: 14}} >{e.title}</p>
                      <p style={{padding: '10px 0 0 0', fontWeight: 600}}>${e.price * e.count}</p>
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
      <div className='blockBuyControl'>
        <div style={{
            height: '70vh',
           
          }} className='fixblockBuyControl'>
          {toComeCard?.length > 0 ?  buyCart() : 
          <div>
            <p style={{
              position: 'relative',
              left: '-180px',
              fontSize: 33,
              fontWeight: 600
          }}>Cupite</p>
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default AddToCard
