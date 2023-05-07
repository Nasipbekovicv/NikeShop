import { Card } from 'antd';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Buttons from "../button/Buttons";
import "./Cards.css";

import { actions } from '../../redux/search/SearchSlice';

const Cards = props => {
   const { Meta } = Card;
   const navigation = useNavigate();

   const dispatch = useDispatch()

   const goDetailPage = (id) => {
      navigation(`/mini-cards/${id}`)
      dispatch(actions.clearItem2())
   }


   return (
      <div>
         <Card
            onClick={() =>goDetailPage(props.productsId) }
            hoverable
            style={{
               width: 350,
            }}
            cover={<img className="imgCards" alt="example" src={props.items.img} />}
         >
            <div style={{height:145, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
               <div>
            <h3 className="textCardsName">{props.items.name}</h3>
            <Meta className="textCardsTitle" description={props.items.title} />
               </div>
               <div>
            <Buttons className="textCardsPrice" title={`$ ${props.items.price}`} />
               </div>
            </div>
         </Card>
      </div>

   );
};

export default Cards;
