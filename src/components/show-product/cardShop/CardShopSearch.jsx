
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { actions } from '../../../redux/search/SearchSlice';
import './CardShopSearch.css'

const CardShopSearch = (props) => {
  const navigation = useNavigate();

   const dispatch = useDispatch()
   const goDetailPage = (id) => {
      navigation(`/mini-cards/${id}`)
      dispatch(actions.clearItem2())
   }

  return (
    <div>
      <div className='controlBlockImgSearch'>
        <div className='blockImgSearch' onClick={() => goDetailPage(props.productsId)}>
          <img className='imgSearch' src={props.items.img} alt="" />
          <div>
            <p>{props.items.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardShopSearch
